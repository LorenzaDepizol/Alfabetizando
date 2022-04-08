<?php
session_start();
include_once "../php_action/db_connect.php";
?>
<!DOCTYPE html>
<html>

<head>    
    
    <meta charset="UTF-8">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">    
    <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&family=Secular+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" charset="utf-8"></script>
    <title>Hora da Criatividade</title>
</head>

<body> 
    <form class="login-form" action="../php_action/create.php" method="POST">
    <div class="historia">       
    <div>
        <center>
            <input type="text" name="titulo" id="titulo" style="font-size:25px" >
        </center>
    </div>

    <div id="conteudo">
        <center>
            <textarea type="text" name="descrição" id=valor1 style="font-size: 30px;" maxlength="300" rows="6" cols="50" ></textarea>
            
        </center>
        <p id="valorDigitado" style="visibility: hidden;  font-size: 30px; font-family: 'Secular One', sans-serif;"></p>
    </div>

    <center>        
        <button name="btn_criar" class="button" type="submit"
        style="font-family: 'Metal Mania', cursive;
 color: green;
  padding: 5px 5px;
  font-family: 'Metal Mania', cursive;
  font-size: 25px; 
  background-color: wheat;
  border-radius: 5px;
  border: solid 1px;
  box-shadow: 1px 5px wheat;
  transition: transform .13s cubic-bezier(.53, -0.4, .91, 2.81);
  background-color:wheat;
  cursor: pointer;  ";
        ><b>SALVAR HISTÓRIA</b></button>
        </form>
    </center>
</div>


    <div id="editor"></div>

    <script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js"></script>
    <script src="pegar.js"></script>
</body>

</html>     