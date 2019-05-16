$(document).ready(function(){
  $("#start").click(function(){
    $(".turn1").show();
    $(".turn2").show();
    });

    var user1, roundTotal1, totalScore1 , user2, roundTotal2, totalScore2;
    roundTotal1 = 0;
    totalScore1 = 0;
    roundTotal2 = 0;
    totalScore2 = 0;


    $("#roll1").click(function(){
    anyNo= Math.floor(Math.random()*6)+1;
      if(anyNo===1){
        alert("Oh no! you rolled a 1.It's user2's turn");
        roundTotal1 = 0;
        $("#total1").text(roundTotal1);
        totalScore1 += roundTotal1;
        $("#score1").text(totalScore1);
        $(".hide1").hide();
        $(".hide1").show();
      }
      else{
        $("#result1").text(anyNo);
        roundTotal += anyNo;
        $("#total1").text(roundTotal1);
      }
      $("#hold1").click(function(){
        totalScore1 += roundTotal1;
        $("#total1").text(totalScore1);
        roundTotal1 = 0;
         $(".hide1").hide();
         $(".hide1").show();
        

      })
        



      });
      $("#roll2").click(function(){
        anyNo= Math.floor(Math.random()*6)+1;
          if(anyNo===1){
            alert("Your turn is over, now it's user 1's turn");
            roundTotal2 = 0;
            $("#total2").text(roundTotal2);
            totalScore2 += roundTotal2;
            $("#score2").text(totalScore2);
            $(".hide2").hide();
            $(".hide1").show();
          }
          else{
            $("#result2").text(anyNo);
            roundTota2 += anyNo;
            $("#total2").text(roundTotal2);
          }
          $("#hold2").click(function(){
            totalScore2 += roundTotal2;
            $("#total2").text(totalScore2);
            roundTotal2 = 0;
             $(".hide2").hide();
             $(".hide1").show();
            
    
          })
            
    
    
    
          });
    
    









  });
























