$(document).ready(onLoad);

// var scope = {};
// text function to test creation of new egg
function onLoad(){





}

// creat Chicken Class with parameter $chickenDiv
function Chicken($chickenDiv){
  // create recursive function with setTimeout where time out is random
  this.hatchEggs = function(){
    this.nextEgg = new Egg($chickenDiv);
// calling function startFall of nextEgg object
    this.nextEgg.startFall();
// calculate period when next egg will start falling
    var nextEggTime = getRandomInt(14000, 20000);
       window.setTimeout(this.hatchEggs.bind(this), nextEggTime);

  }


}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
