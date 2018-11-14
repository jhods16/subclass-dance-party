$(document).ready(function() {
  window.dancers = [];

  $('.addButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var getDancerClass = $(this).attr('data-name');
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('.stage').height() * Math.random(),
      $('.stage').width() * Math.random(),
      Math.random() * 1000, getDancerClass
      
    );
    
    $('.stage').append(dancer.$node);

  });
  
});


$(document).ready(function() {
  $('.lineUpButton').click(function() {
    $('.dancer').removeAttr('style');
    $('.stage').css({
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    });

    $('.dancer').css('position', 'relative');
  });

  $('.groupUpButton').click(function() {
    $('.dancer').each(function(i, element) {
      if ($(element).hasClass('banana-dancer')) {
        $(element).css({
          'top': '50px',
          'left': i * 100 + 'px'
        });
      }
    });

    $('.dancer').each(function(i, element) {
      if ($(element).hasClass('pineapple-dancer')) {
        $(element).css({
          'top': '600px',
          'left': i * 50 + 'px' 
        });
      }
    });
  });
});


