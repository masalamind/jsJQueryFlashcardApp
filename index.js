

// Store Titles and Definition inside dictionary

const glossary ={
    "javascript-text": "JavaScript is the programming language of the Web.",
    "variables-text": "Variables are containers for storing data (storing data values).",
    "variableNaming-text": ["Variable names cannot contain spaces", "Variable names must begin with a letter, an underscore _ or a dollar sign $", "variable names can only contain letters,numbers,underscore, or dollar signs", "variable names are case-sensitive", "Certain words may not be used as variable names, because they have other meanings in javaScript."],
    "function-text": "A JavaScript function is a block of code designed to perform a particular task.",
    "strings-text": "A JavaScript string stores a series of characters like 'John Doe'.",
    "methods-text": "JavaScript methods are actions that can be performed on objects.",
    "arguments-text": "Function arguments are the real values passed to (and received by) the function.",
    "parameters-text": "Function parameters are the names listed in the function definition.",
    "return-text": "The return statement ends function execution and specifies a value to be returned to the function caller.",
    "chainingMethods-text": "also known as Cascading, means repeatedly calling one method after another on an object, in one continuous line of code.",
    "booleans-text": "A JavaScript Boolean represents one of two values: true or false.",
    "undefined-text": "A variable that has not been assigned a value is of type undefined . A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned .",
    "NaN-text": " NaN stands for Not a Number. It represents a value which is not a valid number. It can be used to check whether a number entered is a valid number or not a number. ",
    "escape-text": "We can use the backslash ( \ ) escape character to prevent JavaScript from interpreting a quote as the end of the string. ",
    "alert-text": "The alert() method displays an alert box with a message and an OK button.The alert() method is used when you want information to come through to the user.",
    "comments-text": "Comments can be used to explain JavaScript code, and to make it more readable.JavaScript comments can also be used to prevent execution, when testing alternative code.",
    "operators-text": "a special symbol used to perform operations on operands (values and variables). "
};




// Show definition

$(".card-title").click(function(){     
    
    let termId = $(this).attr("id");
    let termDefinitionId = termId + "-text";

    // let target = '#' + termDefinitionId;
    // The way to use a variable in a selector is by concatenating it as shown below

    
    $('#' + termDefinitionId).text(glossary[termDefinitionId]);    
    $('#' + termDefinitionId).show(1000); 


})


// Hide definition

$(".card-text").click(function(){     
    
    let termId = $(this).attr("id");

    $('#' + termId).hide(1000);   
   

})


