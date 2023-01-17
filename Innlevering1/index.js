import Bil from "./bil.js";

const paceRoof = 200;
const paceFloor = 0;

// liste over alle bilene
const cars = [
    { 
        car: new Bil("BS12092", "Mercedes", 2005),
        drive: document.getElementById("drive-mer"),
        break: document.getElementById("break-mer"),
        pace: document.getElementById("pace-mer")
    },
    { 
        car: new Bil("XS12042", "Volvo", 2018),
        drive: document.getElementById("drive-vol"),
        break: document.getElementById("break-vol"),
        pace: document.getElementById("pace-vol")
    },
    { 
        car: new Bil("EL25032", "Ferrari", 2021),
        drive: document.getElementById("drive-fer"),
        break: document.getElementById("break-fer"),
        pace: document.getElementById("pace-fer")
    }
]

for (const car of cars) {
    // knapp for å gasse opp
    car.drive.addEventListener("click", () => {
        car.car.hastighet < paceRoof && car.car.gass();
        car.pace.innerText = car.car.hastighet;
    });

    // knapp for å bremse
    car.break.addEventListener("click", () => {
        car.car.hastighet > paceFloor && car.car.brems();
        car.pace.innerText = car.car.hastighet;
    });
}