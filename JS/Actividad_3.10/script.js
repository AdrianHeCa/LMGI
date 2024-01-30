$(document).ready(function() {
    // Autocompletamientación del campo destino
    var destinos = []
    $('.vuelo').each(function() {
        var destino = $(this).attr('dato-destino')
        destinos.push(destino)
    })
    destinos = destinos.filter(function(value, index, self) {
        return self.indexOf(value) === index
    })
    $("#destino").autocomplete({
        source: destinos
    })

    // Fecha mínima en los filtros
    var fechaActual = new Date().toISOString().split('T')[0]
    $("#rango-fecha-inicio").attr('min', fechaActual)
    $("#rango-fecha-final").attr('min', fechaActual)

    // Mostrar valor seleccionado en el presupuesto
    $(document).on('input', '#presupuesto', function() {
        $('#precio-max').html( $(this).val() + '€' )
    })

    // Filtrar vuelos al hacer clic en el botón buscar
    $("#buscar").click(function() {
        var destinoSeleccionado = $("#destino").val()
        var fechaInicio = $("#rango-fecha-inicio").val()
        var precioMaximo = $("#presupuesto").val()
        
        $('.vuelo').hide()

        var preciosMostrados = []
        $('.vuelo').each(function() {
            var vueloDestino = $(this).attr('dato-destino')
            var vueloFecha = $(this).attr('dato-fecha')
            var vueloPrecio = parseInt($(this).attr('dato-precio'))

            if (vueloDestino === destinoSeleccionado && vueloFecha == fechaInicio && vueloPrecio <= precioMaximo) {
                $(this).show()
                preciosMostrados.push(vueloPrecio)
            } else if (destinoSeleccionado == '' && vueloFecha == fechaInicio && vueloPrecio <= precioMaximo) {
                $(this).show()
                preciosMostrados.push(vueloPrecio)
            } else if (vueloDestino === destinoSeleccionado && fechaInicio == ''  && vueloPrecio <= precioMaximo) {
                $(this).show()
                preciosMostrados.push(vueloPrecio)
            } else if (destinoSeleccionado == '' && fechaInicio == '' && vueloPrecio <= precioMaximo) {
                $(this).show()
                preciosMostrados.push(vueloPrecio)
            }
        })

        if (preciosMostrados.length > 0) {
            var precioMinimo = Math.min.apply(null, preciosMostrados)
            $("#presupuesto").attr('min', precioMinimo)
            $('#precio-min').html(precioMinimo + '€')
        }
    })
})