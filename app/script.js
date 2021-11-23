const key = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let cipherText;

function cipher() {
    const userInput = document.getElementById('ciphertext').value;
    let msgArr = [];
    
    for (i = 0; i < userInput.length; i++) {
        if (i % 2 === 0) {
            let letter = userInput.charAt(i).toUpperCase();
            let findIndex = (key.indexOf(letter));

            if (findIndex < 0) {
                msgArr.push(' ');
                i = i--;
            } else {
                let codedIndex = ((findIndex - 1) + 26) % 26;
                let codedLetter = key[codedIndex];
                msgArr.push(codedLetter);
            }
        } else {
            letter = userInput.charAt(i).toUpperCase();
            findIndex = (key.indexOf(letter));

            if (findIndex < 0) {
                msgArr.push(' ');
                i = i--;
            } else {
                codedIndex = (findIndex + 9) % 26;
                codedLetter = key[codedIndex];
                msgArr.push(codedLetter);
            }
        }
    }

    cipherText = msgArr.join('');
    console.log(userInput.toUpperCase());
    document.getElementById('cipheroutput').innerHTML = cipherText;
}

function decipher() {
    const cipheredText = prompt('Deciper:');
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
                letter = userInput.charAt(i).toUp
                i = i--;
            } else {
                codedIndex = ((findIndex - 9) + 26) % 26;
                codedLetter = key[codedIndex];
                decipherArr.push(codedLetter);
            }
        }
    }

    let decipher = decipherArr.join('');
    console.log(decipher);
}


document.getElementById('cipherbtn').addEventListener('click', cipher);

// **Possibly add a copy button to easily copy the text**
// Add code for decipher portion