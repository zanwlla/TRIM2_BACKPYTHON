const readline = require('readline');

const rl = readline.criandoInterface({
    input: process.stdin,
    output: process.stdout
});

rl.pergunte('Digite o dia (1-31): ', (dia) => {
    rl.pergunte('Digite o mês (1-12): ', (mes) => {
        dia = parseInt(dia, 10);
        mes = parseInt(mes, 10);

        function EstacaoAno(dia, mes) {
            if ([1, 2].includes(mes)) {
                return 'VERAO';
            } else if (mes === 3) {
                return dia < 21 ? 'VERAO' : 'OUTONO';
            } else if ([4, 5].includes(mes)) {
                return 'OUTONO';
            } else if (mes === 6) {
                return dia < 21 ? 'OUTONO' : 'INVERNO';
            } else if ([7, 8].includes(mes)) {
                return 'INVERNO';
            } else if (mes === 9) {
                return dia < 21 ? 'INVERNO' : 'PRIMAVERA';
            } else if ([10, 11].includes(mes)) {
                return 'PRIMAVERA';
            } else if (mes === 12) {
                return dia < 21 ? 'PRIMAVERA' : 'VERAO';
            }
        }

        if (1 <= dia && dia <= 31 && 1 <= mes && mes <= 12) {
            let estacao = EstacaoAno(dia, mes);
            console.log(`A estação para ${dia}/${mes} é ${estacao}.`);
        } else {
            console.log("Por favor, digite valores válidos para dia (1-31) e mês (1-12).");
        }
        
        rl.close();
    });
});
