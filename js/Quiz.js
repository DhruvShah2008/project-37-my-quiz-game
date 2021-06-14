class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

    Form.hide();
    textSize(30);
    text("gameStart",120,100);
    contestant.getContestantInfo();

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here

    if( allContestants !== undefined){
      fill ("blue");
      textSize(20);
      text(" NOTE: THe name of the contestant who has answered correctly is highlighted in green color",130,230);
      for(var plr in allContestants){
        var correctAns = "2";
        if( correctAns === allContestants[plr].answer)
          fill("green")
          else 
            fill("red");
  
            display_position+=20;
            textSize(15);
            text(allContestants[plr].name + ": "+allContestants[plr].distance,120,display_position)
  
    }

    if(keyDown(UP-ARROW)&&contestant.index!==null){
      contestant.distance+=50;
      contestant.update();
    }

    
    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly

   
        

    }
    
  }
}

