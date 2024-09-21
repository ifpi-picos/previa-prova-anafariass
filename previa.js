
export function maiorNumero(lista){
    if (lista.length === 0 || !Array.isArray(lista)){
        return null;
    }
    
    return Math.max(...lista)
}

export function verificarParOuImpar(numero){ 
    if (typeof numero !== 'number' || isNaN(numero)) {
        return null;  
    }
    if (numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }


}

export function contarCaracter(palavra,caractere){
    if (typeof palavra !== 'string') {
        return null; 
    }

    let contar = 0
    let indic = 0

    const palavraM = palavra.toLowerCase();
    const caractereMin = caractere.toLowerCase();

    while(indic < palavraM.length){
        if (palavraM[indic] === caractereMin){
            contar++
        }
        indic++
    }
    return contar
}

export function atualizarPropriedade(objeto, chave,novoValor){
    if (objeto[chave] !== undefined){
        objeto[chave] = novoValor;
        return objeto;
    }else {
        return null;
    }
} 