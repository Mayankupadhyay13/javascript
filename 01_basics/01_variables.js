const accountId = 1311;
const accountName = "Mayank";
let accountState = "jaipur";
let accountStateAddress; // shows undefined 
var accountCity = "kota";

//not prefer to use 'var' 
// becouse of have issue in ' block scople and functional scope '...

accountEmail = "mayank@gmail.com";

console.log(accountId, accountName);
console.table([accountId,accountName, accountState,accountCity,accountEmail,accountStateAddress]);

