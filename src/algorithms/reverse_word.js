function reverseWord(sentance) {
    let reveresedSentance = '';
    let _reveresedSentance = '';
    _reveresedSentance = sentance.split(' ');
    _reveresedSentance.forEach((word, index) => {
        _reveresedSentance[index] = word.split('').reverse().join('');
    }
    );
    return reveresedSentance;
}

console.log(reverseWord('Hello World'));