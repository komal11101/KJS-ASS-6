/* Your school has the following grading system based upon the marks (M) obtained by a student: 
 If M≤10, the grade will be E. 
 If 11≥M≤20, the grade will be D. 
 If 21≥M≤30, the grade will be C. 
 If 31≥M≤40, the grade will be B. 
 If 41≥M≤50, the grade will be A. 
Your friend will enter his marks out of 50, and your task is to print his grades using a switch statement. 
Note: You have to complete findGrades function. No need to take any input.*/

let m = 11;

switch (true) {
    case m < 10:
        console.log("E grade");
        break;
    case m < 20:
        console.log("D grade");
        break;
    case m < 30:
        console.log("C grade");
        break;
    case m < 40:
        console.log("B grade");
        break;
    case m < 50:
        console.log("A grade");
        break;
    default:
        console.log("Enter a valid number");
}
