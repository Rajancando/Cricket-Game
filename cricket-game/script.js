
      // array of object
      let scoreStr = localStorage.getItem("score");
      let score;
      resetscore(scoreStr);

      function resetscore(scoreStr) {
        score = scoreStr
          ? JSON.parse(scoreStr)
          : {
              win: 0,
              loss: 0,
              tie: 0,
            };
        score.displayscore = function () {
          return `win :${score.win}, loss: ${score.loss}, tie: ${score.tie}`;
        };
      }

      // computer-choice
      function computerchoice() {
        let computerVal = Math.random() * 3;

        if (computerVal > 0 && computerVal <= 1) {
          return "bat";
        } else if (computerVal > 1 && computerVal <= 2) {
          return "ball";
        } else {
          return "stump";
        }
      }
      //  final result

      function finalResult(usermsg, computermsg) {
        if (usermsg === "bat") {
          if (computermsg === "bat") {
            score.tie++;
            return "it's a tie";
          } else if (computermsg === "ball") {
            score.win++;
            return "user won";
          } else {
            score.loss++;
            return "computer won";
          }
        } else if (usermsg === "ball") {
          if (computermsg == "bat") {
            score.loss++;
            return "computer won";
          } else if (computermsg === "ball") {
            score.tie++;
            return "it's a tie";
          } else {
            score.win++;
            return "user won";
          }
        } else {
          if (computermsg === "bat") {
            score.win++;
            return "user won";
          } else if (computermsg === "ball") {
            score.loss++;
            return "computer won";
          } else {
            score.tie++;
            return "it's a tie";
          }
        }
      }

      // display result

      function displayresult(usermsg, computermsg, resultMsg) {
        localStorage.setItem("score", JSON.stringify(score));

        document.querySelector(
          "#user-msg"
        ).innerHTML =
         usermsg!==undefined ? `you have chosen ${usermsg}`:'';
        
        document.querySelector(
          "#comp-msg"
        ).innerHTML = 
        computermsg===undefined?'':`comp has chosen ${computermsg}`;

        document.querySelector("#result-msg").innerHTML =
        resultMsg!==undefined? resultMsg:'';

        document.querySelector("#final-score").innerHTML = score.displayscore();
      }