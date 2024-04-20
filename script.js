function encrypt() {
  var message = document.getElementById("message").value;
  var key = document.getElementById("keyword").value; // Perbaikan di sini
  document.getElementById("result").innerText = vigenereCipher(message, key, true);
 }
 
 function decrypt() {
  var message = document.getElementById("message").value;
  var key = document.getElementById("keyword").value; // Perbaikan di sini
  document.getElementById("result").innerText = vigenereCipher(message, key, false);
 }
 
 function vigenereCipher(message, key, encrypt) {
  var result = "";
  for (var i = 0; i < message.length; i++) {
     var charCode = message.charCodeAt(i);
     var keyCharCode = key.charCodeAt(i % key.length);
     if (charCode >= 65 && charCode <= 90) {
       var shift = encrypt ? keyCharCode - 65 : 26 - (keyCharCode - 65);
       result += String.fromCharCode(((charCode - 65 + shift + 26) % 26) + 65);
     } else if (charCode >= 97 && charCode <= 122) {
       var shift = encrypt ? keyCharCode - 97 : 26 - (keyCharCode - 97);
       result += String.fromCharCode(((charCode - 97 + shift + 26) % 26) + 97);
     } else {
       result += message.charAt(i);
     }
  }
  return result;
 }
 
