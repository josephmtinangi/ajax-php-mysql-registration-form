<?php

require_once '../config.php';

if($_SERVER['REQUEST_METHOD'] == 'POST')
{

  $username = $_POST['username'];
  $email = $_POST['email'];
  $user_password = $_POST['password'];

  $password   = password_hash( $user_password, PASSWORD_BCRYPT, array('cost' => 11));

  try {
    $statement = $pdo->prepare('SELECT * FROM users WHERE email=:email');
    $statement->execute([':email' => $email]);

    $count = $statement->rowCount();

    if($count == 0){
      $statement = $pdo->prepare('INSERT INTO users (username, email, password) VALUES (:username, :email, :password)');

      $statement->bindParam(':username', $username);
      $statement->bindParam(':email', $email);
      $statement->bindParam(':password', $password);

      if($statement->execute())
      {
        echo 'registered';
      }
      else
      {
        echo 'Query could not execute';
      }
    }else{
      echo '1';
    }
  } catch(PDOException $e) {
    die($e->getMessage());
  }
}
