<?php
session_start();
include_once "php_action/db_connect.php";
if(!isset($_SESSION['login'])){
  header("Location../index.php");
}
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seja Bem-Vindo(A)</title>
    <link rel="stylesheet" href="style.css">   
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" charset="utf-8"></script>
    <script src="https://kit.fontawesome.com/540c6a1a4c.js" crossorigin="anonymous"></script>
  </head>
  <body>

    <input type="checkbox" id="check">
    <!--header area start-->
    <header>
      <label for="check">
        <i class="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <div class="left_area">
        <h3>Hora de aprender</h3>
      </div>
      </header>
    <!--header area end-->
    <!--sidebar start-->
    <div class="sidebar">
      <div class="profile_info">
        <img src="1.png" class="profile_image" alt="">
      </div>
      <div class="menu"></div>   
      <a href="./perfil/perfil.php"><i class="fas fa-user-circle"></i><span>Seu Perfil</span></a>
      <a href="./historias/hist.html"><i class="fas fa-book"></i><span>Histórias</span></a>
      <a href="./criatividade/criar.php"><i class="fas fa-pen"></i><span>Hora da criatividade</span></a>
      <a class="sub-btn"><i class="fas fa-desktop"></i><span>Inglês</span><span><i class="fas fa-angle-right dropdown"></i></span></a>
        <div class="sub-menu">
          <a href="./animal/animal.html" class="sub-item"><span>Animals</span></a>
          <a href="./fruta/fruit.html" class="sub-item"><span>Fruits</span></a>
          <a href="./cor/colors.html" class="sub-item"><span>Colors</span></a>
        </div>
        <a href="./login/logout.php"><i class="fa fa-sign-out" aria-hidden="true"></i><span>Sair</span></a>
      <a href="#"><i class="fas fa-info-circle"></i><span>Desenvolvedores</span></a>
    </div>
    <!--sidebar end-->
    
    <script type="text/javascript">
      $(document).ready(function(){
        //jquery for toggle sub menus
        $('.sub-btn').click(function(){
          $(this).next('.sub-menu').slideToggle();
          $(this).find('.dropdown').toggleClass('rotate');
        });
      });
      </script>

  </body>
</html>