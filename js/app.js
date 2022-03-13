$(document).ready(function() {

    //What we do Section

    //Design

    $(document).ready(function(){
        $("#design-img").click(function(){
            $("#design-img").slideDown('1500').hide('1000');
            $("#design").show('1500');
        });

        $("#design").click(function(){
            $("#design").slideUp('1500');
            $("#design-img").slideDown('1500')
        });
    });

    // Development Section

    $("#development-img").click(function(){
        $("#development-img").slideDown('1500').hide('1000');
        $("#development").show('1500');
    });

    $("#development").click(function(){
        $("#development").slideUp('1500');
        $("#development-img").slideDown('1500');
    });
});

// Product Management

$(document).ready(function() {
    $("#product-img").click(function(){
        $("#product-img").slideDown('1500').hide('1000');
        $("#product").show('1500');
    })

    $("#product").click(function(){
        $("#product").slideUp('1500');
        $("#product-img").slideDown('1500')
    });
});

//Portfolio Section

//Blacklisted

$(document).ready(function () {
    $('#image1')
      .mouseover(function () {
        $('#shadow1').show();
      })
      .mouseout(function () {
        $('#shadow1').hide();
      });
  });

  // Ontario Security Manager

  $(document).ready(function () {
    $('#image2')
      .mouseover(function () {
        $('#shadow2').show();
      })
      .mouseout(function () {
        $('#shadow2').hide();
      });
  });

  //Pyramids

  $(document).ready(function () {
    $('#image3')
      .mouseover(function () {
        $('#shadow3').show();
      })
      .mouseout(function () {
        $('#shadow3').hide();
      });
  });

  // Cyber

  $(document).ready(function () {
    $('#image4')
      .mouseover(function () {
        $('#shadow4').show();
      })
      .mouseout(function () {
        $('#shadow4').hide();
      });
  });

  // Elexa

  $(document).ready(function () {
    $('#image5')
      .mouseover(function () {
        $('#shadow5').show();
      })
      .mouseout(function () {
        $('#shadow5').hide();
      });
  });

  // Virtual elements

  $(document).ready(function () {
    $('#image6')
      .mouseover(function () {
        $('#shadow6').show();
      })
      .mouseout(function () {
        $('#shadow6').hide();
      });
  });

  // Burned

  $(document).ready(function () {
    $('#image7')
      .mouseover(function () {
        $('#shadow7').show();
      })
      .mouseout(function () {
        $('#shadow7').hide();
      });
  });

  // Giraffe

  $(document).ready(function () {
    $('#image8')
      .mouseover(function () {
        $('#shadow8').show();
      })
      .mouseout(function () {
        $('#shadow8').hide();
      });
  });


  // Mail Chimp alert message Functionality

  $(document).ready(function () {
      $("#main-form").submit(function (event) {
        let name = $('input#MERGE1').val();
        let email = $('input#MERGE0').val();
        let alertMessage = $('textarea#comment').val();
        if ($('input#MERGE1').val() && $('input#MERGE0').val()) {
            alert('Hello' + ' ' + name + ', we have received your email. We will be in touch with you soon.');
        } else {
            alert('Invalid. Please enter your name and email address!')
        }
      });
  });