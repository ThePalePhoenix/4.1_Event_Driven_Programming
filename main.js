//Elias Kinard
var parent = document.getElementById("container"); // Element that holds the mover
var mover = document.getElementById("mover"); // The mover, can be anything
var dir = 1; // The direction we are moving... 1 is right, -1 is left.
var dist = 10; // The distance we move each "tick"

// The ID will let us stop it later if we want.
function draw() {

    //bringing 'parent' and 'mover' into the local scope as they were reading as 'null' previously.
    var parent = document.getElementById("container");
    var mover = document.getElementById("mover");

    // Get the left, remove the "px" from the end and convert it to an integer.
    var posX = parseInt(mover.style.left.replace(/px$/, '')) || 0;

    // Add dir * dist
    posX += dir * dist;
    
    // If we are moving right and we've gone over the right edge...
    if (dir == 1 && posX + mover.offsetWidth > parent.offsetWidth) {
        // only move right to the edge...
        posX -= posX + mover.offsetWidth - parent.offsetWidth;
        // and change direction.
        dir *= -1
    // If we are moving left and we've gone over the left edge...
    } else if (dir == -1 && posX < 0) {
        // stop at zero...
        posX = 0;
        // and change direction...
        dir *= -1;
    }
    
    // Set the new position
    mover.style.left = posX + "px";
    //Re-draw
    window.requestAnimationFrame(draw);
}

//a simple function that changes the ID of the 'mover' to stop its movement. I couldn't figure out cancelAnimationFrame. But I left it, because it's funny.
function stop() {
    //The below commented method, if un-commented (and the document method is commented), then the image with ID="stop" is renamed to ID="mover"
    //The stop button will progressively increase the speed of the image. It's... really funny.
    //window.cancelAnimationFrame(draw);
    document.getElementById('mover').id = "stop";
}

