const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const obj = {
        '10': '.',
        '11': '-',
    }
    let arr = expr.split('');

    let result = [];

    function getLetter(str) {
        if (str[0] === '*') {
            return ' ';
        } else {
          let re = /11|10/g;
        return str.match(re).map(item => obj[item]).join('');
        }
        
    }


    while(arr.length) {
        let substring = arr.splice(0, 10).join('');
        console.log(substring)
        result.push(getLetter(substring));
    
    }

    return result.map(item =>MORSE_TABLE[item]).join(',').replace(/,,/g,' ').replace(/,/g,'')
}

module.exports = {
    decode
}