<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Member;
use App\SearchQuery;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    const MEMBERS_COUNT_ON_PAGE = 15;
    const SEARCH_QUERIES_COUNT_ON_PAGE = 15;
    const SIGNED_MEMBER_TYPE = 1;
    const ALL_MEMBERS_TYPE = 2;
    const ALL_SEARCH_QUERIES_TYPE = 1;
    const NEW_SEARCH_QUERIES_TYPE = 2;
    const PIDOR_MEMBER_TYPE = 3;

    public function index()
    {
        $commentsCount = Comment::new()->count();
        $signedMembersCount = Member::where('signed', 1)->count();
        $pidorsCount = Member::where('pidor', 1)->count();
        $totalMembersCount = Member::count();
        $totalSearchQueriesCount = SearchQuery::count();
        $newSearchQueriesCount = SearchQuery::new()->count();
        return view('admin.index', compact('commentsCount', 'signedMembersCount', 'pidorsCount',
            'totalMembersCount', 'totalSearchQueriesCount', 'newSearchQueriesCount'));
    }

    public function showMembers($type)
    {
        switch ($type) {
            case self::SIGNED_MEMBER_TYPE:
                $query = Member::where('signed', 1)->orderBy('updated_at', 'DESC');
                $member = 'подписавшиеся';
                break;
            case self::ALL_MEMBERS_TYPE:
                $query = Member::orderBy('updated_at', 'DESC');
                $member = 'все';
                break;
            case self::PIDOR_MEMBER_TYPE:
                $query = Member::where('pidor', 1)->orderBy('updated_at', 'DESC');
                $member = 'пидорасы';
                break;
        }
        $members = $query->paginate(self::MEMBERS_COUNT_ON_PAGE);
        return view('admin.member.show', compact('members','member'));
    }

    public function showSearchQueries()
    {
        $queries = SearchQuery::orderBy('is_new', 'DESC')
            ->orderBy('created_at', 'DESC')
            ->paginate(self::SEARCH_QUERIES_COUNT_ON_PAGE);
        return view('admin.query.show', compact('queries'));
    }

    public function makeQueryOld(Request $request)
    {
        $queryId = $request->input('id');
        SearchQuery::find($queryId)->update(['is_new' => 0]);
        exit('ok');
    }
}
