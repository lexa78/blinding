<?php
namespace App\Search;


use Elasticsearch\Client;
use Illuminate\Support\Facades\Log;

class ElasticsearchObserver
{
    /** @var \Elasticsearch\Client */
    private $elasticsearch;

    public function __construct(Client $elasticsearch)
    {
        $this->elasticsearch = $elasticsearch;
    }

    public function saved($model)
    {
        if ($model->published) {
            try {
                $this->elasticsearch->index(
                    [
                        'index' => $model->getSearchIndex(),
                        'type' => $model->getSearchType(),
                        'id' => $model->getKey(),
                        'body' => $model->toSearchArray(),
                    ]
                );
            } catch (\Exception $e) {
                Log::alert('ERROR!!! Сломался Elasticsearc! При добавлении статьи "'.$model->title.'", в индекс не добавлено. Текст ошибки: '.$e->getMessage());
            }
        }
    }

    public function updated($model)
    {
        foreach ($model->getDirty() as $fieldName => $newValue) {
            if ($fieldName == 'published') {
                if ($newValue) {
                    try {
                        $this->elasticsearch->index(
                            [
                                'index' => $model->getSearchIndex(),
                                'type' => $model->getSearchType(),
                                'id' => $model->getKey(),
                                'body' => $model->toSearchArray(),
                            ]
                        );
                    } catch (\Exception $e) {
                        Log::alert('ERROR!!! Сломался Elasticsearc! При обновлении статьи "'.$model->title.'", в индекс не добавлено. Текст ошибки: '.$e->getMessage());
                    }
                } else {
                    try {
                        $this->elasticsearch->delete(
                            [
                                'index' => $model->getSearchIndex(),
                                'type' => $model->getSearchType(),
                                'id' => $model->getKey(),
                            ]
                        );
                    } catch (\Exception $e) {
                        Log::alert('ERROR!!! Сломался Elasticsearc! При удалении статьи "'.$model->title.'", индекс не удалился. Текст ошибки: '.$e->getMessage());
                    }
                }
            }
        }
    }

    public function deleted($model)
    {
        $this->elasticsearch->delete([
            'index' => $model->getSearchIndex(),
            'type' => $model->getSearchType(),
            'id' => $model->getKey(),
        ]);
    }
}