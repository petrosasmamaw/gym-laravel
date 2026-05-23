<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\DB;

$migration = '2026_05_23_183356_create_personal_access_tokens_table';
$max = DB::table('migrations')->max('batch');
$batch = $max ? $max + 1 : 1;
DB::table('migrations')->insert(['migration' => $migration, 'batch' => $batch]);
echo "Recorded migration $migration batch=$batch\n";
