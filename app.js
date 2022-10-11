const prompt = require('prompt-sync')({ sigint: true });


console.log("Welcome to the To-Do List Manager Application!\n");

console.log("Select an action: ");
console.log("[1] Create to-do item");
console.log("[2] Complete to-do item");
console.log("[3] Exit the application");
let choice = Number(prompt("> ")); //user can input their choice here

let items = [""]; //our list of to do items
let statusArray = [""] //our list of completion statuses (true/false)

while (choice !== 3) {
    if (choice === 1) {
        console.log("\nCreate a new item\n");
        //prompt to ask user for new item
        let answer = prompt("Please enter an item: ");
        items.push(answer);
        statusArray.push(false);
        // console.log(items);
        // console.log(statusArray);

        printList();
        selectChoice();
    } else if (choice === 2) {

        if (statusArray.length > 1) {
            console.log("\nSelect an item to complete\n");
            //prompt the user for item number to complete
            let indexChoice = Number(prompt("Enter a Number : "));
            /*
            Error Checking
            indexChoice cannot be:
            -a number greater than the size of the current list
            -0
            -a string
            */
            while (indexChoice > statusArray.length - 1 || indexChoice === 0 || isNaN(indexChoice)) {
                //if user selects number greater than array length - error
                console.log("Please choose a number that corresponds to an item on the list.");
                indexChoice = Number(prompt("Enter a Number : "));
            }

            if (statusArray[indexChoice] === false) {
                statusArray[indexChoice] = true;
            }

        } else {
            console.log("You have no items in your to-do list. ");
        }

        printList();
        selectChoice();
    } else {
        //if they pick anything that isn't 1 or 2
        console.log("\nPlease choose a number between 1 and 3\n");

        selectChoice();
    }
}

// Functions
function selectChoice() {
    console.log("Select an action: ");
    console.log("[1] Create to-do item");
    console.log("[2] Complete to-do item");
    console.log("[3] Exit the application");
    choice = Number(prompt("> "));
}

function printList() {
    console.log("\nCurrent To-Do list: ");
    let status = "";
    for (let i = 1; i < items.length; i++) {
        //if statement to check if status is true or false
        if (statusArray[i] === false) {
            status = "[incomplete] ";
        } else if (statusArray[i] === true) {
            status = "[complete] ";
        }
        console.log(i + ". " + status + items[i]);
    }
    console.log("");
}