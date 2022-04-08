<?php
session_start();
include_once "../php_action/db_connect.php";
if (isset($_POST["btn_editar"])):

	
	$email = mysqli_escape_string($connect, $_POST["email"]); 
	$senha = mysqli_escape_string($connect, $_POST["senha"]);
	$nome = mysqli_escape_string($connect, $_POST["nome"]);

$id_user= mysqli_escape_string($connect, $_POST["id_user"]);

$sql= "UPDATE usuario SET email='$email', senha = '$senha', nome = '$nome' WHERE id_user = '$id_user' ";

if (mysqli_query($connect, $sql)):
	header("Location:../perfil/perfil.php");
else:
	header("Location:../perfil/alterar.php");
endif;
endif;
?>