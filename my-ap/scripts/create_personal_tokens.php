<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

if (Schema::hasTable('personal_access_tokens')) {
    echo "personal_access_tokens already exists\n";
    exit;
}

$sqls = [
    "CREATE TABLE personal_access_tokens (
        id bigserial primary key,
        tokenable_type varchar(255) not null,
        tokenable_id bigint not null,
        name text not null,
        token varchar(64) not null,
        abilities text,
        last_used_at timestamp null,
        expires_at timestamp null,
        created_at timestamp null,
        updated_at timestamp null
    );",
    "CREATE INDEX personal_access_tokens_tokenable_type_tokenable_id_index ON personal_access_tokens (tokenable_type, tokenable_id);",
    "ALTER TABLE personal_access_tokens ADD CONSTRAINT personal_access_tokens_token_unique UNIQUE (token);",
    "CREATE INDEX personal_access_tokens_expires_at_index ON personal_access_tokens (expires_at);",
];

foreach ($sqls as $sql) {
    DB::statement($sql);
    echo "Executed: " . strtok($sql, "\n") . "\n";
}

echo "Done\n";
