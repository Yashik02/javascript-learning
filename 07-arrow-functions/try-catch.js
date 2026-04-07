//errors cause our file to crash and not work
//which is why try and catch is used for error handling

//try keyword lets us make a block of code to be tested for errors
//catch keyword is used to run a block of code if an error occurs in the try block

try {
    console.log(a); //! error code
} catch {
    console.log("an error was caught");
}