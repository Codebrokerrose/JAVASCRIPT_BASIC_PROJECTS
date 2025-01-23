         // let score= JSON.parse( localStorage.getItem('score')) ; // saves the score more parmanently parse the json object to js object 
             
         // // if (score === null){
         //     if (!score){
         //     score = {
         //         wins:0,
         //         loses:0,
         //         ties:0
         //     };
         // }
         let score= JSON.parse( localStorage.getItem('score')) || {  // use ' default operator ' to check if not exists 
            wins:0,
            loses:0,
            ties:0
        }; // saves the score more parmanently parse the json object to js object 
            
       updateScoreElement();
       
       let isAutoPlaying = false;
       let intervalId ;
       
       function autoPlay(){
        if(!isAutoPlaying){
            //setInterval returns a id (number) 

            // intervalId = setInterval(function(){
            //     const playerMove = pickCompMove();
            //     playGame(playerMove);
            // },1000);

            intervalId = setInterval(() => { //use the arrow function
                const playerMove = pickCompMove();
                playGame(playerMove);
            },1000);
            isAutoPlaying = true;
            document.querySelector('.auto-play-button').innerHTML='Stop Play';
        }else{
            // call clearInterval to stop the interval
            clearInterval(intervalId);
            isAutoPlaying=false;
            document.querySelector('.auto-play-button').innerHTML='Auto Play';
        }
       }

        // console.log(JSON.parse( localStorage.getItem('score')));   
        function playGame( playerMove){
            const compMove = pickCompMove();
            let result='';
            if (playerMove === 'scissors'){
                if(compMove === 'rock'){
                    result='you lose';
                }
                else if (compMove === 'paper'){
                    result='you win';
                }
                else if (compMove === 'scissors'){
                    result='tie';
                }
            }
            else if (playerMove === 'paper'){
                if(compMove === 'rock'){
                    result='you win';
                }
                else if (compMove === 'paper'){
                    result='tie';
                }
                else if (compMove === 'scissors'){
                    result='you lose';
                }
            }
            else if (playerMove === 'rock'){              
                if(compMove === 'rock'){
                    result='tie';
                }
                else if (compMove === 'paper'){
                    result='you lose';
                }
                else if (compMove === 'scissors'){
                    result='you win';
                }
            }
            if(result === 'you win'){
                score.wins +=1;
            }
            if(result === 'you lose'){
                score.loses +=1;
            }
            if(result === 'tie'){
                score.ties +=1;
            }

            localStorage.setItem(`score`,JSON.stringify(score)); // setItem only support string thus convert the score number into a string
            updateScoreElement();

            document.querySelector('.js-result').innerHTML=result;
           //  document.querySelector('.js-moves').innerHTML=`You ${playerMove} - ${compMove} Computer`;
           document.querySelector('.js-moves').innerHTML=`You
               <img src="images/${playerMove}.webp" class="move-icon">
               <img src="images/${compMove}.webp" class="move-icon">
               Computer`;
//           alert(`you picked ${playerMove}, Computer picked ${compMove} , ${result}
//  wins: ${score.wins} , Losses: ${score.loses} , Ties: ${score.ties} .`);
        }

        function updateScoreElement(){
           document.querySelector('.js-score')
               .innerHTML = ` wins: ${score.wins} , Losses: ${score.loses} , Ties: ${score.ties} .`;
        }
        function pickCompMove(){
            const random= Math.random();
            let compMove='';
            if(random >= 0 && random<1/3){
                compMove='rock';
            }else if(random>=1/3 && random<2/3){
                compMove='paper';
            }
            else if(random>=2/3 && random<1){
                compMove='scissors';
            }
            console.log(compMove);
            return compMove;
        }