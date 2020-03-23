// Rover Object Goes Here
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
// x and y axis of 10x10 grid
};

// ======================

// ======================

function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
}
  console.log("turnLeft was called!");
  console.log("Rover coordinates are " + rover.x + ", " + rover.y)

function turnRight(rover) {
 switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
  }
  console.log("turnRight was called!")
  console.log("Rover coordinates are " + rover.x + ", " + rover.y)
}
function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      if (rover.x <= 0 || rover.x > 10) {
        console.log("Rover has hit a wall!")
      } else {
      rover.x--
      rover.travelLog.push([rover.x, rover.y])
      }
      break;
      
     case 'W':
      if(rover.y <= 0 || rover.y > 10){
        console.log("Rover has hit a wall!")
      } else {
        rover.y--
        rover.travelLog.push([rover.x, rover.y])
      }
      break;
      
     case 'S':
      if (rover.x < 0 || rover.x >= 10){
        console.log("Rover has hit a wall!")
      } else {
        rover.x++
        rover.travelLog.push([rover.x, rover.y])
      }
      break;
  
     case 'E':
      if (rover.y < 0 || rover.y >= 10 ){
        console.log("Rover has hit a wall!")
      } else {
        rover.y++
        rover.travelLog.push([rover.x, rover.y])
      }
      break;
  }
console.log("moveForward was called!")
console.log("Rover coordinates are " + rover.x + ", " + rover.y)
}

var commands = ['r', 'f', 'f', 'r', 'f', 'f', 'l', 'f', 'r', 'f', 'f' ]

commands.forEach(function(element) {
  switch(element) {
    case 'f':
      moveForward(rover)
      break;
     case 'r':
      turnRight(rover)
      break;
    case 'l':
      turnLeft(rover)
      break;
  }
})
console.log(rover.travelLog);



