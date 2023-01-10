class Bil {
    constructor(regnr, merke, årsmodell) {
        this.regnr = regnr;
        this.merke = merke;
        this.årsmodell = årsmodell;
        this.hastighet = 0;
    }

    getHastighet() { return this.hastighet; }

    gass() { this.hastighet += 10; }

    brems() { this.hastighet -= 10; }


}


const mercedes = new Bil("BS12092", "Mercedes", 2005);
const volvo = new Bil("XS12042", "Volvo", 2018);
const ferrari = new Bil("EL25032", "Ferrari", 2021);

const driveMercedes = document.getElementById("drive-mer");
const breakMercedes = document.getElementById("break-mer");
const paceMer = document.getElementById("pace-mer");

driveMercedes.addEventListener("click", () => {
    mercedes.getHastighet() < 200 && mercedes.gass();
    paceMer.innerText = mercedes.getHastighet();
});

breakMercedes.addEventListener("click", () => {
    mercedes.getHastighet() > 0 && mercedes.brems();
    paceMer.innerText = mercedes.getHastighet();
})

const driveVolvo = document.getElementById("drive-vol");
const breakVolvo = document.getElementById("break-vol");
const paceVol = document.getElementById("pace-vol");

driveVolvo.addEventListener("click", () => {
    volvo.getHastighet() < 200 && volvo.gass();
    paceVol.innerText = volvo.getHastighet();
});

breakVolvo.addEventListener("click", () => {
    volvo.getHastighet() > 0 && volvo.brems();
    paceVol.innerText = volvo.getHastighet();
})

const driveFerrari = document.getElementById("drive-fer");
const breakFerrari = document.getElementById("break-fer");
const paceFer = document.getElementById("pace-fer");

driveFerrari.addEventListener("click", () => {
    ferrari.getHastighet() < 200 && ferrari.gass();
    paceFer.innerText = ferrari.getHastighet();
});

breakFerrari.addEventListener("click", () => {
    ferrari.getHastighet() > 0 && ferrari.brems();
    paceFer.innerText = ferrari.getHastighet();
})