/* You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the 
table corresponding to an input character and return it. 
| P or p - PrepBytes | 
| Z or z - Zenith |  
| E or e - Expert Coder |  
| D or d - Data Structure | 
Note: You have to complete getValue function. No need to take any input. */



const inputChar = 'E';

function getValue(character)
{
    switch(character.toLowerCase())
    {
        case `p`:
            return "PrepBytes"

        case  `z`:
            return "zenith";

        case `e`:
            return "export coder";

        case `d`:
            return "data structure";
        
    }
}

let result = getValue(inputChar);
console.log(`The value corresponding to '${inputChar}' is: ${result}`);