/*
 * TODO 4: Create a modularized index.js, 
 * pass in window and createjs
 */
(function(window, createjs) {
  // TODO 5: Initialize CreateJS //
  const
  canvas = document.getElementById('canvas'),
  stage = new createjs.Stage(canvas)

  // TODO 6: Set the framerate of the Ticker
  createjs.Ticker.framerate = 60;


  /*
   * TODO 7:CREATE AND CONFIGURE ANY DISPLAY 
   * OBJECTS AND ADD THEM TO THE DISPLAY LIST HERE
   */
  
  // INIT CREATEJS //
  const
    radius = 25,
    bg = new createjs.Shape(),
    circle = new createjs.Shape(),
    rectangle = new createjs.Shape(),
    polyStar = new createjs.Shape();
    
  // CREATE A BACKGROUND //
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

  bg.graphics.beginFill('#CCC').drawRect(0, 0, canvas.width, canvas.height);
    
  // CREATE A CIRCLE //

  circle.graphics.beginFill('blue').drawCircle(0, 0, radius);
  circle.x = canvas.width / 2;
  circle.y = canvas.height / 2;

  rectangle.graphics.beginFill('red').drawRect(0, 0, 25, 25);
  rectangle.x = canvas.width / 2.5;
  rectangle.y = canvas.height / 2.5;

  polyStar.graphics.beginFill('green').drawPolyStar(0, 0, radius, 6, 6, 40);
  polyStar.x = canvas.width / 3;
  polyStar.y = canvas.height / 3;



  // ADD DISPLAY OBJECTS TO STAGE //
  stage.addChild(bg, circle, rectangle, polyStar);


  // TODO 8: Listen to the 'tick' event  //
  let tickerHandler = createjs.Ticker.on('tick', onTick);
  

  // TODO 9: Handle the 'tick' event //
  function onTick(event){
      update(event);
  }
  

  /*
   * TODO 10: Implement an update Function, after making 
   * changes to assets, it must call stage.update(); 
   */
  function update(event){
      stage.update();
  }
  

}(window, window.createjs));
