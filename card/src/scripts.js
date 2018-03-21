console.log("scripts attached");

// ********************************************************
  var PiickACardButton= document.getElementsByClassName("buttonClass");
  var pick= document.getElementById("pick");
  var create= document.getElementById("create");
  var print= document.getElementById("print");




  var attachCardsDiv = document.createElement("div");
		attachCardsDiv.className += "attach-cards-div"// main div don't touch

		var classADiv = document.createElement("div");
		classADiv.className += "classA" 

    var classBDiv = document.createElement("div");
		classBDiv.className += "classB" 

    var squareMain = document.createElement("div");
    squareMain.className = "cardsPanel";
    squareMain.setAttribute("id", "squareMainID");

    var roundMain = document.createElement("div");
    roundMain.className = "cardsPanel";
    roundMain.setAttribute("id", "roundMainID");


    var cardFrontDiv = document.createElement("div");
	  cardFrontDiv.className += "front"

    var cardBackDiv = document.createElement("div");
		cardBackDiv.className += "back"






// **************************functions******************************


  function disableButton(){
		pick.disabled = true;//disable the pick button
	  console.log("two others Button have been disabled.");
  }


  function attachTwoCardsOnDom(){
    var array = [ roundMain, squareMain ]
	  var stylenames = ["square-card-style", "border-radius-card-style"]

		for (var i = 0; i < array.length; i++) {
			for (var i = 0; i < stylenames.length; i++) {
        // cardBackDiv.classList.add(stylenames[i]);
        // cardFrontDiv.classList.add(stylenames[i]);
				classBDiv.appendChild(cardBackDiv);
			  classBDiv.appendChild(cardFrontDiv);
	      // squareCardDiv.appendChild(textContent);
			  classADiv.appendChild(classBDiv).addEventListener('click', function(event){
			    console.log("clicked");
		    });
		    array[i].classList.add(stylenames[i]);
			  array[i].appendChild(classADiv);
			  attachCardsDiv.appendChild(array[i]);
			  document.body.appendChild(attachCardsDiv);				
			};
		};

	}



	function detectClassOnDom(){
		var picksquaretag= document.querySelectorAll(".roundMain");
		console.log(picksquaretag)
	}



  function flipStyle(){ //adds flip css style to dom
		var styleSheet = document.createElement('style');
	  styleSheet.innerHTML = "body{background-color: blue}";
	  document.body.appendChild(styleSheet);	     
  }





  function rotateButton(){ //this function goes inside removeCardFromDom function
	  var createrotatebutton = document.createElement("button");
		var buttonText = document.createTextNode("Rotate");
	  createrotatebutton.classList.add("rotate-button-class");
	  createrotatebutton.appendChild(buttonText);
	  attachCardsDiv.appendChild(createrotatebutton)
	  document.body.appendChild(attachCardsDiv);

	  createrotatebutton.addEventListener('click', function(event){
	  	console.log("hello rotate button clicked");
	  	flipStyle();
	  })
  }





			
	function removeCardFromDom(){
		var getCardsPanel = document.getElementsByClassName("cardsPanel");
  	for (var i = 0; i < getCardsPanel.length; i++) {
  		console.log(getCardsPanel[i]);

	  	getCardsPanel[i].addEventListener('click', function(event){
				console.log("clicked");
			  var squareClick =  document.getElementById("squareMainID");
				var roundClick =  document.getElementById("roundMainID");
				if(event.target === squareClick){
					console.log("squareMain clicked")
					roundClick.remove();
					rotateButton()	
				}
				if(event.target === roundClick){
					console.log("roundMain clicked");
					squareClick.remove();
					rotateButton()
				}
			});
  	};
  } 

  
  




// **************************main recipe******************************


  for (var i = 0; i < PiickACardButton.length; i++) {

  	PiickACardButton[i].addEventListener('click', function(event){		
			

			if(event.target === create || event.target === print){
				console.log("pick a card first");
				//add popup
			}
			else
			{
				disableButton();	
				if(pick.disabled = true){
					create.disabled = true;
					print.disabled = true;
					console.log("disable create button or print button");
					attachTwoCardsOnDom();
					detectClassOnDom();//detecting
					removeCardFromDom();
				}
			}

	  })
  };


