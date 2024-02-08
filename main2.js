var page = 0;
var points = 0;
var soundcorrect = new Audio("CorrectSound.wav");
var soundWrong = new Audio("WrongSound.wav");

function setpoints(){
    document.getElementById("pointscount").innerHTML = localStorage.getItem("Answer",points)
}

function homepage(){
    window.location.replace("index.html");
}

function setpage(){

    if(page == 1){
      document.getElementById("QTitle").innerHTML = "What book influenced Marie Maynard Daly?";
      document.getElementById("image").src = "Marie_Maynard_Daly2.jpg";
      document.getElementById("button1").innerHTML = "On the Origin of Species";
      document.getElementById("button2").innerHTML = "Cosmos";
      document.getElementById("button3").innerHTML = "A brief history of time";
      document.getElementById("button4").innerHTML = "Microbe hunters";
      document.getElementById("pointscount").innerHTML = points;
    }
  
    if(page == 2){
      document.getElementById("QTitle").innerHTML = "What challenges did Daly face?";
      document.getElementById("image").src = "Marie_Maynard_Daly3.jpg";
      document.getElementById("button1").innerHTML = "Racism only";
      document.getElementById("button2").innerHTML = "Racism and Gender bias";
      document.getElementById("button3").innerHTML = "Gender bias only";
      document.getElementById("button4").innerHTML = "She did not have a supportive family or any supportive person";
      document.getElementById("pointscount").innerHTML = points;
    }
  
    if(page == 3){
      document.getElementById("QTitle").innerHTML = "What helped other people by Marie Maynard Daly discovering more about how histones work";
      document.getElementById("image").src = "Marie_Maynard_Daly3.jpg";
      document.getElementById("button1").innerHTML = "it made Alfred Mirsky happy";
      document.getElementById("button2").innerHTML = "it helped people understand how DNA works";
      document.getElementById("button3").innerHTML = "it helped students in biology class to understand and learn histones easier";
      document.getElementById("button4").innerHTML = "it made no difference what so ever";
      document.getElementById("pointscount").innerHTML = points;
    }
    console.log(page);
  }
  
  function answer1(){
   if(page == 0){
    document.getElementById("Answer").innerHTML = "Correct!";
    soundcorrect.play();
  
    setTimeout(function(){
      document.getElementById("Answer").innerHTML = "...";
    }, 3000);
      page = 1;
      points++
      setpage();
  }
  
   else{
      document.getElementById("Answer").innerHTML = "Wrong!";
  
      setTimeout(function(){
          document.getElementById("Answer").innerHTML = "...";
        }, 3000);
        setpoints();
        points--;
        soundWrong.play();
   }
  }
  
  function answer2(){
   if(page == 2){
    document.getElementById("Answer").innerHTML = "Correct!";
    soundcorrect.play();
  
    setTimeout(function(){
      document.getElementById("Answer").innerHTML = "...";
    }, 3000);
    page = 1;
    points++
    setpage();
    setTimeout(function(){
        localStorage.setItem("Answer",points);
        window.location = "game2.html";
      }, 3000);
   }
  
   else{
      document.getElementById("Answer").innerHTML = "Wrong!";
  
      setTimeout(function(){
          document.getElementById("Answer").innerHTML = "...";
        }, 3000);
        setpoints();
        points--;
        soundWrong.play();
   }
  }
  
  function answer3(){
   if(page == 3){
    document.getElementById("Answer").innerHTML = "Correct!";
    soundcorrect.play();
  
    setTimeout(function(){
      document.getElementById("Answer").innerHTML = "...";
    }, 3000);
      page = 2;
      points++
      setpage();
   }
  
   else{
      document.getElementById("Answer").innerHTML = "Wrong!";
  
      setTimeout(function(){
          document.getElementById("Answer").innerHTML = "...";
        }, 3000);
        setpoints();
        points--;
        soundWrong.play();
   }
  }
  
  function answer4(){
   if(page == 1){
    document.getElementById("Answer").innerHTML = "Correct!"
    soundcorrect.play();
  
    setTimeout(function(){
      document.getElementById("Answer").innerHTML = "...";
  
    }, 3000);
      page = 3;
      points++;
      setpage();
  }
  
   else{
      document.getElementById("Answer").innerHTML = "Wrong!";
  
      setTimeout(function(){
          document.getElementById("Answer").innerHTML = "...";
        }, 3000);
        setpoints();
        points--;
        soundWrong.play();
   }
  }