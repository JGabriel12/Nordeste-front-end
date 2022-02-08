$(document).ready(function () {
  $.get('http://127.0.0.1:8000/ShowPrato', function (prato) {
    prato.forEach(function (item) {
      $('#id_prato').append(
        '<option value="' + item.id + '"> ' + item.nome_prato + '</option>'
      )
    })
  })
})

$('h1.titulo').hide()
$('h1.titulo').show('slow')
