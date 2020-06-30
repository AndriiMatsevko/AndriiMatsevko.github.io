

function openCity(evt, blockName) {
  var i;
  var x = document.getElementsByClassName("block");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeButton", "");
  }
  document.getElementById(blockName).style.display = "flex";
  evt.currentTarget.className += " activeButton";
}

$('.close-button').click(function () {
  $('.close-button').parent().css('display', 'none');
});

// function lightShock() {
//     $('#light-shock').css('display', 'block');
//     $('#light-shock').css('animation', 'lightshock .5s ease');
//     setTimeout(function() {
//         $('#light-shock').css('display', 'none');
//     }, 500);
// }


let loadingPage = document.getElementById('loading-block');
move();

function move() {
  var elem = document.getElementById("bar");
  var width = 1;
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      loadingPage.remove();
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}



function changeLanguage(URL) {

  $(function () {
    $.ajax({
      type: "GET",
      url: URL,
      dataType: "xml",
      success: function (xml) {
        for (var i = 1; i <= $('*', $(xml).find('strings')).length; i++) {
          $('#s' + i).html($(xml).find('s' + i).text());
        }

      }
    });
  });
}