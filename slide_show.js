/*var $ = function (id) { 
	return document.getElementById(id); 
}
window.onload = function () {
    var slidesNode = $("slides");    
    var captionNode = $("caption");
    var imageNode = $("slide");
        
    var slides = slidesNode.getElementsByTagName("img");
    
    // Start slide show
    var image, imageCounter = 0;
    var  timer = setInterval(
        function () { 
            imageCounter = (imageCounter + 1) % slides.length;
			/*   https://www.miniwebtool.com/modulo-calculator   
            imageCounter = (imageCounter);
            image = slides[imageCounter];
            imageNode.src = image.src;
            captionNode.firstChild.nodeValue = image.alt;  
            captionNode.innerHTML = captionNode.firstChild.nodeValue ; 
        },
        2000);
}
*/

var $ = function (id) { 
	return document.getElementById(id); 
}
window.onload = function () {
	$("name").focus();
    var slidesNode = $("slides");    
    var captionNode = $("caption");
	var counterNode = $("counter");
    var imageNode = $("slide");
	
	var nextButton = $("next");
	var previousButton = $("previous");
	
	var image, imageCounter = 0;
	var counter=0;
    var slides = slidesNode.getElementsByTagName("img");
	// var counters=[];
	
					// for (var i=0;i<6;i++)
					// {
						// counters[i]=0;
					// }
	
	/* $("next").addEventListener("click",function() {
											imageCounter = (imageCounter + 1) % slides.length;
											image = slides[imageCounter+1];
  											imageNode.src = image.src;
											counterNode.firstChild.nodeValue = imageCounter;
  											captionNode.firstChild.nodeValue = image.alt;
										});
	
	$("previous").addEventListener("click", function() {
  											imageCounter = (imageCounter + 1) % slides.length;
 											 image = slides[imageCounter];
 											 imageNode.src = image.src;
											 counterNode.firstChild.nodeValue = imageCounter;
 											 captionNode.firstChild.nodeValue = image.alt;
									});
									
	*/
				
var  timer = setInterval(
        function () { 
											imageCounter = (imageCounter + 1) % slides.length;
											image = slides[imageCounter+1];
  											imageNode.src = image.src;
											counterNode.firstChild.nodeValue = imageCounter;
  											captionNode.firstChild.nodeValue = image.alt; 
        },
        4000);				
									
$("submit").addEventListener("click", function() {		

			//var currentImageCounter = parseInt($("counter").firstChild.nodeValue);
			
			var name = document.getElementById("name").value;
			var x = ($("name").value);
			if(x == $("caption").firstChild.nodeValue)
			{
				//counters[currentImageCounter]=0;
				//counter = 0;
				text = "You entered it correctly";
			}
			else if(x == "")
			 {
				text = "Name should be filled int the field ";
			}
			else{
				//counters[currentImageCounter]=counters[currentImageCounter]+1;
				counter++;
				//if(counters[currentImageCounter]>=10)
				if(counter>=10)
				{
					 text = "You Lost the game ! Out of attempts";
				}
				else{
					//var chancesLeft = 10-counters[currentImageCounter];
					var chancesLeft = 10-counter;
					text = "Incorrect! you have only "+chancesLeft+" chances left";
				}
				
			}
			document.getElementById("demo").innerHTML = text;
					
		});					
	
	}
