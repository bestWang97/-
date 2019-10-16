
			//Record hitted animals numbers
			var beat = 0;
  			//game time
  			var time = 60;
  			//countdown
  			var countDown = 5;
			/*Game rules*/	
			intervalid = null,        //setInterval() function
   			timeId = null;         //setTimeout() function
   			timeId2 = null;		//
			function helpMessage(){

				document.getElementById("start").style.display="none";
				document.getElementById("message").style.display="none";
				document.getElementById("exit").style.display="none";
				document.getElementById("leaderboard").style.display="none";
				document.getElementById("content").style.background="url(img/help.png) no-repeat";
				document.getElementById("back").style.display="block";
				
			}
			//Back to menu
			function backMenu(){
				document.getElementById("endbtn").style.display = "none";
				document.getElementById("content").style.cursor="none";
				document.getElementById("content").style.display="block";

				document.getElementById("endPhoto").style.display="none";
				document.getElementById("start").style.display="inline-block";
				document.getElementById("message").style.display="inline-block";
				document.getElementById("exit").style.display="inline-block";
				document.getElementById("leaderboard").style.display="none";
				document.getElementById("content").style.background="url(img/set_board.png)";
				document.getElementById("back").style.display="none";
				
			}
			//countdown over
			function GameOver(){
				document.getElementById("remtime").style.display="none"
				document.getElementById("score").style.display="none"
				document.getElementById("endPhoto").style.cursor = "none";
				document.getElementById("back2").style.cursor = "none";
				document.getElementById("restart").style.cursor = "none";
				document.getElementById("area").style.display = "none";
				document.getElementById("point").innerText = beat;
				document.getElementById("content").style.cursor="auto";
    			clearTimeout(timeId);//clearTime()方法返回setTimeout()的id	
    			clearTimeout(timeId2);
    			clearInterval(intervalid);
				document.getElementById("endPhoto").style.display="block"
				document.getElementById("content").style.display="none";

				for (var i=0;i<=8;i++) {
					document.getElementById("m"+i).style.marginTop="100px";
				}
				
				
				
			}
			
			//Start game
			function startGame(){
				document.getElementById("content").style.cursor="none";
				document.getElementById("area").style.display = "block";
				
				
				time = 60;
            	document.form1.score.value = 0;
            	beat = 0;
				document.getElementById("content").style.display="block";
				document.getElementById("score").style.display="block"
				
				document.getElementById("content").style.background="url(img/bg_canvas.png)";
				document.getElementById("start").style.display="none";
				document.getElementById("message").style.display="none";
				document.getElementById("leaderboard").style.display="none";
				document.getElementById("exit").style.display="none";
				}

		/*Hammer and animal collision*/
		// Hammer moves with the mouse
	 		window.onload=Main;
		//Global coordinates
		  var x="";
		  var y="";
		//locate the image position
		   function GetMouse(oEvent,snum)
		  {
		     x=oEvent.clientX;
		     y=oEvent.clientY;
		    document.getElementById('Img').style.left=(parseInt(x))+10+"px";
		    document.getElementById('Img').style.top=y-30+"px";		    
		     var oEvent=oEvent||event;    
		   }
		//entrance
		  function Main()
		  {

		    var ele=document.getElementById("all");
		//Mouse movement event
		    ele.onmousemove=function(){GetMouse(event);}
		// Mouse press event
		    ele.onmousedown=function(){
            		ChangeBg("Img","img/hammer2.png");
		    	
		    }
		//mouse feeback event
		    ele.onmouseup=function(){ChangeBg("Img","img/hammer.png");}
		   }
		//image change
		  function ChangeBg(id,url)
		  {
		    document.getElementById(id).src=url;
		  }
		  
			/*退出游戏功能*/
			function exit(){
				var r = confirm("Are you sure to exit？","alert");
				if(r==true){
					window.close();
				}else{
					alert("Go back to fight!");
				}
			}
			
			
			
	