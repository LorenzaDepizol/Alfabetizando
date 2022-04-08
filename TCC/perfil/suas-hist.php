<?php
include_once "../login/session.php";
include_once "../php_action/db_connect.php";
if(!isset($_SESSION['login'])){
  header("Location../index.php");
}
?>
<!DOCTYPE html>
<html lang="pt_" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suas Histórias</title>
    <link rel="stylesheet" href="../style.css">      
    <link rel="stylesheet" href="card.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" charset="utf-8"></script>
    <script src="https://kit.fontawesome.com/540c6a1a4c.js" crossorigin="anonymous"></script>

    <style>
    body {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }

    main {
      flex: 1 0 auto;
    }

    body {
      background: #fff;
    }
    
  </style>
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
        <img src="../1.png" class="profile_image" alt="">
      </div>
      <div class="menu"></div>   
      <a href="../inicial.php"><i class="fas fa-home"></i><span>Tela Inicial</span></a>
      <a href="perfil.php"><i class="fas fa-book"></i><span>Seu Perfil</span></a>
      <a href="alterar.php"><i class="fas fa-pen"></i><span>Alterar Dados</span></a>
        <a href="../login/logout.php"><i class="fa fa-sign-out" aria-hidden="true"></i><span>Sair</span></a>
      <a href="#"><i class="fas fa-info-circle"></i><span>Desenvolvedores</span></a>
    </div>
    
    <!--sidebar end-->
    <table>
        <tr> Suas Histórias</tr>
        <tbody>
      <?php    

            $id_user =  $loggedin_id;   
            $query= "SELECT * FROM historias WHERE id_user='$id_user'";
            $result= mysqli_query($connect, $query);
            if(mysqli_num_rows($result) > 0):
              while($row = mysqli_fetch_array($result)):
     ?>
 <td>
 <div class="cards-list">
      <div class="card 1">
      <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
      <div class="card_title">
      <a href="../user_story/ler.php?id=<?php echo $row['id']?>" style="text-decoration:none;color:white;"><?php echo $row['titulo']?></a>
       </div>
       </div>
</div> 
 </td> 
 <?php
 endwhile;
              endif;
             
?>
        </tbody>
    </table>     
    <script type="text/javascript">
      $(document).ready(function(){
        //jquery for toggle sub menus
        $('.sub-btn').click(function(){
          $(this).next('.sub-menu').slideToggle();
          $(this).find('.dropdown').toggleClass('rotate');
        });
      });
      </script>
    <script>
$(".toggle-password").click(function() {
$(this).toggleClass("fa-eye fa-eye-slash");
var input = $($(this).attr("toggle"));
if (input.attr("type") == "password") {
  input.attr("type", "text");
} else {
  input.attr("type", "password");
}
});
	 </script>
  </body>
</html>