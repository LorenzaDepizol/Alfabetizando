<?php
session_start();
include_once "../php_action/db_connect.php";
?>
<!DOCTYPE html>
<html>

<head>    
    <script src="pegar.js"></script>
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
<?php
    if(isset($_GET["id"])):
       $id = $_GET['id']; 
       $sql = "SELECT * FROM historias where id = '$id'";
       $resultado = mysqli_query($connect, $sql);
       $dados = mysqli_fetch_assoc($resultado); 
    endif;    
    ?>
    <form class="login-form" action="../php_action/delete.php" method="POST"> 

    <div class="historia">      
    <div>
    <input type="hidden" name="id" value="<?php echo $dados['id']; ?>" >
        <center>
            <input type="text" name="titulo" id="titulo" style="font-size:25px" value="<?php echo $dados['titulo']; ?>" readonly>
        </center>
    </div>

    <div id="conteudo">
        <center>
            <textarea type="text" name="descrição" id=valor1 style="font-size: 30px;" maxlength="300" rows="6" cols="50" readonly><?php echo $dados['descrição'];?> </textarea>
            
        </center>
        <p id="valorDigitado" style="visibility: hidden;  font-size: 30px; font-family: 'Secular One', sans-serif;"></p>
    </div>

    <center>       
    <button class="baixar" type="button" id="btGerarPDF" onclick="capturar()" value="Baixar História"><b>BAIXAR HISTÓRIA</b></button>
        <a name="btn_editar" href="alterar.php?id=<?php echo $dados['id']; ?>"
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
  cursor: pointer; text-decoration:none;  ";
        ><b>ALTERAR HISTÓRIA</b></button>
    </center>
</div>
</form>
    <div id="editor"></div>

    <script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js"></script>
    <script src="pegar.js"></script>
</body>

</html>