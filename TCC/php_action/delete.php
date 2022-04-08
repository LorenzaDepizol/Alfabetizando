<?php
session_start();
//conexão
require_once "db_connect.php";

if (isset($_POST["btn_deletar"])):
	
	$titulo = mysqli_escape_string($connect, $_POST["titulo"]); 
	$descrição = mysqli_escape_string($connect, $_POST["descrição"]);

$id= mysqli_escape_string($connect, $_POST["id"]);

$sql= "DELETE FROM historias WHERE id = '$id' ";

if (mysqli_query($connect, $sql)):
	$_SESSION["mensagem"] = "Deletado com sucesso!";
	header("Location:../perfil/suas-hist.php?");
else:
	$_SESSION["mensagem"] = "Erro, tente novamente .-.";
	header("Location:../user_story/alterar.php?");
endif;
endif;
?>