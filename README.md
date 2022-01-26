# Cipher & Decipher

### Table of contents
- [Project Description](#project-description)
- [Tech Used](#tech-used)
- [Features](#features)
- [Credits](#credits)
- [Connect with me](#connect-with-me)

## Project Description
- The idea:
    - My girlfriend and I were doing a murder mystery at home one evening that required us to use a Ceasar cipher to complete the game.
    - We started talking about how it would be cool if we could write secret messages to one another.
    - Since this was a lot of work to do it by hand, it gave me the idea to program one using numbers that were meaningful to us.

- The cipher codes each message by going forwards by 1 then backwards by 9 on every other letter.

- I wanted to keep the project ambiguous by having no direction and hidden features so only people who know how it works can use it.

## Tech Used
- HTML 5
- CSS 3
- JavaScript

## Features
- #### Ability to toggle between cipher and decipher
``` javascript
    function selectCipher() {
        if (cipherSelection.classList.contains('unselected')) {
            cipherSelection.classList.remove('unselected');
            cipherSelection.classList.add('selected');
            decipherSelection.classList.remove('selected');
            decipherSelection.classList.add('unselected');
        }
    }

    function selectDecipher() {
        if (decipherSelection.classList.contains('unselected')) {
            decipherSelection.classList.remove('unselected');
            decipherSelection.classList.add('selected');
            cipherSelection.classList.remove('selected');
            cipherSelection.classList.add('unselected');
        }
    }
```

-  #### Ciphers user input by going forwards in the alphabet by 1 then backwards by 9
``` javascript
    function cipher() {
        const userInput = cipherTextBox.value;
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
        cipherOutput.innerHTML = cipherText;
        setTimeout( () => {cipherOutput.innerHTML = ''}, 15000);
        clearInput();
    }
```

- #### Ciphered and deciphered text disappears after 15 seconds
``` javascript
    setTimeout( () => {cipherOutput.innerHTML = ''}, 15000);
    setTimeout( () => {decipherOutput.innerHTML = ''}, 15000);
```

- #### Ability to click outputs to copy directly to clipboard (hidden feature)
``` javascript
    function cipherCopy() {
        let range = document.createRange();
        
        range.selectNode(cipherOutput);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    }

    function decipherCopy() {
        let range = document.createRange();
        
        range.selectNode(decipherOutput);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    }
```

- #### Keyboard support for enter button
``` javascript
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && cipherSelection.classList.contains('selected')) {
            e.preventDefault();
            cipher();
        }

        if (e.key === 'Enter' && decipherSelection.classList.contains('selected')) {
            e.preventDefault();
            decipher();
        }
    });
```

## Connect with me
- Website - [josephwilde.me](http://www.josephwilde.me)
- LinkedIn - [Joseph Wilde](https://www.linkedin.com/in/joseph-michael1/)
- Twitter - [@jwilde19](https://twitter.com/jwilde19)