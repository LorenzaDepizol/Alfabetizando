    
    var abelha = false;
    var ovo = false;
    var preto = false;
    //Abelha
    function bee()
    {

        if(abelha == false)
        {
    
            document.getElementById('bee').style.background = '#32CD32';
            var bee = document.querySelector("#bee");
            bee.innerHTML = "ABELHA";  
            //console.log("acertou");
            abelha = true;
    
        }
        else
        {
    
            document.getElementById('bee').style.background = '#fff';
            var bee = document.querySelector("#bee");
            bee.innerHTML = "BEE";  
            //console.log("errou");
            abelha = false;
    
        }

    }

    
    //Ovo
    function egg()
    {

        if(ovo == false)
        {
    
            document.getElementById('egg').style.background = '#FA8072';
            var bee = document.querySelector("#egg");
            bee.innerHTML = "OVO"; 
            //console.log("acertou");
            ovo = true;
    
        }
        else
        {
            document.getElementById('egg').style.background = '#fff';
            var bee = document.querySelector("#egg");
            bee.innerHTML = "EGG"; 
            //console.log("errou");
            ovo = false;
    
        }

    }

        //Preto
        function black()
        {
    
            if(preto == false)
            {
        
                document.getElementById('black').style.background = '#FA8072';
                var bee = document.querySelector("#black");
                bee.innerHTML = "PRETO";  
                //console.log("acertou");
                preto = true;
        
            }
            else
            {
                document.getElementById('black').style.background = '#fff';
                var bee = document.querySelector("#black");
                bee.innerHTML = "BLACK";  
                //console.log("errou");
                preto = false;
        
            }
    
        }
   

    
    

    //Cachorro
    var dance = false;
    var desk = false;
    var dog = false;
    function ErradoDance()
  
        {
           
            if(dance == false)
            {
        
                document.getElementById('dance').style.background = '#FA8072';
                var bee = document.querySelector("#dance");
                bee.innerHTML = "DANÇAR";  
                //console.log("acertou");
                dance = true;
        
            }
            else
            {
                document.getElementById('dance').style.background = '#fff';
                var bee = document.querySelector("#dance");
                bee.innerHTML = "DANCE";  
                //console.log("errou");
                dance = false;
        
            }
    
        }
    function ErradoDesk(){
        if(desk == false)
        {
    
            document.getElementById('desk').style.background = '#FA8072';
            var bee = document.querySelector("#desk");
            bee.innerHTML = "MESA";  
            //console.log("acertou");
            desk = true;
    
        }
        else
        {
            document.getElementById('desk').style.background = '#fff';
            var bee = document.querySelector("#desk");
            bee.innerHTML = "DESK";  
            //console.log("errou");
            desk = false;
    
        }
    }
    function AcertoDog(){
        if(dog == false)
        {
    
            document.getElementById('dog').style.background = '#32CD32';
            var bee = document.querySelector("#dog");
            bee.innerHTML = "CÃO";  
            //console.log("acertou");
            dog = true;
    
        }
        else
        {
    
            document.getElementById('dog').style.background = '#fff';
            var bee = document.querySelector("#dog");
            bee.innerHTML = "DOG";  
            //console.log("errou");
            dog = false;
    
        }   
    }
    //Canguru
    var kangaroo = false;
    var candy = false;
    var ball = false;
    function AcertoCanguru(){
        if(kangaroo == false)
        {
    
            document.getElementById('kangaroo').style.background = '#32CD32';
            var bee = document.querySelector("#kangaroo");
            bee.innerHTML = "CANGURU";  
            //console.log("acertou");
            kangaroo = true;
    
        }
        else
        {
    
            document.getElementById('kangaroo').style.background = '#fff';
            var bee = document.querySelector("#kangaroo");
            bee.innerHTML = "KANGAROO";  
            //console.log("errou");
            kangaroo = false;
    
        }   
    }
    function ErradoCandy(){
        if(candy == false)
        {
    
            document.getElementById('candy').style.background = '#FA8072';
            var bee = document.querySelector("#candy");
            bee.innerHTML = "DOCE";  
            //console.log("acertou");
            candy = true;
    
        }
        else
        {
            document.getElementById('candy').style.background = '#fff';
            var bee = document.querySelector("#candy");
            bee.innerHTML = "CANDY";  
            //console.log("errou");
            candy = false;
    
        }  
    }
    function ErradoBall(){
        if(ball == false)
        {
    
            document.getElementById('ball').style.background = '#FA8072';
            var bee = document.querySelector("#ball");
            bee.innerHTML = "BOLA";  
            //console.log("acertou");
            ball = true;
    
        }
        else
        {
            document.getElementById('ball').style.background = '#fff';
            var bee = document.querySelector("#ball");
            bee.innerHTML = "BALL";  
            //console.log("errou");
            ball = false;
    
        } 
    }
    
    //Cavalo
    var horse = false;
    var house = false;
    var high = false;

    function AcertoHorse(){
        if(horse == false)
        {
    
            document.getElementById('horse').style.background = '#32CD32';
            var bee = document.querySelector("#horse");
            bee.innerHTML = "CAVALO";  
            //console.log("acertou");
            horse = true;
    
        }
        else
        {
    
            document.getElementById('horse').style.background = '#fff';
            var bee = document.querySelector("#horse");
            bee.innerHTML = "HORSE";  
            //console.log("errou");
            horse = false;
    
        }   
        }
        function ErradoHouse(){
        if(house == false)
        {
    
            document.getElementById('house').style.background = '#FA8072';
            var bee = document.querySelector("#house");
            bee.innerHTML = "CASA";  
            //console.log("acertou");
            house = true;
    
        }
        else
        {
            document.getElementById('house').style.background = '#fff';
            var bee = document.querySelector("#house");
            bee.innerHTML = "HOUSE";  
            //console.log("errou");
            house = false;
    
        } 
        }
        function ErradoHigh(){
            if(high == false)
            {
        
                document.getElementById('high').style.background = '#FA8072';
                var bee = document.querySelector("#high");
                bee.innerHTML = "ALTO";  
                //console.log("acertou");
                high = true;
        
            }
            else
            {
                document.getElementById('high').style.background = '#fff';
                var bee = document.querySelector("#high");
                bee.innerHTML = "HIGH";  
                //console.log("errou");
                high = false;
        
            } 
        }
    
    //Cobra
    var snake = false;
    var sell = false;
    var sick = false;
    function AcertoSnake(){
        if(snake == false)
        {
    
            document.getElementById('snake').style.background = '#32CD32';
            var bee = document.querySelector("#snake");
            bee.innerHTML = "COBRA";  
            //console.log("acertou");
            snake = true;
    
        }
        else
        {
    
            document.getElementById('snake').style.background = '#fff';
            var bee = document.querySelector("#snake");
            bee.innerHTML = "SNAKE";  
            //console.log("errou");
            snake = false;
    
        }   
        }
        function ErradoSell(){
            if(sell == false)
            {
        
                document.getElementById('sell').style.background = '#FA8072';
                var bee = document.querySelector("#sell");
                bee.innerHTML = "VENDER";  
                //console.log("acertou");
                sell = true;
        
            }
            else
            {
                document.getElementById('sell').style.background = '#fff';
                var bee = document.querySelector("#sell");
                bee.innerHTML = "SELL";  
                //console.log("errou");
                sell = false;
        
            }  
        }
        function ErradoSick(){
            if(sick == false)
            {
        
                document.getElementById('sick').style.background = '#FA8072';
                var bee = document.querySelector("#sick");
                bee.innerHTML = "DOENTE";  
                //console.log("acertou");
                sick = true;
        
            }
            else
            {
                document.getElementById('sick').style.background = '#fff';
                var bee = document.querySelector("#sick");
                bee.innerHTML = "SICK";  
                //console.log("errou");
                sick = false;
        
            }  
        }

    //Coelho
    var rabbit = false;
    var rich = false;
    var road = false;

    function AcertoRabbit(){
    if(rabbit == false)
        {
    
            document.getElementById('rabbit').style.background = '#32CD32';
            var bee = document.querySelector("#rabbit");
            bee.innerHTML = "COELHO";  
            //console.log("acertou");
            rabbit = true;
    
        }
        else
        {
    
            document.getElementById('rabbit').style.background = '#fff';
            var bee = document.querySelector("#rabbit");
            bee.innerHTML = "RABBIT";  
            //console.log("errou");
            rabbit = false;
    
        }   
        }
        function ErradoRich(){
            if(rich == false)
            {
        
                document.getElementById('rich').style.background = '#FA8072';
                var bee = document.querySelector("#rich");
                bee.innerHTML = "RICO";  
                //console.log("acertou");
                rich = true;
        
            }
            else
            {
                document.getElementById('rich').style.background = '#fff';
                var bee = document.querySelector("#rich");
                bee.innerHTML = "RICH";  
                //console.log("errou");
                rich = false;
        
            }   
        }
        function ErradoRoad(){
            if(road == false)
            {
        
                document.getElementById('road').style.background = '#FA8072';
                var bee = document.querySelector("#road");
                bee.innerHTML = "ESTRADA";  
                //console.log("acertou");
                road = true;
        
            }
            else
            {
                document.getElementById('road').style.background = '#fff';
                var bee = document.querySelector("#road");
                bee.innerHTML = "ROAD";  
                //console.log("errou");
                road = false;
        
            } 
        }
    
    //Elefante
    var eleph = false;
    var end = false;
    var enter = false;
    function AcertoElephant(){
        if(eleph == false)
        {
    
            document.getElementById('elephant').style.background = '#32CD32';
            var bee = document.querySelector("#elephant");
            bee.innerHTML = "ELEFANTE";  
            //console.log("acertou");
            eleph = true;
    
        }
        else
        {
    
            document.getElementById('elephant').style.background = '#fff';
            var bee = document.querySelector("#elephant");
            bee.innerHTML = "ELEPHANT";  
            //console.log("errou");
            eleph = false;
    
        }   
        }
        function ErradoEnter(){
            if(enter == false)
            {
        
                document.getElementById('enter').style.background = '#FA8072';
                var bee = document.querySelector("#enter");
                bee.innerHTML = "ENTRAR";  
                //console.log("acertou");
                enter = true;
        
            }
            else
            {
                document.getElementById('enter').style.background = '#fff';
                var bee = document.querySelector("#enter");
                bee.innerHTML = "ENTER";  
                //console.log("errou");
                enter = false;
        
            }   
        }
        function ErradoEnd(){
            if(end == false)
            {
        
                document.getElementById('end').style.background = '#FA8072';
                var bee = document.querySelector("#end");
                bee.innerHTML = "FIM";  
                //console.log("acertou");
                end = true;
        
            }
            else
            {
                document.getElementById('end').style.background = '#fff';
                var bee = document.querySelector("#end");
                bee.innerHTML = "END";  
                //console.log("errou");
                end = false;
        
            }   
        }

    //Formiga
    var ant = false;
    var and = false;
    var ask = false;
    function AcertoAnt(){
        if(ant == false)
        {
    
            document.getElementById('ant').style.background = '#32CD32';
            var bee = document.querySelector("#ant");
            bee.innerHTML = "FORMIGA";  
            //console.log("acertou");
            ant = true;
    
        }
        else
        {
    
            document.getElementById('ant').style.background = '#fff';
            var bee = document.querySelector("#ant");
            bee.innerHTML = "ANT";  
            //console.log("errou");
            ant = false;
    
        }   
        }
        function ErradoAnd(){
            if(and == false)
            {
        
                document.getElementById('and').style.background = '#FA8072';
                var bee = document.querySelector("#and");
                bee.innerHTML = "E";  
                //console.log("acertou");
                and = true;
        
            }
            else
            {
                document.getElementById('and').style.background = '#fff';
                var bee = document.querySelector("#and");
                bee.innerHTML = "AND";  
                //console.log("errou");
                and = false;
        
            }   
        }  
        
        function ErradoAsk(){
            if(ask == false)
            {
        
                document.getElementById('ask').style.background = '#FA8072';
                var bee = document.querySelector("#ask");
                bee.innerHTML = "PEDIR";  
                //console.log("acertou");
                ask = true;
        
            }
            else
            {
                document.getElementById('ask').style.background = '#fff';
                var bee = document.querySelector("#ask");
                bee.innerHTML = "ASK";  
                //console.log("errou");
                ask = false;
        
            }   
        }
        

    //Gato
    var cat = false;
    var candy1 = false;
    var click = false;
    function AcertoCat(){
        if(cat == false)
        {
    
            document.getElementById('cat').style.background = '#32CD32';
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
        function ErradoCandy1(){
            if(candy1 == false)
            {
        
                document.getElementById('candy1').style.background = '#FA8072';
                var bee = document.querySelector("#candy1");
                bee.innerHTML = "DOCE";  
                //console.log("acertou");
                candy1 = true;
        
            }
            else
            {
                document.getElementById('candy1').style.background = '#fff';
                var bee = document.querySelector("#candy1");
                bee.innerHTML = "CANDY";  
                //console.log("errou");
                candy1 = false;
        
            }   
        }
        
        function ErradoClick(){
            if(click == false)
            {
        
                document.getElementById('click').style.background = '#FA8072';
                var bee = document.querySelector("#click");
                bee.innerHTML = "CLICAR";  
                //console.log("acertou");
                click = true;
        
            }
            else
            {
                document.getElementById('click').style.background = '#fff';
                var bee = document.querySelector("#click");
                bee.innerHTML = "CLICK";  
                //console.log("errou");
                click = false;
        
            }   
        } 
        

    //Leão
    var lion =false;
    var luck = false;
    var light = false;

    function AcertoLion(){
        if(lion == false)
        {
    
            document.getElementById('lion').style.background = '#32CD32';
            var bee = document.querySelector("#lion");
            bee.innerHTML = "LEÃO";  
            //console.log("acertou");
            lion = true;
    
        }
        else
        {
    
            document.getElementById('lion').style.background = '#fff';
            var bee = document.querySelector("#lion");
            bee.innerHTML = "LION";  
            //console.log("errou");
            lion = false;
    
        }   
        }
        function ErradoLuck(){
            if(luck == false)
            {
        
                document.getElementById('luck').style.background = '#FA8072';
                var bee = document.querySelector("#luck");
                bee.innerHTML = "SORTE";  
                //console.log("acertou");
                luck = true;
        
            }
            else
            {
                document.getElementById('luck').style.background = '#fff';
                var bee = document.querySelector("#luck");
                bee.innerHTML = "LUCK";  
                //console.log("errou");
                luck = false;
        
            }     
        }
        function ErradoLight(){
            if(light == false)
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

    //Macaco
    var monkey = false;
    var math = false;
    var money = false;
    function AcertoMonkey(){
        if(monkey == false)
        {
    
            document.getElementById('monkey').style.background = '#32CD32';
            var bee = document.querySelector("#monkey");
            bee.innerHTML = "MACACO";  
            //console.log("acertou");
            monkey = true;
    
        }
        else
        {
    
            document.getElementById('monkey').style.background = '#fff';
            var bee = document.querySelector("#monkey");
            bee.innerHTML = "MONKEY";  
            //console.log("errou");
           monkey = false;
    
        }   
        }
        function ErradoMath(){
            if(math == false)
            {
        
                document.getElementById('math').style.background = '#FA8072';
                var bee = document.querySelector("#math");
                bee.innerHTML = "MATEMÁTICA";  
                //console.log("acertou");
                math = true;
        
            }
            else
            {
                document.getElementById('math').style.background = '#fff';
                var bee = document.querySelector("#math");
                bee.innerHTML = "MATH";  
                //console.log("errou");
                math = false;
        
            }     
        }
        function ErradoMoney(){
            if(money == false)
            {
        
                document.getElementById('money').style.background = '#FA8072';
                var bee = document.querySelector("#money");
                bee.innerHTML = "DINHEIRO";  
                //console.log("acertou");
                money = true;
        
            }
            else
            {
                document.getElementById('money').style.background = '#fff';
                var bee = document.querySelector("#money");
                bee.innerHTML = "MONEY";  
                //console.log("errou");
                money= false;
        
            }     
        }
    
    //Ovelha
    var sheep = false;
    var summer = false;
    var slime = false;

    function AcertoSheep(){
        if(sheep == false)
        {
    
            document.getElementById('sheep').style.background = '#32CD32';
            var bee = document.querySelector("#sheep");
            bee.innerHTML = "OVELHA";  
            //console.log("acertou");
            sheep = true;
    
        }
        else
        {
    
            document.getElementById('sheep').style.background = '#fff';
            var bee = document.querySelector("#sheep");
            bee.innerHTML = "SHEEP";  
            //console.log("errou");
            sheep = false;
    
        }   
        }
        function ErradoSummer(){
            if(summer == false)
            {
        
                document.getElementById('summer').style.background = '#FA8072';
                var bee = document.querySelector("#summer");
                bee.innerHTML = "VERÃO";  
                //console.log("acertou");
                summer = true;
        
            }
            else
            {
                document.getElementById('summer').style.background = '#fff';
                var bee = document.querySelector("#summer");
                bee.innerHTML = "SUMMER";  
                //console.log("errou");
                summer = false;
        
            }     
        }
        function ErradoSlime(){
            if(slime == false)
            {
        
                document.getElementById('slime').style.background = '#FA8072';
                var bee = document.querySelector("#slime");
                bee.innerHTML = "PEGAJOSO";  
                //console.log("acertou");
                slime = true;
        
            }
            else
            {
                document.getElementById('slime').style.background = '#fff';
                var bee = document.querySelector("#slime");
                bee.innerHTML = "SLIME";  
                //console.log("errou");
                slime = false;
        
            }   
        }
    
    //Passaro
    var bird = false;
    var bad = false;
    var bot = false;

    function AcertoBird(){
        if(bird == false)
        {
    
            document.getElementById('bird').style.background = '#32CD32';
            var bee = document.querySelector("#bird");
            bee.innerHTML = "PÁSSARO";  
            //console.log("acertou");
            bird = true;
    
        }
        else
        {
    
            document.getElementById('bird').style.background = '#fff';
            var bee = document.querySelector("#bird");
            bee.innerHTML = "BIRD";  
            //console.log("errou");
            bird = false;
    
        }   
        }
        function ErradoBad(){
            if(bad == false)
            {
        
                document.getElementById('bad').style.background = '#FA8072';
                var bee = document.querySelector("#bad");
                bee.innerHTML = "RUIM";  
                //console.log("acertou");
                bad = true;
        
            }
            else
            {
                document.getElementById('bad').style.background = '#fff';
                var bee = document.querySelector("#bad");
                bee.innerHTML = "BAD";  
                //console.log("errou");
                bad = false;
        
            }     
        }
        function ErradoBot(){
            if(bot == false)
            {
        
                document.getElementById('bot').style.background = '#FA8072';
                var bee = document.querySelector("#bot");
                bee.innerHTML = "ROBÔ";  
                //console.log("acertou");
                bot = true;
        
            }
            else
            {
                document.getElementById('bot').style.background = '#fff';
                var bee = document.querySelector("#bot");
                bee.innerHTML = "BOT";  
                //console.log("errou");
                bot = false;
        
            }          
         }

    //Peixe
    var fish = false;
    var fit = false;
    var feet = false;

    function AcertoFish(){
        if(fish == false)
        {
    
            document.getElementById('fish').style.background = '#32CD32';
            var bee = document.querySelector("#fish");
            bee.innerHTML = "PEIXE";  
            //console.log("acertou");
            fish = true;
    
        }
        else
        {
    
            document.getElementById('fish').style.background = '#fff';
            var bee = document.querySelector("#fish");
            bee.innerHTML = "FISH";  
            //console.log("errou");
            fish = false;
    
        }   
        }
        function ErradoFit(){
            if(fit == false)
            {
        
                document.getElementById('fit').style.background = '#FA8072';
                var bee = document.querySelector("#fit");
                bee.innerHTML = "CABER";  
                //console.log("acertou");
                fit = true;
        
            }
            else
            {
                document.getElementById('fit').style.background = '#fff';
                var bee = document.querySelector("#fit");
                bee.innerHTML = "FIT";  
                //console.log("errou");
                fit = false;
        
            }     
        }
        function ErradoFeet(){
            if(feet == false)
            {
        
                document.getElementById('feet').style.background = '#FA8072';
                var bee = document.querySelector("#feet");
                bee.innerHTML = "PÉS";  
                //console.log("acertou");
                feet = true;
        
            }
            else
            {
                document.getElementById('feet').style.background = '#fff';
                var bee = document.querySelector("#feet");
                bee.innerHTML = "FEET";  
                //console.log("errou");
                feet = false;
        
            }    
        }

    //Porco
    var pig = false;
    var pink = false;
    var poor = false;

    function AcertoPig(){
        if (pig == false)
        {
    
            document.getElementById('pig').style.background = '#32CD32';
            var bee = document.querySelector("#pig");
            bee.innerHTML = "PORCO";  
            //console.log("acertou");
            pig = true;
    
        }
        else
        {
    
            document.getElementById('pig').style.background = '#fff';
            var bee = document.querySelector("#pig");
            bee.innerHTML = "PIG";  
            //console.log("errou");
            pig = false;
    
        }   
        }
        function ErradoPink(){
            if(pink == false)
            {
        
                document.getElementById('pink').style.background = '#FA8072';
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
        function ErradoPoor(){
            if(poor == false)
            {
        
                document.getElementById('poor').style.background = '#FA8072';
                var bee = document.querySelector("#poor");
                bee.innerHTML = "POBRE";  
                //console.log("acertou");
                poor = true;
        
            }
            else
            {
                document.getElementById('poor').style.background = '#fff';
                var bee = document.querySelector("#poor");
                bee.innerHTML = "POOR";  
                //console.log("errou");
                poor= false;
        
            }     
        }

    //Rato
    var mouse = false;
    var desk1 = false;
    var red = false;

    function AcertoMouse(){
        if(mouse == false)
        {
    
            document.getElementById('mouse').style.background = '#32CD32';
            var bee = document.querySelector("#mouse");
            bee.innerHTML = "RATO";  
            //console.log("acertou");
            mouse = true;
    
        }
        else
        {
    
            document.getElementById('mouse').style.background = '#fff';
            var bee = document.querySelector("#mouse");
            bee.innerHTML = "MOUSE";  
            //console.log("errou");
            mouse = false;
    
        }   
        }
        function ErradoDesk1(){
            if(desk1 == false)
            {
        
                document.getElementById('desk1').style.background = '#FA8072';
                var bee = document.querySelector("#desk1");
                bee.innerHTML = "MESA";  
                //console.log("acertou");
                desk1 = true;
        
            }
            else
            {
                document.getElementById('desk1').style.background = '#fff';
                var bee = document.querySelector("#desk1");
                bee.innerHTML = "DESK";  
                //console.log("errou");
                desk1 = false;
        
            }     
         }
        function ErradoRed(){
            if(red == false)
            {
        
                document.getElementById('red').style.background = '#FA8072';
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
    
    //Urso
    var bear = false;
    var black1 = false;
    var bank = false;

    function AcertoBear(){
        if(bear == false)
        {
    
            document.getElementById('bear').style.background = '#32CD32';
            var bee = document.querySelector("#bear");
            bee.innerHTML = "URSO";  
            //console.log("acertou");
            bear = true;
    
        }
        else
        {
    
            document.getElementById('bear').style.background = '#fff';
            var bee = document.querySelector("#bear");
            bee.innerHTML = "BEAR";  
            //console.log("errou");
            bear = false;
    
        }   
        }
        function ErradoBlack1(){
            if(black1 == false)
            {
        
                document.getElementById('black1').style.background = '#FA8072';
                var bee = document.querySelector("#black1");
                bee.innerHTML = "PRETO";  
                //console.log("acertou");
                black1 = true;
        
            }
            else
            {
                document.getElementById('black1').style.background = '#fff';
                var bee = document.querySelector("#black1");
                bee.innerHTML = "BLACK";  
                //console.log("errou");
                black1 = false;
        
            }     
        }
        function ErradoBank(){
            if(bank == false)
            {
        
                document.getElementById('bank').style.background = '#FA8072';
                var bee = document.querySelector("#bank");
                bee.innerHTML = "BANCO";  
                //console.log("acertou");
                bank = true;
        
            }
            else
            {
                document.getElementById('bank').style.background = '#fff';
                var bee = document.querySelector("#bank");
                bee.innerHTML = "BANK";  
                //console.log("errou");
                bank = false;
        
            }     
        }

    //Vaca
    var cow = false;
    var can = false;
    var cook = false;
    function AcertoCow(){
        if(cow == false)
        {
    
            document.getElementById('cow').style.background = '#32CD32';
            var bee = document.querySelector("#cow");
            bee.innerHTML = "VACA";  
            //console.log("acertou");
            cow = true;
    
        }
        else
        {
    
            document.getElementById('cow').style.background = '#fff';
            var bee = document.querySelector("#cow");
            bee.innerHTML = "COW";  
            //console.log("errou");
            cow = false;
    
        }   
        }
        function ErradoCan(){
            if(can == false)
            {
        
                document.getElementById('can').style.background = '#FA8072';
                var bee = document.querySelector("#can");
                bee.innerHTML = "PODER";  
                //console.log("acertou");
                can = true;
        
            }
            else
            {
                document.getElementById('can').style.background = '#fff';
                var bee = document.querySelector("#can");
                bee.innerHTML = "CAN";  
                //console.log("errou");
                can = false;
        
            }    
        }
        function ErradoCook(){
            if(cook == false)
            {
        
                document.getElementById('cook').style.background = '#FA8072';
                var bee = document.querySelector("#cook");
                bee.innerHTML = "COZINHAR";  
                //console.log("acertou");
                cook = true;
        
            }
            else
            {
                document.getElementById('cook').style.background = '#fff';
                var bee = document.querySelector("#cook");
                bee.innerHTML = "COOK";  
                //console.log("errou");
                cook = false;
        
            }     
        }