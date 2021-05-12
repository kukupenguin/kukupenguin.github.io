function toPic1() {
    document.getElementById("button1").style.background = "midnightblue";
    document.getElementById("button2").style.background = "lightblue";
    document.getElementById("button3").style.background = "lightblue";
    document.getElementsByClassName("pic")[0].style.transform =
      "translate(0%)";
    document.getElementsByClassName("pic")[1].style.transform =
      "translate(0%)";
    document.getElementsByClassName("pic")[2].style.transform =
      "translate(0%)";
  }
  function toPic2() {
    document.getElementById("button2").style.background = "midnightblue";
    document.getElementById("button1").style.background = "lightblue";
    document.getElementById("button3").style.background = "lightblue";
    document.getElementsByClassName("pic")[0].style.transform =
      "translate(-100%)";
    document.getElementsByClassName("pic")[1].style.transform =
      "translate(-100%)";
    document.getElementsByClassName("pic")[2].style.transform =
      "translate(-100%)";
  }
  function toPic3() {
    document.getElementById("button3").style.background = "midnightblue";
    document.getElementById("button2").style.background = "lightblue";
    document.getElementById("button1").style.background = "lightblue";
    document.getElementsByClassName("pic")[0].style.transform =
      "translate(-200%)";
    document.getElementsByClassName("pic")[1].style.transform =
      "translate(-200%)";
    document.getElementsByClassName("pic")[2].style.transform =
      "translate(-200%)";
  }

  var curPic=0;
    var picArray=[toPic1, toPic2, toPic3];
    function setPic(){
      picArray[curPic]();
      curPic++;
      if(curPic==3)
        curPic=0;
    }
  setInterval(setPic, 2000);



  var toggleStatus = false;
  function toggle() {
    if (toggleStatus == false) {
      document.getElementById("navbar").style.width = "90vw";
      //document.getElementById("navbar").style.display = "inline-block";
      toggleStatus = true;
    } else {
      document.getElementById("navbar").style.width = "0";
      //document.getElementById("navbar").style.display = "none";
      toggleStatus = false;
    }
  }
  document.addEventListener("click", function (e) {
    if (document.body.clientWidth <= 760) {
      if (e.clientX > document.body.clientWidth * 0.9) {
        document.querySelector("#navbar").style.width = "0";
        toggleStatus = false;
      }
    }
  });
  function myFunction() {
    if(document.getElementById("pwd").value == "game"){
        alert("welcome");
        window.open("game.html","_self");
    }
    else
        alert("wrong")
  }