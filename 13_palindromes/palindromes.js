const palindromes = function (phrase) {
    const noPunctuationPhrase = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g,'').toLowerCase();
    const reversedNoPunctuationPhrase = noPunctuationPhrase.split("").reverse().join("").toLowerCase();
    return reversedNoPunctuationPhrase == noPunctuationPhrase;
};

// Do not edit below this line
module.exports = palindromes;
