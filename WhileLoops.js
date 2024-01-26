let userName;

while (userName ==="" || userName===null) {
  userName =window.prompt(`enter user name`);
}

console.log(`username: ${userName}`);
let userName2;

 do {
  userName2 =window.prompt(`enter user name`);
}while (userName2 ==="" || userName2===null)

console.log(`username2: ${userName2}`);

let loggedIn =true;
let userName3;
let password;

while (!loggedIn) {
  userName3 =window.prompt(`enter user name`);
  password =window.prompt(`enter your password`);

  if (userName3==="thunder" && password==="password") {
    loggedIn=true;
    console.log(`username3: ${userName3} you are logged in`);
  }
  else{
    
    console.log(`username3: wrong user or password`);
  }
}
let loggedIn2 =false;
let userName4;
let password2;

do {
  userName4 =window.prompt(`enter user name`);
  password =window.prompt(`enter your password`);

  if (userName4==="thunder" && password==="password") {
    loggedIn=true;
    console.log(`userName4: ${userName4} you are logged in`);
  }
  else{
    
    console.log(`userName4: wrong user or password`);
  }
}while (!loggedIn)