<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\Schema;

if (Schema::hasTable('personal_access_tokens')) {
    Schema::drop('personal_access_tokens');
    echo "Dropped personal_access_tokens\n";
} else {
    echo "Table personal_access_tokens does not exist\n";
}
