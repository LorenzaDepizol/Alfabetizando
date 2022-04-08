$("#valor1").on('input', function () {
    if ($(this).val().length >= 300) {
        alert('Ops! O limite máximo de 300 caracteres foi atingido');
    }
});

$("#valor2").on('input', function () {
    if ($(this).val().length >= 300) {
        alert('Ops! O limite máximo de 300 caracteres foi atingido');
    }
});


var valor1 = "";
var valor2 = ""
function capturar() {
    valor1 = document.getElementById('valor1').value;
    valor2 = document.getElementById('valor2').value;
    document.getElementById('valorDigitado').innerHTML = valor1;
    document.getElementById('valorDigitado1').innerHTML = valor2;

};

var doc = new jsPDF('l', 'mm', [205, 150]);
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#btGerarPDF').click(function () {
    var sei = document.getElementById('titulo').value


    doc.text($('#titulo').val(), 85, 10);

    doc.fromHTML($('#conteudo').html(), 12, 15, {
        'width': 185,
        'elementHandlers': specialElementHandlers

    });

    doc.fromHTML($('#conteudo1').html(), 12, 65, {
        'width': 185,
        'elementHandlers': specialElementHandlers

    });


    doc.save(sei + '.pdf');
});

