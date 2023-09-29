// // 1ª Questão - Nível de Permissão
// // let Usuário = "Diretor"
// //     switch(Usuário) {
// //         case "Comum":
// //             console.log(`Permissão ${Usuário}`); // Usa crase pra usar o template string
// //             break;
// //         case "Gerente":
// //             console.log(`Permissão ${Usuário}`);
// //             break;
// //         case "Diretor":
// //             console.log(`Permissão ${Usuário}`);
// //             break;
// //         default:
// //             console.log('Permissão desconhecida');
// //     }

// // 2ª Questão - Calculadora
// // console.log("---Calculadora---")
// // let Num1 = 2
// // let Num2 = 3
// // let Operação = "Soma"
// //     switch(Operação) {
// //         case "Soma":
// //             console.log(`${Num1} + ${Num2} =`, Num1 + Num2);
// //             break;
// //         case "Subtração":
// //             console.log(`${Num1} - ${Num2} =`, Num1 - Num2);
// //             break;
// //         case "Multiplicação":
// //             console.log(`${Num1} * ${Num2} =`, Num1 * Num2);
// //             break;
// //         case "Divisão":
// //             console.log(`${Num1} / ${Num2} =`, Num1 / Num2);
// //             break;
// //         default:
// //             console.log("Operação Inválida")
// //     }

// // 3ª Questão - Maior Valor
// // let num1 = "6"
// // let num2 = "5"
// // if (num1 > num2) {
// //     console.log(`${num1}`);
// // } else {
// //     console.log(`${num2}`);
// // }

// // 4ª Questão
// // let kg = 80
// // let altura = 1.80
// // let indíce = kg / (altura * altura)
// // indíce = indíce.toFixed(2)
// // console.log(`Seu índice é: ${indíce}`)
// // if (indíce < 18.5) {
// //     console.log('Magreza')
// // } else if (indíce >= 18.5 && indíce <= 24.9) {
// //     console.log('Normal')
// // } else if (indíce >= 25.0 && indíce <= 29.9) {
// //     console.log('Sobrepeso')
// // } else if (indíce >= 30.0 && indíce <= 39.9) {
// //     console.log('Obesidade') 
// // } else {
// //     console.log('Obesidade Grave')
// // }

// // 5ª Questão
let num1 = "2"
let num2 = "1"
let num3 = "3"
if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(`${num3}`, `${num2}`, `${num1}`);
    } else {
        console.log(`${num2}`, `${num3}`, `${num1}`);
    }
} else if (num2 > num3) {
            if (num3 > num1) {
                console.log(`${num1}`, `${num3}`, `${num2}`);
            } else {
                console.log(`${num3}`, `${num1}`, `${num2}`);
            }
} else if (num1 > num2) {
    console.log(`${num2}`, `${num1}`, `${num3}`);
} else {
    console.log(`${num1}`, `${num2}`, `${num3}`);
}