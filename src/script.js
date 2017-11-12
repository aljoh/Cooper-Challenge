$(document).ready(function() {
  $('button').click(function(){
    var g = $('#gender').val();
    var a = $('#age').val();
    var d = $('#distance').val();
    var person = new Person({
      gender: g,
      age: a,
      distance: d
    });
    $('p').html(evaluate(person));
  });
});
