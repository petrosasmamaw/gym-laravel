<?php
$dsn = "pgsql:host=ep-patient-breeze-apq3kynu-pooler.c-7.us-east-1.aws.neon.tech;port=5432;dbname=neondb;sslmode=require";
$user = 'neondb_owner';
$pass = 'npg_9aAnITKF3qdy';
try {
    $pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    echo "Connected\n";
    $stmts = [
        // Drop if exists to start clean
        'DROP TABLE IF EXISTS failed_jobs;',
        'DROP TABLE IF EXISTS job_batches;',
        'DROP TABLE IF EXISTS jobs;',
        'DROP TABLE IF EXISTS cache_locks;',
        'DROP TABLE IF EXISTS cache;',
        'DROP TABLE IF EXISTS sessions;',
        'DROP TABLE IF EXISTS password_reset_tokens;',
        'DROP TABLE IF EXISTS users;',

        // users
        'CREATE TABLE users (id bigserial PRIMARY KEY, name varchar(255) NOT NULL, email varchar(255) NOT NULL, email_verified_at timestamp NULL, password varchar(255) NOT NULL, remember_token varchar(100) NULL, created_at timestamp NULL, updated_at timestamp NULL);',
        'ALTER TABLE users ADD CONSTRAINT users_email_unique UNIQUE (email);',
        // password_reset_tokens
        'CREATE TABLE password_reset_tokens (email varchar(255) NOT NULL, token varchar(255) NOT NULL, created_at timestamp NULL);',
        'ALTER TABLE password_reset_tokens ADD PRIMARY KEY (email);',
        // sessions
        'CREATE TABLE sessions (id varchar(255) NOT NULL, user_id bigint NULL, ip_address varchar(45) NULL, user_agent text NULL, payload text NOT NULL, last_activity integer NOT NULL);',
        'ALTER TABLE sessions ADD PRIMARY KEY (id);',
        'CREATE INDEX sessions_user_id_index ON sessions (user_id);',
        'CREATE INDEX sessions_last_activity_index ON sessions (last_activity);',
        // cache
        'CREATE TABLE cache (key varchar(255) NOT NULL, value text, expiration bigint);',
        'ALTER TABLE cache ADD PRIMARY KEY (key);',
        'CREATE INDEX cache_expiration_index ON cache (expiration);',
        // cache_locks
        'CREATE TABLE cache_locks (key varchar(255) NOT NULL, owner varchar(255) NOT NULL, expiration bigint);',
        'ALTER TABLE cache_locks ADD PRIMARY KEY (key);',
        'CREATE INDEX cache_locks_expiration_index ON cache_locks (expiration);',
        // jobs
        'CREATE TABLE jobs (id bigserial PRIMARY KEY, queue varchar(255) NOT NULL, payload text NOT NULL, attempts smallint NOT NULL, reserved_at integer NULL, available_at integer NOT NULL, created_at integer NOT NULL);',
        'CREATE INDEX jobs_queue_index ON jobs (queue);',
        // job_batches
        'CREATE TABLE job_batches (id varchar(255) NOT NULL, name varchar(255) NOT NULL, total_jobs integer NOT NULL, pending_jobs integer NOT NULL, failed_jobs integer NOT NULL, failed_job_ids text NOT NULL, options text NULL, cancelled_at integer NULL, created_at integer NOT NULL, finished_at integer NULL);',
        'ALTER TABLE job_batches ADD PRIMARY KEY (id);',
        // failed_jobs
        'CREATE TABLE failed_jobs (id bigserial PRIMARY KEY, uuid varchar(255) NOT NULL, connection varchar(255) NOT NULL, queue varchar(255) NOT NULL, payload text NOT NULL, exception text NOT NULL, failed_at timestamp NOT NULL);',
        'CREATE UNIQUE INDEX failed_jobs_uuid_unique ON failed_jobs (uuid);',
        'CREATE INDEX failed_jobs_connection_queue_failed_at_index ON failed_jobs (connection, queue, failed_at);',
    ];
    foreach ($stmts as $sql) {
        echo "Executing: $sql\n";
        $pdo->exec($sql);
        echo "OK\n";
    }
} catch (PDOException $e) {
    echo "PDOException: " . $e->getMessage() . "\n";
}
?>
