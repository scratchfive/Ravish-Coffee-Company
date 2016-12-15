$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('smaller');
    $( ".nav-link" ).css({
      fontSize: "12pt",
    });
  } else {
    $('nav').removeClass('smaller');
    $( ".nav-link" ).css({
      fontSize: "14pt",
    });
  }
});


$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}

$(document).ready(function(){
    $("#learn-more").click(function(){
        $("#box-5").slideToggle("slow");
        $('#box-4').scrollView();
    });

    $("#light-nic").click(function(){
        $("#light-nic-onboard").show(800);
    });

    $("#sub").click(function(){
        $("#light-nic-onboard").hide(500);
        $("#light-nic-onboard-2").show(500);
    });

    $("#peruvian").click(function(){
        $("#peruvian-onboard").show(800);
    });

    $("#sub2").click(function(){
        $("#peruvian-onboard").hide(500);
        $("#peruvian-onboard-2").show(500);
    });

    $("#sumatran").click(function(){
        $("#sumatran-onboard").show(800);
    });

    $("#sub3").click(function(){
        $("#sumatran-onboard").hide(500);
        $("#sumatran-onboard-2").show(500);
    });

    $("#mexican").click(function(){
        $("#mexican-onboard").show(800);
    });

    $("#sub4").click(function(){
        $("#mexican-onboard").hide(500);
        $("#mexican-onboard-2").show(500);
    });

    $("#bolivian").click(function(){
        $("#bolivian-onboard").show(800);
    });

    $("#sub5").click(function(){
        $("#bolivian-onboard").hide(500);
        $("#bolivian-onboard-2").show(500);
    });

    $("#dark-nic").click(function(){
        $("#dark-nic-onboard").show(800);
    });

    $("#sub6").click(function(){
        $("#dark-nic-onboard").hide(500);
        $("#dark-nic-onboard-2").show(500);
    });



    $("#hover-cart").hover(function(){
        $("#hover-cart-overlay").show(550);
    }, function(){
        $('#hover-cart-overlay').hide(400);
    });
});


$(document).mouseup(function (e)
{
    var container = $(".onboard");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide(500);
    }
});

$(document).mouseup(function (e)
{
    var container = $(".onboard-2");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide(500);
    }
});

function maxLength(el) {
    if (!('maxLength' in el)) {
        var max = el.attributes.maxLength.value;
        el.onkeypress = function () {
            if (this.value.length >= max) return false;
        };
    }
}

maxLength(document.getElementById("questions"));
