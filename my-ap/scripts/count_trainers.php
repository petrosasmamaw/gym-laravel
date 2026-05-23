<?php
$pdo = new PDO('pgsql:host=ep-patient-breeze-apq3kynu-pooler.c-7.us-east-1.aws.neon.tech;port=5432;dbname=neondb;sslmode=require','neondb_owner','npg_9aAnITKF3qdy');
$stmt = $pdo->query('select count(*) from trainers');
echo $stmt->fetchColumn() . "\n";
?>
