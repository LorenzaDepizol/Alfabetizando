<?php
session_start();
include_once "../php_action/db_connect.php";


if(empty($_POST['email']) || empty($_POST['senha'])) {
    header('Location:../index.php');
    $_SESSION["vazio"] = true;
    exit();
}
$email = mysqli_real_escape_string($connect, $_POST['email']);
$senha = mysqli_real_escape_string($connect, $_POST['senha']);

$query = "SELECT nome from usuario where email = '{$email}' and senha = '{$senha}'"; 

$result = mysqli_query($connect, $query);

$row = mysqli_num_rows($result);

if ($row == 1) {
    $_SESSION["login"] = $_POST['email'];
    header('Location:../inicial.php');  
    exit;
}else{
    $_SESSION['nao_autenticado'] = true;
    header('Location:../index.php');
    exit;
}
