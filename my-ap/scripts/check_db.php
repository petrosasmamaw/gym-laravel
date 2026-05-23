<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

try {
    $db = $app->make('db');
    $db->connection()->getPdo();
    echo "DB connected successfully\n";
    exit(0);
} catch (Throwable $e) {
    echo "DB connection failed: " . $e->getMessage() . "\n";
    exit(1);
}
