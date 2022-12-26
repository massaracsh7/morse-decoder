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
  let str = expr;
  let changeStr = '';
  for (i = 0; i < str.length; i = i + 10) {
    let letter = str.substr(i, 10);
    if (letter == '**********') {
      changeStr = changeStr + ' ';
    } else {
    let n = letter.indexOf('1');
    let letter2 = letter.slice(n);
    let letter3 = letter2.replace(/11/g, "-");
    let letter4 = letter3.replace(/10/g, ".");
    changeStr = changeStr + MORSE_TABLE[letter4];
    }
  }
  return changeStr;
}


module.exports = {
    decode
}

