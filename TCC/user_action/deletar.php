<?php
session_start();
//conexão
require_once "../php_action/db_connect.php";

if (isset($_POST["btn_deletar"])):
	
	$email = mysqli_escape_string($connect, $_POST["email"]); 
	$senha = mysqli_escape_string($connect, $_POST["senha"]);
	$nome = mysqli_escape_string($connect, $_POST["nome"]);

$id_user= mysqli_escape_string($connect, $_POST["id_user"]);

$sql= "DELETE FROM usuario WHERE id_user = '$id_user' ";

if (mysqli_query($connect, $sql)):
	header("Location:../index.php?");
else:
	
	header("Location:../perfil/alterar.php?");
endif;
endif;
?>