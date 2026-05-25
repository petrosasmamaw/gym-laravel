<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Program;

class ProgramController extends Controller
{
    public function show(Request $request)
    {
        $program = Program::where('user_id', $request->user()->id)->first();
        return response()->json(['program' => $program]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'schedule' => 'required|array',
        ]);

        $program = Program::updateOrCreate(
            ['user_id' => $request->user()->id],
            ['schedule' => $data['schedule']]
        );

        return response()->json(['program' => $program]);
    }
}
