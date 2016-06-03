var JQ = jQuery;
var hour = JQ('#hour').val();
var minute = JQ('#minute').val();
var second = JQ('#second').val();
var inputs = JQ('.inputs');
var run = JQ('#run').click(function () {
 inputs.toggle();
});
var pause = JQ('#pause').click(function(){

});
var stop = JQ('#stop').click(function() {
  inputs.toggle();
});
