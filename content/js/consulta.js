$(document).ready(function () {


    aparecer();
    consultaDados();
    atualizaEstoque();

    function aparecer() {
        $('.tgl').hide();
        $('#exibirMais').click(function () {
            $('.tgl').slideToggle();
        });
    }

    function consultaDados() {

        var cursos = service.consultaCurso();
        var turnos = service.consultaTurno();
        var descontos = service.consultaOfertas();


        $("#curso").text(cursos.name);

        for (var j = 0; j < turnos.length; j++) {
            var turno = turnos[j];
            $("#selectPrices").append($('<option>', {
                value: turno.id,
                text: cursos.deliveryMode + " - " + turno.name + " (" + descontos[j].discountPercentage + "%)"
            }));


        }

        atualizaDesconto();
    }


    function atualizaDesconto() {

        var descontos = service.consultaOfertas();

        var idTurno = $("#selectPrices").val();
        for (var i in descontos) {
            if (descontos[i].shiftId == idTurno) {
                $("#desconto").text(descontos[i].discountPercentage + "%");
                $("#desconto").val(descontos[i].discountPercentage);
                $("#valorDesconto").text("Por R$" + descontos[i].valueAfterDiscount);
                $("#valorDesconto").val(descontos[i].valueAfterDiscount);
            }

        }
    }

    function atualizaEstoque() {

        $("#selectPrices").change(function () {

            atualizaDesconto();

            var descontos = service.consultaOfertas();

            var idTurno = $("#selectPrices").val();
            for (var i in descontos) {
                if(descontos[i].shiftId == idTurno){
                    if (descontos[i].leftInStock <= 3) {
                        $("#estoque").css("display", "block");
                        $("#alerta-estoque").text("Restam apenas " + descontos[i].leftInStock + " bolsas");
                        $("#alerta-estoque").val(descontos[i].leftInStock);
                    }
                    else {
                        $("#estoque").css("display", "none");
                    }

                    break;
                }
                
            }
        });
    }



    $("#btn-comprar").click(function () {
        $.ajax({
            'url': '',
            'method': 'POST',
            'dataType': 'json',
            'contentType': 'application/json',
            'data': JSON.stringify({}),
            'success': alert("finish!")
        });
    });

})
