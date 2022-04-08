<?php
    session_start();
    include_once "../php_action/db_connect.php";

$nome = mysqli_real_escape_string($connect, trim($_POST['nome']));
$senha = mysqli_real_escape_string($connect, trim($_POST['senha']));
$email = mysqli_real_escape_string($connect, trim($_POST['email']));
 
$id_user= mysqli_escape_string($connect, $_POST["id_user"]);

$sql = "SELECT COUNT(*) as total from usuario where id_user = '$id_user'";
$result = mysqli_query($connect, $sql);
$row = mysqli_fetch_assoc($result);

if ($row['total'] == 1) {
    $_SESSION['usuario_existe'] = true;
    header('Location:../cadastro.php');
    exit;
}

$sql = "INSERT INTO usuario (email, senha, nome, data_cadastro) 
VALUES ('$email', '$senha', '$nome', NOW())";

if ($connect->query($sql) === TRUE) {
    
}

$connect->close();

header('Location:../index.php');
exit;
?>