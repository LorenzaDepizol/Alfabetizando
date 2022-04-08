<?php
include_once "../login/session.php";
include_once "../php_action/db_connect.php";
if(!isset($_SESSION['login'])){
  header("Location../index.php");
}
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alterar Dados</title>
    <link rel="stylesheet" href="../style.css">   
    <link rel="stylesheet" href="../sla.css">  
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

    .input-field input[type=date]:focus + label,
    .input-field input[type=text]:focus + label,
    .input-field input[type=email]:focus + label,
    .input-field input[type=password]:focus + label {
      color: #e91e63;
    }

    .input-field input[type=date]:focus,
    .input-field input[type=text]:focus,
    .input-field input[type=email]:focus,
    .input-field input[type=password]:focus {
      border-bottom: 2px solid #e91e63;
      box-shadow: none;
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
      <a href="perfil.php"><i class="fas fa-user-circle"></i><span>Seu Perfil</span></a>
      <a href="../inicial.php"><i class="fas fa-home"></i><span>Tela Inicial</span></a>
      <a href="suas-hist.php"><i class="fas fa-book"></i><span>Suas Histórias</span></a>
        <a href="../login/logout.php"><i class="fa fa-sign-out" aria-hidden="true"></i><span>Sair</span></a>
      <a href="#"><i class="fas fa-info-circle"></i><span>Desenvolvedores</span></a>
    </div>
    <!--sidebar end-->
    <?php
  

                $id_user= $loggedin_id;
            
               $sql = "SELECT * FROM usuario WHERE id_user='$id_user'";
                $resultado = mysqli_query($connect, $sql);
               
                $dados =  mysqli_fetch_array($resultado);      
                	          
        ?>
        <center>
        <form class="col s12" method="post" action="../user_action/editar.php">
          <div class="login-page">
  <div class="form">
    <form class="register-form">
    <input type="hidden" name="id_user" value="<?php echo $dados['id_user']?>"/>  
    <label for="nome">Nome</label>
    <input type="text" id="nome" name="nome"   value="<?php echo $dados['nome']?>"/>   
    <label for="email">Email</label>           
      <input type="text" id="email" name="email"  value="<?php echo $dados['email']?>"/>
      <label for="senha">Senha</label>
      <input type="password" id="senha" name="senha"  value="<?php echo $dados['senha']?>"/>
      <label>
             <input style="background-color: white;" type="button" hidden onclick="myFunction()"/>
                <span toggle="#senha" class="fas fa-eye toggle-password"></span>
            </label>
            <button name="btn_editar">alterar dados</button>
    </form>
  </div>
</div>
            <br />
          </form>
        </div>
      </div>
      
             </center>

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