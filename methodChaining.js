let userName = window.prompt("Enter your username:");
// no method chaining
userName=userName.trim();
console.log(userName);
let letter =userName.charAt(0);
console.log(letter);
letter=letter.toUpperCase();
console.log(letter);
let extraChar =userName.slice(1);
console.log(extraChar);
extraChar=extraChar.toLowerCase();
console.log(extraChar);
userName=letter+extraChar;
console.log(userName);

// using method chaining
userName=userName.trim().charAt(0).toUpperCase()
+userName.trim().slice(1).toLowerCase();
console.log(`using method chaining: ${userName}`);