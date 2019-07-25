//Déclenchement du jquery
$(document).ready(function(){


//Fonction qui additionne 2 chiffres

$('#calcul').click(function(){

  //variable pour les chiffres

  var numberOne = $('#number1').val();
  var numberTwo = $('#number2').val();

  //variable pour additionner les 2 chiffres

  var result = parseInt(numberOne) + parseInt(numberTwo);

  //résultat de l'addition
  $('#display').text(result)

});
});
