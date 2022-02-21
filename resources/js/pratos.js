$(document).ready(function () {
  // Listar pratos
  $.get('http://127.0.0.1:8000/ShowPrato', function (prato) {
    prato.forEach(function (item) {
      $('#id_prato').append(
        '<option value="' +
          item.id +
          '"> ' +
          item.nome_prato +
          ' |  ' +
          item.valor_prato +
          ' R$' +
          '</option>'
      )
    })
  })
  var string = location.href.split('=').pop()
  $('#id_mesa').val(string)

  var string2 = location.href.split('id_estadia=').pop()
  $('#id_estadia').val(string2)
})

// alert(string)

$('h1.titulo').hide()
$('h1.titulo').show('slow')
