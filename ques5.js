/* Write a program takes takes three angles and checks whether the triangle is acute or obtuse. 
Note: You have to complete Triangle_Check. No need to take any input 
*/

function Triangle_Check() {
    const angle1 = 60; 
    const angle2 = 60; 
    const angle3 = 60; 

    const sumOfAngles = angle1 + angle2 + angle3;

    if (sumOfAngles === 180) {
        if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
            console.log("The triangle is acute.");
        } else if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
            console.log("The triangle is obtuse.");
        } else {
            console.log("The triangle is a right-angled triangle.");
        }
    } else {
        console.log("Invalid angles. The sum of angles in a triangle must be 180 degrees.");
    }
}

Triangle_Check();
