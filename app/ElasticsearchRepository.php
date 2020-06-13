<?php
namespace App;

use App\Http\Controllers\PostController;
use Elasticsearch\Client;
use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Log;

class ElasticsearchRepository implements PostsRepository
{
    /** @var \Elasticsearch\Client */
    private $elasticsearch;

    public function __construct(Client $elasticsearch)
    {
        $this->elasticsearch = $elasticsearch;
    }

    public function search(string $query = '') : array
    {
        try {
            $items = $this->searchOnElasticsearch($query);
        } catch (\Exception $e) {
            Log::alert('ERROR!!! Сломался Elasticsearc! Текст ошибки: '.$e->getMessage());
            return [];
        }
//        return $this->buildCollection($items);
        return Arr::pluck($items['hits']['hits'], '_id');
    }

    private function searchOnElasticsearch(string $query = ''): array
    {
        $model = new Post();
        $items = $this->elasticsearch->search([
            'index' => $model->getSearchIndex(),
            'type' => $model->getSearchType(),
            'body' => [
                'query' => [
                    'multi_match' => [
                        'fields' => ['title^5', 'post_text'],
                        'query' => $query,
                        "fuzziness" => "AUTO"
                    ],
                ],
            ],
        ]);
        return $items;
    }

//    private function buildCollection(array $items): Collection
//    {
//        $ids = Arr::pluck($items['hits']['hits'], '_id');
//        return Post::findMany($ids)
//            ->sortBy(function ($article) use ($ids) {
//                return array_search($article->getKey(), $ids);
//            });
//    }
}
