export default class Bil {
    constructor(regnr, merke, årsmodell) {
        this.regnr = regnr;
        this.merke = merke;
        this.årsmodell = årsmodell;
        this.hastighet = 0;
    }

    hentHastighet() { return this.hastighet; }

    gass() { this.hastighet += 10; }

    brems() { this.hastighet -= 10; }
}
