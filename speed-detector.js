//my speed detector code

function speedDetector(speed){
    
    if (speed <= 70) {
        console.log("OK"); // print out
    }else if (speed > 70 && speed <= 130){
        let demeritPoint = (speed - 70) / 5;
        console.log(`points: ${demeritPoint}`);
    }else{
        console.log("License suspended"); //print out
    }
}

speedDetector(120);