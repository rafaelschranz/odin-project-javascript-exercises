const palindromes = function (input) {
    let allSpacesRemoved = input.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, '');
    const toLowerCase = allSpacesRemoved.toLowerCase();
    const reversed = toLowerCase.split('').reverse().join('');
    if (reversed === toLowerCase) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
