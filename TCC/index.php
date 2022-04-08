<?php
session_start();
include_once "php_action/db_connect.php"; 
?>
?>
<html>
<head>
      <title> Login </title>
      <link rel="stylesheet" href="style.css">  
      <link rel="stylesheet" href="sla.css">  
      <link rel="preconnect" href="https://fonts.gstatic.com">
     <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" charset="utf-8"></script>
      <script src="https://kit.fontawesome.com/540c6a1a4c.js" crossorigin="anonymous"></script>
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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

    <!--header area start-->
    <header>
      <label for="check">
        
      </label>
      <div class="left_area">
        <h3>Hora de aprender</h3>
      </div>
      </header>
    <!--header area end--> 
  <main>
    <center> 

          <form class="col s12" method="post" action="login/login.php">
          <div class="login-page">
  <div class="form">
    <form class="login-form">             
      <input type="text" placeholder="Email" name="email"/>
      <input type="password" placeholder="Senha" name="senha"/>
      <button>login</button>
      <p class="message">Ainda não registrado? <a href="cadastro.php">Crie uma conta!</a></p>
    </form>
  </div>
</div>
            <br />
          </form>
        </div>
      </div>
      
    </center>

    <div class="section"></div>
    <div class="section"></div>
  </main>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
 
 	<script type="text/javascript">
 		M.AutoInit();
 	</script>
	 <script>
	 $(".dropdown-trigger").dropdown();
	 </script>
	 <script>
	function myFunction() {
 	 var x = document.getElementById("senha");
 	 if (x.type === "password") {
  	  x.type = "text";
 	 } else {
  	  x.type = "password";
 	 }
	}
	 </script>
    </body>
  </html>