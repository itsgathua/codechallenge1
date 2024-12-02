function checkSpeed(){
    // Prompt for input from user
    let speed = prompt("Enter car's speed in km/h")
    
    // Check speed limit
    if (speed <= 70) {
        console.log("Ok");
    } else {
        // Calculate demeritPoints
        let excessSpeed = speed -70;
        let demeritPoints = excessSpeed / 5;
        if (demeritPoints <= 12){

            //Display Resuls
            console.log("Points: " + demeritPoints)
        }else {
            console.log("License suspended");
        }
    }
}
checkSpeed()