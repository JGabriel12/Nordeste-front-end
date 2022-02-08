$(document).ready(function () {
  $.get('http://127.0.0.1:8000/ShowMesa', function (mesa) {
    mesa.forEach(function (item) {
      $('#id_mesa').append(
        '<option value="' +
          item.id +
          '" selected="selected">Mesa ' +
          item.numero_mesa +
          '</option>'
      )
    })
  })
  $('#escolher').click(function () {
    $(location).prop('href', 'http://127.0.0.1:8000/ShowPrato')
  })
})

$('h1.titulo').hide()
$('h1.titulo').show('slow')
