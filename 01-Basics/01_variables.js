const accountId = 123654;
var accountEmail = "abc@gmail.com";
let accountPassword = "12365489";

accountCity = "Mumbai"; // will work but is not adviced to use like this

let accountState; // only initialized ,so bydefault it has undefined until we assign a value to a variable.

// accountId=2;  Not Allowed to reasign const variable
accountEmail = "hc@gmail.com";
accountCity = "Pune";

console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]); // It represent Data in table form ,With index like array
/* PREFER NOT TO USE  var  because of issue inthe Block scope and functional Scope*/
