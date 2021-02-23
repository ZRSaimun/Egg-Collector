
$(document).ready(onLoad);

// test basket functionality
// function onLoad(){
//   window.setInterval(function(){
//     var basketObject = new Basket();},200);
// };

// create Basket Class
function Basket(){
  this.divBasket = $('div.basket');
  this.basketPosition = this.divBasket.offset();

  this.divWolf = $('div.wolf');
  this.wolfPosition = this.divWolf.offset();

  this.basketTop = this.basketPosition.top;
  this.basketLeft = this.basketPosition.left;

  this.basketRight = this.basketLeft + this.divBasket.width();
  this.basketBottom = this.basketTop + this.divBasket.height();

  // var basketObject = this;
  // // find eggs near wolf basket
  // this.$catchedEgg = $('div.egg').each(function(){
  //   // 'this' inside the filter function is poiting to each selected element
  //   // by jquery selector
  //   var $egg = $(this);
  //   var $eggPosition = $egg.offset();
  //   var $eggLeft = $eggPosition.left;
  //   var $eggRight = $eggPosition.left + $egg.width();
  //   var $eggTop = $eggPosition.top;
  //   var $eggBottom = $eggPosition.top + $egg.height();

    // var isCaptured = $eggRight < basketObject.basketRight
    //                  && $eggLeft > basketObject.basketLeft
    //                  && $eggTop < basketObject.basketTop
    //                  && $eggBottom < basketObject.basketBottom;

    // // hide catched eggs
    // if(isCaptured){
    //     $egg.attr('catched', 'true').css('border', '1px solid black');
    // }

  // });




}


