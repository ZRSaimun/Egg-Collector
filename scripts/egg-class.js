$(document).ready(onLoad);

var scope = {};
// test creating new test

// This is a test function to work with the egg
// function onLoad(){

//     var firstChickenDiv = $('div.chicken').first();

//     scope.testEgg = new Egg(firstChickenDiv);
//     console.log(scope.testEgg.startPosLeft);
//     window.setTimeout(function(){scope.testEgg.startFall();},1000);


// }




function Egg($chickenDiv){

  this.chickenDivPosition = $chickenDiv.offset();
  this.startPosLeft = this.chickenDivPosition.left + $chickenDiv.width()/2 - 20;
  this.startPosTop = this.chickenDivPosition.top + $chickenDiv.height() - 30;




  this.$eggImageDiv = $('<div></div>').attr('class', 'egg')
                                      .css('left', this.startPosLeft)
                                      .css('top', this.startPosTop);

  $chickenDiv.append(this.$eggImageDiv);

  var basket = new Basket();
  this.distanceToBasket = basket.basketTop;


  var milliSeconds = window.innerHeight * 5;


  var eggObject = this;

  this.startFall = function(){
    this.$eggImageDiv.animate({top: this.distanceToBasket}
                            , milliSeconds, 'linear', this.catchEgg);
  };



  this.catchEgg = function(){
    //$(this).fadeOut('slow', function(){$(this).remove();});
    var $eggDiv = $(this);
    // $eggDiv.css('border', '2px solid purple');
    var $eggPosition = $eggDiv.offset();

    var basket = new Basket();
    var basketRight = basket.basketRight;
    var basketLeft = basket.basketLeft;
    var eggLeft = $eggPosition.left;
    var eggRight = $eggPosition.left + $eggDiv.width();

    var isCatched = basketRight > eggRight
                    && basketLeft < eggLeft;
    if(isCatched){
      $eggDiv.fadeOut('slow', function(){$egg.remove();});
      // credit parseInt Vladimir Cherny
      $('div.score').text(parseInt($('div.score').text()) + 1);

    }else{
      eggObject.missedEgg();
    }







  };


  this.missedEgg = function(){
    var $egg = eggObject.$eggImageDiv;
    $egg.animate({top: window.innerHeight - $egg.height()}
                            , 1000, 'linear', eggObject.breakEgg);



  }

  this.breakEgg = function(){
    var score = $('div.score').text();
    var player = $.urlParam('player');
    $(document.location).attr('href','index.html?score=' + score + '&player=' + player);


  };



};



$.urlParam = function(name) {

     url = window.location.href;

    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
    if (!results) {
        return undefined;
    }
    return unescape(results[1]) || undefined;
}






