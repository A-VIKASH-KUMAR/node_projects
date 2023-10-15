const os = require("os");
let userValues = os.userInfo();
console.log("app", userValues);

let currentOs = {
    name:os.type(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log("currentOs", currentOs);