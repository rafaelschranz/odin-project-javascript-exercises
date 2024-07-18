const sumAll = function(a, b, range=[]) {
  
    if (a < 0 || b < 0) return 'ERROR';
    if (typeof a !== 'number' || typeof b !== 'number') return 'ERROR';

    for (let i = Math.min(a,b); i<= Math.max(a,b); i++) {
      range.push(i)
    }
    
    return range.reduce((a,b) => a+b)
    
  }

// Do not edit below this line
module.exports = sumAll;
