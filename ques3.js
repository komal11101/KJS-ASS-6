/*Take three numbers and print the largest number among them if all of three are same print −1−1. 
Note: You have to complete Max_out_of_three. No need to take any input.
*/

let num1 = 2;
let num2 = 5;
let num3 = 4;

function max_out_of_three()
{
    if(num1 == num2 && num2 == num3 )
    {
        console.log("-1");
    }

    let maxNumber;

    if(num1 >= num2 && num1 >= num3)
        {
            maxNumber = num1;
        }
    else if(num2 >= num3 && num2 >= num1)
    {
        maxNumber = num2;
    }
    else{
        maxNumber = num3;
    }

    console.log(`The largest number among ${num1}, ${num2}, and ${num3} is: ${maxNumber}`);  

}

max_out_of_three();