
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

			//Start game
			function startGame(){
				document.getElementById("content").style.cursor="none";
				document.getElementById("area").style.display = "block";
				
				
				time = 60;
            	document.form1.score.value = 0;
            	beat = 0;
				timeShow();
				document.getElementById("content").style.display="block";
				document.getElementById("remtime").style.display="block";				
				document.getElementById("score").style.display="block"
				
				document.getElementById("content").style.background="url(img/bg_canvas.png)";
				document.getElementById("start").style.display="none";
				document.getElementById("message").style.display="none";
				document.getElementById("leaderboard").style.display="none";
				document.getElementById("exit").style.display="none";
				intervalid= setInterval(function(){
				//random 
				var  num = Math.floor(Math.random()*9);
					
				//Get various distances
				var l1=document.getElementById('Img').offsetLeft;  
				//self width and left width
	            var r1=document.getElementById('Img').offsetLeft+document.getElementById('Img').offsetWidth;  
	            var t1=document.getElementById('Img').offsetTop;  
	            //hammer height and top height
	            var b1=document.getElementById('Img').offsetTop+document.getElementById('Img').offsetHeight;  
	            var l2=document.getElementById('m'+num).offsetLeft; 
	            //mole self width and left width
	            var r2=document.getElementById('m'+num).offsetLeft+document.getElementById('m'+num).offsetWidth;  
	            var t2=document.getElementById('m'+num).offsetTop;  
	            //mole height and top  
	            var b2=document.getElementById('m'+num).offsetTop+document.getElementById('m'+num).offsetHeight;  
	             //collision
	            if(r1<l2 || l1>r2 || b1<t2 || t1>b2)  
	            {  
	            	var ele = document.getElementById("m"+num);
	            	//hammer click
	            	ele.onmousedown = function(){
   		
	            		document.form1.score.value = beat;
	            		console.log("总得分为："+beat); 
	            	}
	                beat+=1;
	            }  
	            else  
	            {  
	            	var ele = document.getElementById("m"+num);
	            	ele.onmousedown = function(){
	            		ChangeBg("Img","img/hammer2.png");
	            		
	            		 document.getElementById('m'+num).style.background='url(img/mouse1.png)';  
	            	}
	               
	            }

		            
		        },3000);
					
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
		  
		//countdown
		  function timeShow(){
			    
			    if(time == 0){
			        GameOver();
			        return;
			    }else{
			        time = time-1;
			        document.form1.remtime.value = time;
			        timeId = setTimeout("timeShow()",2000);
			    }
			}
			