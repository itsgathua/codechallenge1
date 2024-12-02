function getGrade(marks){
    if (marks <0 || marks >100)
        console.log("Error! Please input a valid mark between 0 to 100")
 else {
    if (marks > 79){
        return "A";
    } else if (marks >= 60 && marks <= 79){
        return "B";
    } else if (marks >= 50 && marks <= 59){
        return "C";
    } else if (marks >= 40 && marks <= 49){
        return "D";
    } else if (marks <= 40){
        return "E";
    }
}
}

// Example input
let studentGrade = 77; 
let grade = getGrade(studentGrade)
console.log(grade)