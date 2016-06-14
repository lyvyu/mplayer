<?php
/**
 * Created by PhpStorm.
 * User: lyvyu
 * Date: 14.06.2016
 * Time: 17:22
 */

namespace App\Http\Controllers\Back;

use App\Models\Tracks;
use App\Http\Controllers\Controller;
use App\Http\Requests\Request;
use Illuminate\Support\Facades\Input;

class MainController extends Controller
{
    public function index() {
        return Tracks::all();
    }

    public function postAdd() {
        var_dump(Input::get());
    }
    
}