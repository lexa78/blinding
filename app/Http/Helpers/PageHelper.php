<?php


namespace App\Http\Helpers;


use App\Category;
use App\Post;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use stdClass;

class PageHelper
{
    const TIME_SAVE_CACHE = 86400;  //секунд в сутках
    const SITEMAP_FILE_NAME = 'sitemap.xml';

    public static function getCategoryInfo()
    {
        $categories = Cache::remember(Category::CACHE_KEY, self::TIME_SAVE_CACHE, function () {
            return DB::table('posts')
                ->leftJoin('categories', 'categories.id', '=', 'posts.category_id')
                ->select(DB::raw('COUNT(posts.id) as postsCount, categories.name, categories.id'))
                ->groupBy('posts.category_id')
                ->groupBy('categories.name')
                ->groupBy('categories.id')
                ->get();
        });
        return $categories;
    }

    public static function getRecentPostsInfo()
    {
        $recentPosts = Cache::remember(Post::CACHE_KEY, self::TIME_SAVE_CACHE, function () {
            return Post::where('published', 1)->orderby('created_at', 'desc')->limit(5)->get();
        });

        $result = [];
        foreach ($recentPosts as $post) {
            $newPost = new stdClass();
            $newPost->title = $post->title;
            $newPost->url = $post->translate_title;
            $newPost->img = self::getSmallImagePath($post->image_path);
            $newPost->daysAgo = self::getDateDiff($post->created_at);
            $result[] = $newPost;
        }
        return $result;
    }

    public static function getSmallImagePath($path)
    {
        $explodedPath = explode('/', $path);
        $explodedPathLength = count($explodedPath);
        $fileName = $explodedPath[$explodedPathLength - 1];
        $fileName = 'small_'.$fileName;
        $explodedPath[$explodedPathLength - 1] = $fileName;
        return implode('/', $explodedPath);
    }

    public static function getDateDiff($date)
    {
        $now = time();
        $past = strtotime($date);
        $diffInDays = intval(floor(($now - $past) / (60 * 60 * 24)));
        switch (true) {
            case $diffInDays <=0:
                //считаем часы
                $diffInHours = intval(floor(($now - $past) / (60 * 60)));
                if ($diffInHours > 0) {
                    if ($diffInHours == 1) {
                        return 'Час назад';
                    } else {
                        $phrase = $diffInHours.' '.self::rightWord($diffInHours, ['час', 'часа', 'часов']).' назад';
                        return $phrase;
                    }
                } else {
                    $diffInMinutes = intval(floor(($now - $past) / 60));
                    if ($diffInMinutes < 10) {
                        return 'Только что';
                    } else {
                        $phrase = $diffInMinutes.' '.self::rightWord($diffInMinutes, ['минуту', 'минуты', 'минут']).' назад';
                        return $phrase;
                    }
                }
            case $diffInDays > 0 && $diffInDays < 31:
                //возвращаем дни
                if ($diffInDays == 1) {
                    return 'День назад';
                } else {
                    $phrase = $diffInDays.' '.self::rightWord($diffInDays, ['день', 'дня', 'дней']).' назад';
                    return $phrase;
                }
            case $diffInDays >= 31 && $diffInDays < 365:
                //считаем месяцы
                $diffInMonths = intval(floor(($now - $past) / (60 * 60 * 24 * 31)));
                if ($diffInMonths == 1) {
                    return 'Месяц назад';
                } else {
                    $phrase = $diffInMonths.' '.self::rightWord($diffInMonths, ['месяц', 'месяца', 'месяцев']).' назад';
                    return $phrase;
                }
            case $diffInDays > 365:
                //считаем годы
                $diffInYears = intval(floor(($now - $past) / (60 * 60 * 24 * 365)));
                if ($diffInYears == 1) {
                    return 'Год назад';
                } else {
                    $phrase = $diffInYears.' '.self::rightWord($diffInYears, ['год', 'года', 'лет']).' назад';
                    return $phrase;
                }
        }
    }

    public static function rightWord($num, $words)
    {
        $num = $num % 100;
        if ($num > 19) {
            $num = $num % 10;
        }
        switch ($num) {
            case 1: {
                return($words[0]);
            }
            case 2: case 3: case 4: {
            return($words[1]);
        }
            default: {
                return($words[2]);
            }
        }
    }

    public static function getProtocol()
    {
        $isHttps = !empty($_SERVER['HTTPS']) && 'off' !== strtolower($_SERVER['HTTPS']);
        return $isHttps ? 'https://' : 'http://';
    }

    public static function getDateWithRusMonth($date, $month)
    {
        $monthsList = array(".01." => "января", ".02." => "февраля",
            ".03." => "марта", ".04." => "апреля", ".05." => "мая", ".06." => "июня",
            ".07." => "июля", ".08." => "августа", ".09." => "сентября",
            ".10." => "октября", ".11." => "ноября", ".12." => "декабря");
        return str_replace($month, ' '.$monthsList[$month].' ', $date);
    }
}