/*
* Day 2 - Functions Exercises
*   Declare and initialize functions
*   Use functions to perform operations
*/

const readline = require('readline');

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userData = 
    {
        firstName: "User",
        userName: "testUser", 
        password: "password123",
    }

var logInSuccess;

function validateLogIn(username,password){
    if (username == userData.userName && password === userData.password){
        return true;
    }

}

function askLogOut(){
    rl.question('Do you want to logout? (Y/N): ', (logoutFlag) => {
        if (logoutFlag === 'Y' || logoutFlag === 'y'){
            rl.close();
        } 
        else{
            askLogOut();
        }
    })
}

function askRetry(){
    rl.question('Do you want to try again? (Y/N): ', (tryAgainFlag) => {
        if (tryAgainFlag.toLowerCase() === 'y'){ // Return true regardless of case
            logIn();
        }  
        else{
            rl.close();
        }
    })    
}

function logIn (){
    let inputUserName;
    let inputPassword;

    rl.question('What is your username? ', (inputUserName) => {
        rl.question('What is your password? ', (inputPassword) => {
            logInSuccess = validateLogIn(inputUserName,inputPassword);
            if (logInSuccess){
                console.log("Login Successful! Welcome " + userData.firstName);
                askLogOut();
            }
            else {
                console.log("Login Failed! Incorrect username or password.");
                askRetry();
            }
        });
    });
    rl.on('close', () => {
        if (logInSuccess){
            console.log('Logged out successfully, goodbye!');
        }
        else{
            console.log('Closing without logging in, goodbye!');
        }   
        process.exit(0);
    });
}

logIn();