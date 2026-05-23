<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\DB;

$rows = DB::table('migrations')->orderBy('batch')->get();
foreach ($rows as $r) {
    echo $r->migration . "  batch:" . $r->batch . "\n";
}

