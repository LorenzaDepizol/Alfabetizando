<?php
session_start();
	//conexão
	require_once "db_connect.php";
if (isset($_POST["btn_editar"])):

	
	$titulo = mysqli_escape_string($connect, $_POST["titulo"]); 
	$descrição = mysqli_escape_string($connect, $_POST["descrição"]);
	
$id= mysqli_escape_string($connect, $_POST["id"]);

$sql= "UPDATE historias SET titulo='$titulo', descrição = '$descrição' WHERE id = '$id' ";

if (mysqli_query($connect, $sql)):
	$_SESSION['sql'] = $sql;
	header("Location:../perfil/suas-hist.php?");
else:
	$_SESSION["mensagem"] = "Erro, tente novamente .-.";
	header("Location:../user_story/alterar.php?");
endif;
endif;


?>