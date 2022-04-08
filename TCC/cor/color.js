   
    //Amarelo
    var hello = false;
    var smile = false;
    var yellow = false;
    function ErradoHello(){           
        if(hello == false)
        {
        
                document.getElementById('hello').style.background = '#FA8072';
                var bee = document.querySelector("#hello");
                bee.innerHTML = "OLÁ";  
                //console.log("acertou");
                hello = true;
        
        }
        else
        {
                document.getElementById('hello').style.background = '#fff';
                var bee = document.querySelector("#hello");
                bee.innerHTML = "HELLO";  
                //console.log("errou");
                hello = false;
        
        }
    
    }
    function ErradoSmile(){
        if( smile == false)
        {
    
            document.getElementById('smile').style.background = '#FA8072';
            var bee = document.querySelector("#smile");
            bee.innerHTML = "SORRIR";  
            //console.log("acertou");
            smile = true;
    
        }
        else
        {
            document.getElementById('smile').style.background = '#fff';
            var bee = document.querySelector("#smile");
            bee.innerHTML = "SMILE";  
            //console.log("errou");
            smile = false;
    
        }
    }
    function AcertoYellow(){
        if(yellow == false)
        {
    
            document.getElementById('yellow').style.background = '#32CD32';
            var bee = document.querySelector("#yellow");
            bee.innerHTML = "AMARELO";  
            //console.log("acertou");
            yellow = true;
    
        }
        else
        {
    
            document.getElementById('yellow').style.background = '#fff';
            var bee = document.querySelector("#yellow");
            bee.innerHTML = "YELLOW";  
            //console.log("errou");
            yellow = false;
    
        }   
    }
     //Azul
     var sea = false;
     var blue = false;
     var sky = false;
    function ErradoSea(){            
        if(sea == false)
            {
         
                 document.getElementById('sea').style.background = '#FA8072';
                 var bee = document.querySelector("#sea");
                 bee.innerHTML = "MAR";  
                 //console.log("acertou");
                 sea = true;
         
            }
            else
            {
                 document.getElementById('sea').style.background = '#fff';
                 var bee = document.querySelector("#sea");
                 bee.innerHTML = "SEA";  
                 //console.log("errou");
                 sea = false;
         
            }
     
    }
    function ErradoSky(){
         if( sky == false)
        {
     
             document.getElementById('sky').style.background = '#FA8072';
             var bee = document.querySelector("#sky");
             bee.innerHTML = "CÉU";  
             //console.log("acertou");
             sky = true;
     
        }
         else
        {
             document.getElementById('sky').style.background = '#fff';
             var bee = document.querySelector("#sky");
             bee.innerHTML = "SKY";  
             //console.log("errou");
             sky = false;
     
        }
    }
     function AcertoBlue(){
        if(blue == false)
        {
     
             document.getElementById('blue').style.background = '#32CD32';
             var bee = document.querySelector("#blue");
             bee.innerHTML = "AZUL";  
             //console.log("acertou");
             blue = true;
     
        }
         else
        {
     
             document.getElementById('blue').style.background = '#fff';
             var bee = document.querySelector("#blue");
             bee.innerHTML = "BLUE";  
             //console.log("errou");
             blue = false;
     
        }   
    }
    //Laranja
    var fruit = false;
    var cute = false;
    var orange = false;
    function ErradoFruit(){         
        if(fruit == false)
        {
        
             document.getElementById('fruit').style.background = '#FA8072';
             var bee = document.querySelector("#fruit");
             bee.innerHTML = "FRUTA";  
             //console.log("acertou");
             fruit = true;
        
        }
        else
        {
             document.getElementById('fruit').style.background = '#fff';
             var bee = document.querySelector("#fruit");
             bee.innerHTML = "FRUIT";  
             //console.log("errou");
             fruit = false;
        
        }
    
    }
    function ErradoCute(){
        if( cute == false)
        {
    
            document.getElementById('cute').style.background = '#FA8072';
            var bee = document.querySelector("#cute");
            bee.innerHTML = "FOFO";  
            //console.log("acertou");
            cute = true;
    
        }
        else
        {
            document.getElementById('cute').style.background = '#fff';
            var bee = document.querySelector("#cute");
            bee.innerHTML = "CUTE";  
            //console.log("errou");
            cute = false;
    
        }
    }
    function AcertoOrange(){
        if(orange == false)
        {
    
            document.getElementById('orange').style.background = '#32CD32';
            var bee = document.querySelector("#orange");
            bee.innerHTML = "LARANJA";  
            //console.log("acertou");
            orange = true;
    
        }
        else
        {
    
            document.getElementById('orange').style.background = '#fff';
            var bee = document.querySelector("#orange");
            bee.innerHTML = "ORANGE";  
            //console.log("errou");
            orange = false;
    
        }
    }

      //Cinza
    var gray = false;
    var cement = false;
    var cat = false;
    function AcertoGray(){
        if(gray == false)
        {
          
             document.getElementById('gray').style.background = '#32CD32';
             var bee = document.querySelector("#gray");
             bee.innerHTML = "CINZA";  
             //console.log("acertou");
             gray = true;
          
        }
        else
        {
             document.getElementById('gray').style.background = '#fff';
             var bee = document.querySelector("#gray");
             bee.innerHTML = "GRAY";  
             //console.log("errou");
             gray = false;
          
        }
      
    }
    function ErradoCement(){
        if( cement == false)
        {  
              document.getElementById('cement').style.background = '#FA8072';
              var bee = document.querySelector("#cement");
              bee.innerHTML = "CIMENTO";  
              //console.log("acertou");
              cement = true;
      
        }
        else
        {
              document.getElementById('cement').style.background = '#fff';
              var bee = document.querySelector("#cement");
              bee.innerHTML = "CEMENT";  
              //console.log("errou");
              cement = false;
      
        }
    }
    function ErradoCat(){
        if(cat == false)
        {
      
              document.getElementById('cat').style.background = '#FA8072';
              var bee = document.querySelector("#cat");
              bee.innerHTML = "GATO";  
              //console.log("acertou");
              cat = true;
      
        }
        else
        {
      
              document.getElementById('cat').style.background = '#fff';
              var bee = document.querySelector("#cat");
              bee.innerHTML = "CAT";  
              //console.log("errou");
              cat = false;
      
            }  
    }
    //Dourado
    var golden = false;
    var gold = false;
    var shine = false;
    function AcertoGolden(){
        if(golden == false)
        {
          
             document.getElementById('golden').style.background = '#32CD32';
             var bee = document.querySelector("#golden");
             bee.innerHTML = "DOURADO";  
             //console.log("acertou");
             golden = true;
          
        }
        else
        {
             document.getElementById('golden').style.background = '#fff';
             var bee = document.querySelector("#golden");
             bee.innerHTML = "GOLDEN";  
             //console.log("errou");
             golden= false;
          
        }
      
    }
    function ErradoGold(){
        if( gold == false)
        {  
              document.getElementById('gold').style.background = '#FA8072';
              var bee = document.querySelector("#gold");
              bee.innerHTML = "OURO";  
              //console.log("acertou");
              gold = true;
      
        }
        else
        {
              document.getElementById('gold').style.background = '#fff';
              var bee = document.querySelector("#gold");
              bee.innerHTML = "GOLD";  
              //console.log("errou");
              gold = false;
      
        }
    }
    function ErradoShine(){
        if(shine == false)
        {
      
              document.getElementById('shine').style.background = '#FA8072';
              var bee = document.querySelector("#shine");
              bee.innerHTML = "BRILHO";  
              //console.log("acertou");
              shine = true;
      
        }
        else
        {
      
              document.getElementById('shine').style.background = '#fff';
              var bee = document.querySelector("#shine");
              bee.innerHTML = "SHINE";  
              //console.log("errou");
              shine = false;
      
            }  
    }

     //Branco
     var white = false;
     var light = false;
     var peace = false;
     function AcertoWhite(){
         if( white == false)
         {
           
              document.getElementById('white').style.background = '#32CD32';
              var bee = document.querySelector("#white");
              bee.innerHTML = "BRANCO";  
              //console.log("acertou");
              white = true;
           
         }
         else
         {
              document.getElementById('white').style.background = '#fff';
              var bee = document.querySelector("#white");
              bee.innerHTML = "WHITE";  
              //console.log("errou");
              white = false;
           
         }
       
     }
     function ErradoLight(){
         if( light == false)
         {  
               document.getElementById('light').style.background = '#FA8072';
               var bee = document.querySelector("#light");
               bee.innerHTML = "LUZ";  
               //console.log("acertou");
               light = true;
       
         }
         else
         {
               document.getElementById('light').style.background = '#fff';
               var bee = document.querySelector("#light");
               bee.innerHTML = "LIGHT";  
               //console.log("errou");
               light = false;
       
         }
     }
     function ErradoPeace(){
         if(peace == false)
         {
       
               document.getElementById('peace').style.background = '#FA8072';
               var bee = document.querySelector("#peace");
               bee.innerHTML = "PAZ";  
               //console.log("acertou");
               peace = true;
       
         }
         else
         {
       
               document.getElementById('peace').style.background = '#fff';
               var bee = document.querySelector("#peace");
               bee.innerHTML = "PEACE";  
               //console.log("errou");
               peace = false;
       
             }  
    }
    //Dourado
    var stem = false;
    var brown = false;
    var mud = false;
    function AcertoBrown(){
        if(brown == false)
        {
          
             document.getElementById('brown').style.background = '#32CD32';
             var bee = document.querySelector("#brown");
             bee.innerHTML = "MARROM";  
             //console.log("acertou");
             brown = true;
          
        }
        else
        {
             document.getElementById('brown').style.background = '#fff';
             var bee = document.querySelector("#brown");
             bee.innerHTML = "BROWN";  
             //console.log("errou");
             brown = false;
          
        }
      
    }
    function ErradoStem(){
        if( stem == false)
        {  
              document.getElementById('stem').style.background = '#FA8072';
              var bee = document.querySelector("#stem");
              bee.innerHTML = "TRONCO";  
              //console.log("acertou");
              stem = true;
      
        }
        else
        {
              document.getElementById('stem').style.background = '#fff';
              var bee = document.querySelector("#stem");
              bee.innerHTML = "STEM";  
              //console.log("errou");
              stem = false;
      
        }
    }
    function ErradoMud(){
        if(mud == false)
        {
      
              document.getElementById('mud').style.background = '#FA8072';
              var bee = document.querySelector("#mud");
              bee.innerHTML = "LAMA";  
              //console.log("acertou");
              mud = true;
      
        }
        else
        {
      
              document.getElementById('mud').style.background = '#fff';
              var bee = document.querySelector("#mud");
              bee.innerHTML = "MUD";  
              //console.log("errou");
              mud = false;
      
            }  
    }
     //Preto
     var black = false;
     var dark = false;
     var shirt = false;
     function AcertoBlack(){
         if(black == false)
         {
           
              document.getElementById('black').style.background = '#32CD32';
              var bee = document.querySelector("#black");
              bee.innerHTML = "PRETO";  
              //console.log("acertou");
              black = true;
           
         }
         else
         {
              document.getElementById('black').style.background = '#fff';
              var bee = document.querySelector("#black");
              bee.innerHTML = "BLACK";  
              //console.log("errou");
              black = false;
           
         }
       
     }
     function ErradoDark(){
         if( dark == false)
         {  
               document.getElementById('dark').style.background = '#FA8072';
               var bee = document.querySelector("#dark");
               bee.innerHTML = "ESCURO";  
               //console.log("acertou");
               dark = true;
       
         }
         else
         {
               document.getElementById('dark').style.background = '#fff';
               var bee = document.querySelector("#dark");
               bee.innerHTML = "DARK";  
               //console.log("errou");
               dark = false;
       
         }
     }
     function ErradoShirt(){
         if(shirt == false)
         {
       
               document.getElementById('shirt').style.background = '#FA8072';
               var bee = document.querySelector("#shirt");
               bee.innerHTML = "CAMISA";  
               //console.log("acertou");
               shirt = true;
       
         }
         else
         {
       
               document.getElementById('shirt').style.background = '#fff';
               var bee = document.querySelector("#shirt");
               bee.innerHTML = "SHIRT";  
               //console.log("errou");
               shirt = false;
       
             }  
     }
      //Verde
    var verde = false;
    var tree = false;
    var gram = false;
    function AcertoGreen(){
        if(green == false)
        {
          
             document.getElementById('green').style.background = '#32CD32';
             var bee = document.querySelector("#green");
             bee.innerHTML = "VERDE";  
             //console.log("acertou");
             green = true;
          
        }
        else
        {
             document.getElementById('green').style.background = '#fff';
             var bee = document.querySelector("#green");
             bee.innerHTML = "GREEN";  
             //console.log("errou");
             green = false;
          
        }
      
    }
    function ErradoGram(){
        if( gram == false)
        {  
              document.getElementById('gram').style.background = '#FA8072';
              var bee = document.querySelector("#gram");
              bee.innerHTML = "GRAMA";  
              //console.log("acertou");
              gram = true;
      
        }
        else
        {
              document.getElementById('gram').style.background = '#fff';
              var bee = document.querySelector("#gram");
              bee.innerHTML = "GRAM";  
              //console.log("errou");
              gram = false;
      
        }
    }
    function ErradoTree(){
        if(tree == false)
        {
      
              document.getElementById('tree').style.background = '#FA8072';
              var bee = document.querySelector("#tree");
              bee.innerHTML = "ÁRVORE";  
              //console.log("acertou");
              tree = true;
      
        }
        else
        {
      
              document.getElementById('tree').style.background = '#fff';
              var bee = document.querySelector("#tree");
              bee.innerHTML = "TREE";  
              //console.log("errou");
              tree = false;
      
            }  
    }
     //Roxo
     var roxo = false;
     var vein = false;
     var bruise = false;
     function AcertoPurple(){
         if(purple == false)
         {
           
              document.getElementById('purple').style.background = '#32CD32';
              var bee = document.querySelector("#purple");
              bee.innerHTML = "ROXO";  
              //console.log("acertou");
              purple = true;
           
         }
         else
         {
              document.getElementById('purple').style.background = '#fff';
              var bee = document.querySelector("#purple");
              bee.innerHTML = "PURPLE";  
              //console.log("errou");
              purple = false;
           
         }
       
     }
     function ErradoVein(){
         if( vein == false)
         {  
               document.getElementById('vein').style.background = '#FA8072';
               var bee = document.querySelector("#vein");
               bee.innerHTML = "VEIA";  
               //console.log("acertou");
               vein = true;
       
         }
         else
         {
               document.getElementById('vein').style.background = '#fff';
               var bee = document.querySelector("#vein");
               bee.innerHTML = "VEIN";  
               //console.log("errou");
               vein = false;
       
         }
     }
     function ErradoBruise(){
         if(bruise == false)
         {
       
               document.getElementById('bruise').style.background = '#FA8072';
               var bee = document.querySelector("#bruise");
               bee.innerHTML = "HEMATOMA";  
               //console.log("acertou");
               bruise = true;
       
         }
         else
         {
       
               document.getElementById('bruise').style.background = '#fff';
               var bee = document.querySelector("#bruise");
               bee.innerHTML = "BRUISE";  
               //console.log("errou");
               bruise = false;
       
             }  
     }
      //Rosa
    var pink = false;
    var sweet = false;
    var lollipop = false;
    function AcertoPink(){
        if(pink == false)
        {
          
             document.getElementById('pink').style.background = '#32CD32';
             var bee = document.querySelector("#pink");
             bee.innerHTML = "ROSA";  
             //console.log("acertou");
             pink = true;
          
        }
        else
        {
             document.getElementById('pink').style.background = '#fff';
             var bee = document.querySelector("#pink");
             bee.innerHTML = "PINK";  
             //console.log("errou");
            pink = false;
          
        }
      
    }
    function ErradoSweet(){
        if( sweet == false)
        {  
              document.getElementById('sweet').style.background = '#FA8072';
              var bee = document.querySelector("#sweet");
              bee.innerHTML = "DOCE";  
              //console.log("acertou");
             sweet = true;
      
        }
        else
        {
              document.getElementById('sweet').style.background = '#fff';
              var bee = document.querySelector("#sweet");
              bee.innerHTML = "SWEET";  
              //console.log("errou");
              sweet = false;
      
        }
    }
    function ErradoLollipop(){
        if(lollipop == false)
        {
      
              document.getElementById('lollipop').style.background = '#FA8072';
              var bee = document.querySelector("#lollipop");
              bee.innerHTML = "PIRULITO";  
              //console.log("acertou");
              lollipop = true;
      
        }
        else
        {
      
              document.getElementById('lollipop').style.background = '#fff';
              var bee = document.querySelector("#lollipop");
              bee.innerHTML = "LOLLIPOP";  
              //console.log("errou");
              lollipop = false;
      
            }  
    }
     //Vermelho
     var red = false;
     var blood = false;
     var mouth = false;
     function AcertoRed(){
         if(red == false)
         {
           
              document.getElementById('red').style.background = '#32CD32';
              var bee = document.querySelector("#red");
              bee.innerHTML = "VERMELHO";  
              //console.log("acertou");
              red = true;
           
         }
         else
         {
              document.getElementById('red').style.background = '#fff';
              var bee = document.querySelector("#red");
              bee.innerHTML = "RED";  
              //console.log("errou");
             red = false;
           
         }
       
     }
     function ErradoBlood(){
         if( blood == false)
         {  
               document.getElementById('blood').style.background = '#FA8072';
               var bee = document.querySelector("#blood");
               bee.innerHTML = "SANGUE";  
               //console.log("acertou");
              blood = true;
       
         }
         else
         {
               document.getElementById('blood').style.background = '#fff';
               var bee = document.querySelector("#blood");
               bee.innerHTML = "BLOOD";  
               //console.log("errou");
              blood = false;
       
         }
     }
     function ErradoMouth(){
         if(mouth == false)
         {
       
               document.getElementById('mouth').style.background = '#FA8072';
               var bee = document.querySelector("#mouth");
               bee.innerHTML = "BOCA";  
               //console.log("acertou");
               mouth = true;
       
         }
         else
         {
       
               document.getElementById('mouth').style.background = '#fff';
               var bee = document.querySelector("#mouth");
               bee.innerHTML = "MOUTH";  
               //console.log("errou");
               mouth = false;
       
             }  
     }