<?php
$pdo = new PDO('pgsql:host=ep-patient-breeze-apq3kynu-pooler.c-7.us-east-1.aws.neon.tech;port=5432;dbname=neondb;sslmode=require','neondb_owner','npg_9aAnITKF3qdy');
$sql = "CREATE TABLE IF NOT EXISTS trainers (
    id bigserial PRIMARY KEY,
    name varchar(255) NOT NULL,
    age smallint NOT NULL,
    description text NULL,
    sex varchar(10) NULL,
    imageurl varchar(255) NULL,
    created_at timestamp NULL,
    updated_at timestamp NULL
);";
$pdo->exec($sql);
echo "created trainers if missing\n";
?>
