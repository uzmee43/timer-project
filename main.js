import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt([{
        name: "userinput",
        type: "number",
        message: "enter the amount of seconds please",
        validate: (input) => {
            if (isNaN(input)) {
                return "please enter a vailed  number";
            }
            else if (input > 60) {
                return "second must be in 60";
            }
            else {
                return true;
            }
        }
    }]);
let input = res.userinput;
function startTime(vel) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + vel);
    const intervelTime = new Date(intTime);
    setInterval((() => {
        const currTime = new Date();
        const timeDiff = differenceInSeconds(intervelTime, currTime);
        if (timeDiff <= 0) {
            console.log("your timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}: ${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
