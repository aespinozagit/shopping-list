// $(document).ready(function() {
//   $('.items').mouseenter(function() {
//     $('.items-button').hide();
//     $('.items-button-complete').show();
//   })

//   .mouseleave(function() {
//     $('.items-button').show();
//     $('.items-button-complete').hide();
//   })

//   .mousedown(function() {
//   	//Play hadouken sound
//   	playHadouken();
//     //Show hadouken and animate it to the right of the screen
//   	$('.ryu-ready').hide();
//   	$('.ryu-throwing').show();
//     $('.hadouken').finish().show().animate(
//       {'left': '1020px'}, 500,
//       function() {
//         $(this).hide();
//         $(this).css('left', '520px');
//       });
//   })

//   .mouseup(function() {
//     //Ryu goes back to his ready position
//     $('.ryu-ready').show();
//     $('.ryu-throwing').hide();
//   });


//     $(document).keydown(function(e) {
//     if (e.keyCode == 88) {
//     	playCool();
//       $('.ryu-ready').hide();
//       $('.ryu-still').hide();
//       $('.ryu-cool').show();
//     }   
//   }).keyup(function(e) {
//     if (e.keyCode == 88) {
//       $('#cool-sound')[0].pause();
//       $('#cool-sound')[0].load();
//       $('.ryu-cool').hide();
//       $('.ryu-still').show();
//     }
//   });
// });