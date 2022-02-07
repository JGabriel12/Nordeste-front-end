$(document).ready(function () {
  $.get('http://127.0.0.1:8000/ShowMesa', function (mesa) {
    console.log(mesa)
  })
})

$('h1.titulo').hide()
$('h1.titulo').show('slow')
