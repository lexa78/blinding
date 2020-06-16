<?php
namespace App\Traits;


use App\Category;
use App\Http\Helpers\PageHelper;
use App\Post;
use Illuminate\Support\Facades\Cache;
use SimpleXMLElement;

trait SitemapTrait
{
    public static function boot()
    {
        parent::boot();

        static::created(function($model)
        {
            $sitemap = new SimpleXMLElement(file_get_contents(public_path(PageHelper::SITEMAP_FILE_NAME)));
            $url = $sitemap->addChild('url');
            $slug = null;
            if (isset($model->translate_name)) {
                $slug = '/category/'. $model->translate_name;
                Cache::forget(Category::CACHE_KEY);
            } elseif (isset($model->translate_title)) {
                $slug = '/post/'. $model->translate_title;
                Cache::forget(Category::CACHE_KEY);
                Cache::forget(Post::CACHE_KEY);
            }
            if (!empty($slug)) {
                $link = PageHelper::getProtocol().$_SERVER['SERVER_NAME'].$slug;
                $url->addChild('loc', $link);
                $url->addChild('lastmod', date('c'));
                $url->addChild('priority', 0.9);
                $sitemap->saveXML(public_path(PageHelper::SITEMAP_FILE_NAME));
            }
        });

        static::updated(function($model)
        {
            $sitemap = new SimpleXMLElement(file_get_contents(public_path(PageHelper::SITEMAP_FILE_NAME)));
            foreach ($model->getDirty() as $fieldName => $newValue) {
                if ($fieldName == 'translate_name') {
                    self::handleXml($sitemap, $model, $fieldName, $newValue);
                    Cache::forget(Category::CACHE_KEY);
                } elseif ($fieldName == 'translate_title' || $fieldName == 'published') {
                    if ($fieldName == 'translate_title') {
                        self::handleXml($sitemap, $model, $fieldName, $newValue);
                    }
                    if ($fieldName == 'published') {
                        if (!$newValue) {
                            foreach ($sitemap->url as $url) {
                                $urlAsArray = explode('/', $url->loc);
                                $urlAsArrayLen = count($urlAsArray);
                                $lastPart = $urlAsArray[$urlAsArrayLen-1];
                                if ($lastPart == $model->translate_title) {
                                    $node = dom_import_simplexml($url);
                                    $node->parentNode->removeChild($node);
                                    $sitemap->saveXML(public_path(PageHelper::SITEMAP_FILE_NAME));
                                    break;
                                }
                            }
                        } else {
                            $url = $sitemap->addChild('url');
                            $slug = '/post/'. $model->translate_title;
                            Cache::forget(Post::CACHE_KEY);
                            $link = PageHelper::getProtocol().$_SERVER['SERVER_NAME'].$slug;
                            $url->addChild('loc', $link);
                            $url->addChild('lastmod', date('c'));
                            $url->addChild('priority', 0.9);
                            $sitemap->saveXML(public_path(PageHelper::SITEMAP_FILE_NAME));
                        }
                    }
                    Cache::forget(Post::CACHE_KEY);
                }
            }
        });

        static::deleted(function($model)
        {
            $sitemap = new SimpleXMLElement(file_get_contents(public_path(PageHelper::SITEMAP_FILE_NAME)));
            if (isset($model->translate_name)) {
                foreach ($sitemap->url as $url) {
                    $urlAsArray = explode('/', $url->loc);
                    $urlAsArrayLen = count($urlAsArray);
                    $lastPart = $urlAsArray[$urlAsArrayLen - 1];
                    if ($lastPart == $model->translate_name) {
                        $node = dom_import_simplexml($url);
                        $node->parentNode->removeChild($node);
                        $sitemap->saveXML(public_path(PageHelper::SITEMAP_FILE_NAME));
                        Cache::forget(Category::CACHE_KEY);
                        break;
                    }
                }
            }
        });
    }

    private static function handleXml($sitemap, $model, $fieldName, $newValue)
    {
        foreach ($sitemap->url as $url) {
            $urlAsArray = explode('/', $url->loc);
            $urlAsArrayLen = count($urlAsArray);
            $lastPart = $urlAsArray[$urlAsArrayLen-1];
            if ($lastPart == $model->original[$fieldName]) {
                $urlAsArray[$urlAsArrayLen-1] = $newValue;
                $loc = implode('/', $urlAsArray);
                $url->loc = $loc;
                $url->lastmod = date('c');
                $sitemap->saveXML(public_path(PageHelper::SITEMAP_FILE_NAME));
                break;
            }
        }
    }
}