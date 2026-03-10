$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(1100, 599, 200, 10, "orange");
    createPlatform(650, 485, 200, 10, "red");
createPlatform(600,500,100,10,"grey");
createPlatform(500,250,50,10);
createPlatform(400,250,50,10);

    // TODO 3 - Create Collectables
    createCollectable("database", 1200, 550, 0, 0.7);
    createCollectable("database", 740, 440, 0, 0.7);
    createCollectable("database", 550, 400, 0, 0.7);
    // TODO 4 - Create Cannons
    createCannon("top", 200, 600);
    createCannon("right", 400, 600);
    createCannon("top", 300,600);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
