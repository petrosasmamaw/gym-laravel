<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Trainer;
use Illuminate\Http\Request;

class TrainerController extends Controller
{
    public function index()
    {
        return response()->json(Trainer::all())->header('Access-Control-Allow-Origin','*')->header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    }
}
