<?php
$pdo = new PDO('pgsql:host=ep-patient-breeze-apq3kynu-pooler.c-7.us-east-1.aws.neon.tech;port=5432;dbname=neondb;sslmode=require','neondb_owner','npg_9aAnITKF3qdy');
$stmt = $pdo->query('SELECT id, migration, batch FROM migrations ORDER BY id');
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
foreach ($rows as $r) {
    echo $r['id'] . ': batch=' . $r['batch'] . ' migration=' . $r['migration'] . "\n";
}
?>
