function countCharacters() {
    const inputString = document.getElementById('inputString').value.toLowerCase();
    const vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of inputString) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char >= 'a' && char <= 'z') {
            consonantCount++;
        }
    }

    document.getElementById('result').innerHTML = `
        <p>Vowels: ${vowelCount}</p>
        <p>Consonants: ${consonantCount}</p>
    `;
}
