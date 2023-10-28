document.getElementById("processButton").addEventListener("click", processText);

function processText() {
  const inputText = document.getElementById("inputText").value;
  const mode = document.querySelector('input[name="mode"]:checked').value;
  const shift = document.getElementById("shift").value;
  const outputText = document.getElementById("outputText");

  if (!shift || isNaN(shift)) {
    alert("Por favor, insira uma cifra válida.");
    return;
  }

  if (mode === "encrypt") {
    outputText.textContent = encryptText(inputText, shift);
  } else if (mode === "decrypt") {
    outputText.textContent = decryptText(inputText, shift);
  }
}

function encryptText(text, shift) {
  return text
    .split("")
    .map((char) => {
      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const position = alphabet.indexOf(isUpperCase ? char : char.toUpperCase()) ;
        const shiftedPosition = (position + parseInt(shift) ) % 26;
        const shiftedChar = isUpperCase
          ? alphabet[shiftedPosition]
          : alphabet[shiftedPosition].toLowerCase();
        return shiftedChar;
      }
      return char;
    })
    .join("");
}


function decryptText(text, shift) {
  return encryptText(text, (26 + parseInt(shift)) - parseInt(shift));
}
