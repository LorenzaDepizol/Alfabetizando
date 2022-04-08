<?php
session_start();
include "../php_action/db_connect.php";

$user_check=$_SESSION['login'];
$ses_sql=mysqli_query($connect,"select email,id_user from usuario where email='$user_check'");
$row=mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);
$loggedin_session=$row['email'];
$loggedin_id=$row['id_user'];
if(!isset($loggedin_session) || $loggedin_session==NULL) {
 echo "Volte";
 header("Location: index.php");
}
?>