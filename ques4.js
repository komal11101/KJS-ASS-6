/* You are given 33 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided 
integers. 
Note: You have to complete findSndSmallest function. No need to take any input. 
*/

function findSndSmallest() {
    const X = 10; 
    const Y = 20; 
    const Z = 30; 

    let secondSmallest;

    if (X < Y && X < Z) 
    {
        secondSmallest = Y < Z ? Y : Z;
    }
    else if (Y < X && Y < Z) 
    {
        secondSmallest = X < Z ? X : Z;
    }
    else {
        secondSmallest = X < Y ? X : Y;
    }

    console.log(`The second smallest integer among ${X}, ${Y}, and ${Z} is: ${secondSmallest}`);
}

findSndSmallest();
