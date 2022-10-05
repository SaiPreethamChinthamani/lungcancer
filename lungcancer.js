$(document).ready(function(){ 
    // getting selected values in console
    $('#submit').click(function(){ 
      console.log($('#gender :selected').text());
      console.log($('#age').val());
      console.log($('#smoking :selected').text());
      console.log($('#yellow_fingers :selected').text());
      console.log($('#anxiety :selected').text());
      console.log($('#peer_pressure :selected').text());
      console.log($('#chronic_disease :selected').text());
      console.log($('#fatigue :selected').text());
      console.log($('#allergy :selected').text());
      console.log($('#wheezing :selected').text());
      console.log($('#alcohol_consuming :selected').text());
      console.log($('#coughing :selected').text());
      console.log($('#shortness_of_breath :selected').text());
      console.log($('#swallowing_difficulty :selected').text());
      console.log($('#chest_pain :selected').text());

    //   on click, moving to the other web page(take it out for comments and check)
    //   document.location.href = './results.html';
    });

    // setting attribute values for age
    $("input").attr({
        "max" : 100,        // substitute your own
        "min" : 1          // values (or variables) here
     });
  });