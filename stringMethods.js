let userName ="Thunder";
userName = userName.trim();
userName = userName.toUpperCase();
var startsWith =userName.startsWith("T");
var includes =userName.includes("T");
console.log(`${userName}  username's lenght: ${userName.length} 
username starts with letter T:${startsWith} username includes letter T:${includes}`);
console.log(userName.length);
userName = userName.toLowerCase();
console.log(`${userName}  username's lenght: ${userName.length}`);
console.log(userName.length);
userName = userName.repeat(4);
console.log(`${userName}  username's lenght: ${userName.length}`);
console.log(userName.length);
let phoneNumber="938-708-0182";
console.log(phoneNumber);
phoneNumber=phoneNumber.replaceAll("-","");
console.log(phoneNumber);
phoneNumber=phoneNumber.padStart(15,"0");
console.log(phoneNumber);
phoneNumber="938-708-0182";
phoneNumber=phoneNumber.padEnd(15,"0");
console.log(phoneNumber);
let fullName="ThunJoshder";

let firstName=fullName.slice(0,3);
let lastName=fullName.slice(3,7);
let firstChar =fullName.slice(0,1);
let lasttChar =fullName.slice(-1);
console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lasttChar);
firstName =fullName.slice(0,fullName.indexOf("J"));
console.log(firstName);
lastName =fullName.slice(fullName.indexOf("J"));
console.log(lastName);
const email="sina.boxsss@gmail.com";
 userName=email.slice(0,email.indexOf("@"));
let extention=email.slice(email.indexOf("@"));
console.log(userName);
console.log(extention);

fullName = fullName.slice(0, fullName.indexOf("J")) + fullName.slice(fullName.lastIndexOf("h") + 1);
console.log(fullName);