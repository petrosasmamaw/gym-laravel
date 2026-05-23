<?php
$dsn = "pgsql:host=ep-patient-breeze-apq3kynu-pooler.c-7.us-east-1.aws.neon.tech;port=5432;dbname=neondb;sslmode=require";
$user = 'neondb_owner';
$pass = 'npg_9aAnITKF3qdy';
try {
    $pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    $migrations = [
        '0001_01_01_000000_create_users_table',
        '0001_01_01_000001_create_cache_table',
        '0001_01_01_000002_create_jobs_table',
    ];
    $stmt = $pdo->prepare('INSERT INTO migrations (migration, batch) VALUES (?, ?)');
    foreach ($migrations as $m) {
        $stmt->execute([$m, 1]);
        echo "Inserted $m\n";
    }
} catch (PDOException $e) {
    echo "PDOException: " . $e->getMessage() . "\n";
}
?>
