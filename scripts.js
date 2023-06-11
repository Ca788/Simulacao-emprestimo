// Adicionar evento de escuta de teclado ao campo de valor
const valorSolicitadoInput = document.getElementById('valorSolicitado');
valorSolicitadoInput.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) { // Verificar se a tecla pressionada é Enter
        event.preventDefault(); // Impedir o comportamento padrão do Enter (enviar formulário)
        simular(); // Chamar a função simular()
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('valorSolicitado');
    new AutoNumeric(input, {
        digitGroupSeparator: '.',
        decimalCharacter: ',',
        decimalPlaces: 0,
        unformatOnSubmit: true,
        showWarnings: false
    });
});

function simular() {
    const juros = 16.4;
    const valorSolicitado = parseFloat(document.getElementById('valorSolicitado').value.replace(/[,\.]/g, ''));
    const parcelaSolicitada = parseFloat(document.getElementById('parcelaSolicitada').value);

    const solicitado = document.getElementById('displayValorSolicitado');
    const parcelamento = document.getElementById('displayParcelaSolicitada');
    const valorParcela = document.getElementById('valorParcela');

    const rolammento = document.getElementById('rolamento');

    const acrescimo = (valorSolicitado * juros) / 100;
    const resultado = valorSolicitado + acrescimo;
    const parcelaMensal = resultado / parcelaSolicitada;

    if (isNaN(valorSolicitado) || valorSolicitado < 100 || valorSolicitado > 100000000) {
        window.alert('O valor disponível é entre 100 e 100.000,00');
        rolammento.href = "";
    } else {
        rolammento.href = "#containerResultado";

        solicitado.type = "text";
        parcelamento.type = "text";
        valorParcela.type = "text";

        solicitado.value = "R$ " + valorSolicitado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        parcelamento.value = parcelaSolicitada + "x";
        valorParcela.value = "R$ " + parcelaMensal.toFixed(2);

        // Obtém o campo do WhatsApp
        const whatsappLink = document.getElementById('whatsappLink');

        // Adiciona o número de telefone e o texto da mensagem desejada
        const numeroTelefone = 'seunumerodetelefone';
        const mensagem = 'Olá, gostaria de obter mais informações sobre o empréstimo.';

        // Cria o link do WhatsApp
        const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`;

        // Define o link do WhatsApp no atributo "href"
        whatsappLink.href = linkWhatsapp;

        // Exibe o campo do WhatsApp
        document.querySelector('.whatsapp-container').style.display = 'block';
    }
}