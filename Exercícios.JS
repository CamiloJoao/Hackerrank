function staircase(n) {
    for (let i = 1; i <= n; i++) {
        const espacos = ' '.repeat(n - i);
        const simbolos = '#'.repeat(i);
        console.log(espacos + simbolos);
    }
}


function breakingRecords(scores) {
    let melhor = 0;
    let pior = 0;
    let melhorScore = scores[0];
    let piorScore = scores[0];
    const lengthOfData = scores.length;
    for(let i = 1; i < scores.length; i++) {
        if (scores[i] > melhorScore) {
            melhorScore = scores[i];
            best++;
            continue;
        }
        if (scores[i] < piorScore) {
            piorScore = scores[i]
            pior++;
            continue;
        }
    }
    return [melhor, pior];
}


function alternatingCharacters(s) {
    let deletados = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]){
            deletados++
        }
    }
    return deletados

}


function aVeryBigSum(ar) {
    let total = 0;
    for (let i=0; i < ar.length; i++) {
        total += ar[i];
    }
    return total;

}


function plusMinus(arr) {
    let positivo = 0;
    let negativo = 0;
    let zero = 0;
    for (let i=0; i < arr.length; i += 1) {
        if (arr[i] > 0){
            positivo += 1;
        } else if (arr[i] < 0) {
            negativo += 1;
        }
            else {
                zero += 1;
            }
    }
        console.log((positivo / arr.length).toFixed(6));
        console.log((negativo / arr.length).toFixed(6));
        console.log((zero / arr.length).toFixed(6));
}
