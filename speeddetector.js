function checkSpeed(){
    let speed = prompt("Enter car's speed in km/h")
    if (speed <= 70) {
        console.log("Ok");
    } else {
        let excessSpeed = speed -70;
        let demeritPoints = excessSpeed / 5;
        if (demeritPoints <= 12){
            console.log("Points: " + demeritPoints)
        }else {
            console.log("License suspended");
        }
    }
}
