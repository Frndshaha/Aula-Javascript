export function somar(a, b) {
    return a + b;
}

export function calcularMediaEAprovacao(notas, mediaMinima)
{
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;

    if (media >= mediaMinima) 
    {
        return "Aprovado";
    } else 
    {
        return "Reprovado";
    }
}
