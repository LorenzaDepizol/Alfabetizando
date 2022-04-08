<?php
include "../login/session.php";
//conexão
	require_once "db_connect.php";
if (isset($_POST["btn_criar"])):
$titulo = mysqli_escape_string($connect, $_POST["titulo"]); 
$descrição = mysqli_escape_string($connect, $_POST["descrição"]);
$id_user = $loggedin_id;

$sql= "INSERT INTO historias (titulo, descrição, id_user) VALUES ('$titulo', '$descrição', '$id_user') ";

if (mysqli_query($connect, $sql)):
	header("Location:../perfil/suas-hist.php?");
else:
	header("Location:../perfil/perfil.php?");
endif;
endif;


?>