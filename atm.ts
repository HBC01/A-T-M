#! /usr/bin/env node
// ////          Atm Mashine

 import inquirer from "inquirer";
let myBalance = 10000; //dollar
let mypin = 1234;

  let account = await inquirer.prompt([
    {
      message: "Enter the pin code",
      type: "number",
      name: "pin",
    },
  ]);
  if (account.pin === mypin) {
    
    let myacc = await inquirer.prompt([
      {
        message: "Select the Option ",
        type: "list",
        name: "select",
        choices: ["Fast cash amount", "check balance","Or other amount"],
      },
    ]);
    if(myacc.select ==="Fast cash amount"){
         let fast =await inquirer.prompt([{
        message:"Fast cash amount",type:"list",name:"fast cash",choices:["1000","2000","5000","10000"]
      }]);myBalance-=fast["fast cash"]
      console.log(`you have withdraw amount${fast["fast cash"]} \nyour remaining balance is ${myBalance}`)};
   
      
     

      if (myacc.select ==="Or other amount")
      
        
        {
        let other=await inquirer.prompt([{message:"Enter the amount",type:"input",name:"other"}]);
        if(other.other >myBalance){console.log("Insufficent Balance");
        }
        else {myBalance -=other.other , console.log(`your remaining balance is ${myBalance}`)}
        
      
      
         
        
      }
      if (myacc.select === "check balance") {
        console.log("your remaning balance is" + "" + myBalance);
        }
    }
     else {
     console.log("Enter the correct password") }