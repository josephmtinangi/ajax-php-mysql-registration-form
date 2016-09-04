<?php

try {
  $pdo = new PDO('mysql:host=localhost;dbname=task_app', 'root', '');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  die($e->getMessage());
}
