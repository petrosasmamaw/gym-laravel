<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\DB;

$rows = DB::select("SELECT indexname, tablename FROM pg_indexes WHERE tablename = 'personal_access_tokens'");
if (empty($rows)) {
    echo "No indexes found for personal_access_tokens\n";
} else {
    foreach ($rows as $r) {
        echo $r->indexname . ' on ' . $r->tablename . "\n";
    }
}
