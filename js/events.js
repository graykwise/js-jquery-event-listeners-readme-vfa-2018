//define functions here

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
});

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
    return;
  });
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty');
    return;
  });
}

function pressIt() {
  $('p').on('keydown', function() {
    alert('Hey!');
    return;
  });
}