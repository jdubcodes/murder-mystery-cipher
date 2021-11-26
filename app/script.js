const key = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let cipherText = '';
let decipherText = '';

function cipher() {
    const userInput = document.getElementById('ciphertext').value;
    let cipherArr = [];
    
    for (i = 0; i < userInput.length; i++) {
        if (i % 2 === 0) {
            let letter = userInput.charAt(i).toUpperCase();
            let findIndex = (key.indexOf(letter));

            if (findIndex < 0) {
                cipherArr.push(' ');
                i = i--;
            } else {
                let codedIndex = ((findIndex - 1) + 26) % 26;
                let codedLetter = key[codedIndex];
                cipherArr.push(codedLetter);
            }
        } else {
            letter = userInput.charAt(i).toUpperCase();
            findIndex = (key.indexOf(letter));

            if (findIndex < 0) {
                cipherArr.push(' ');
                i = i--;
            } else {
                codedIndex = (findIndex + 9) % 26;
                codedLetter = key[codedIndex];
                cipherArr.push(codedLetter);
            }
        }
    }
    cipherText = cipherArr.join('');
    document.getElementById('cipheroutput').innerHTML = cipherText;
}

function decipher() {
    const cipheredText = document.getElementById('deciphertext').value;
    let decipherArr = [];

    for (i = 0; i < cipheredText.length; i++) {
        if (i % 2 === 0) {
            let letter = cipheredText.charAt(i).toUpperCase();
            let findIndex = (key.indexOf(letter));

            if (findIndex < 0) {
                decipherArr.push(' ');
                i = i--;
            } else {
                let codedIndex = (findIndex + 1) % 26;
                let codedLetter = key[codedIndex];
                decipherArr.push(codedLetter);
            }
        } else {
            letter = cipheredText.charAt(i).toUpperCase();
            findIndex = (key.indexOf(letter));

            if (findIndex < 0) {
                decipherArr.push(' ');
                i = i--;
            } else {
                codedIndex = ((findIndex - 9) + 26) % 26;
                codedLetter = key[codedIndex];
                decipherArr.push(codedLetter);
            }
        }
    }
    decipherText = decipherArr.join('');
    document.getElementById('decipheroutput').innerHTML = decipherText;
}

document.getElementById('cipherbtn').addEventListener('click', cipher);
document.getElementById('decipherbtn').addEventListener('click', decipher);