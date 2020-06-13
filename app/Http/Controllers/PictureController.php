<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class PictureController extends Controller
{
    const PUBLIC_IMAGES_DIR = 'public/images/';

    public static function removeFirstFolders($item)
    {
        return str_replace(self::PUBLIC_IMAGES_DIR, '', $item);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $directories = Storage::directories('public');
        if (empty($directories)) {
            Storage::makeDirectory(self::PUBLIC_IMAGES_DIR);
        }
        $directories = Storage::directories(self::PUBLIC_IMAGES_DIR);
        if (!empty($directories)) {
            $directories = array_map(['App\Http\Controllers\PictureController', 'removeFirstFolders'], $directories);
        }
        return view('admin.picture.index', compact('directories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.picture.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $directories = Storage::directories(self::PUBLIC_IMAGES_DIR);
        if (!empty($directories)) {
            $directories = array_map(['App\Http\Controllers\PictureController', 'removeFirstFolders'], $directories);
        }
        $folderName = $request->input('folder_name');
        if (in_array($folderName, $directories)) {
            return redirect()->route( 'pictures.index', [] )->with('error', 'Такая папка уже есть');
        } else {
            Storage::makeDirectory(self::PUBLIC_IMAGES_DIR.$folderName);
            return redirect()->route( 'pictures.index', [] )->with('success', 'Папка добавлена!');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view('admin.picture.edit', ['folder' => $id]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $folderName = $request->input('folder_name');
        if ($folderName == $id) {
            return redirect()->route( 'pictures.index', [] )->with('error', 'Папка без изменений');
        }
        Storage::move(self::PUBLIC_IMAGES_DIR.$id, self::PUBLIC_IMAGES_DIR.$folderName);
        return redirect()->route( 'pictures.index', [] )->with('success', 'Папка изменена');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Storage::deleteDirectory(self::PUBLIC_IMAGES_DIR.$id);
        return redirect()->route( 'pictures.index', [] )->with('success', 'Папка удалена');
    }

    public function addImage(Request $request)
    {
        $folderName = $request->input('folders');
        $makeSmallImg = $request->input('small_image');
        $path = storage_path('app/'.self::PUBLIC_IMAGES_DIR.$folderName);
        if($request->hasFile('file_name')) {
            foreach ($request->file() as $file) {
                foreach ($file as $f) {
                    $f->move($path, $f->getClientOriginalName());
                    if ($makeSmallImg) {
                        $img = Image::make($path.'/'.$f->getClientOriginalName());
                        $img->resize(75, 75);
                        $img->save($path.'/small_'.$f->getClientOriginalName());
                    }
                }
            }
            return redirect()->route( 'pictures.index', [] )->with('success', 'Картинки загружены');
        } else {
            return redirect()->route( 'pictures.index', [] )->with('error', 'Не добавлены файлы для загрузки');
        }
    }
}
