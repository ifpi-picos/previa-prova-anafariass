
export function maiorNumero(lista){
    if (lista.length === 0){
        return [];
    }
    return Math.max(lista)
}

export function verificarParOuImpar(numero){ 
    if (typeof numero !== 'number' || isNaN(numero)) {
        return null;  
    }
    if (numero % 2 === 0) {
        return 'par';
    } else {
        return 'impar';
    }


}

export function contarCaracter(palavra,caractere){
    let contar = 0
    let indic = 0
    while(indic < palavra.length){
        if (palavra[indic] === caractere){
            contar++
        }
        indic++
    return contar
    }
}

export function atualizarPropriedade(){

}