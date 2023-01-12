class Bil {
    regnr: string;
    merke: string;
    årsmodell: number;
    hastighet: number = 0;

    constructor(regnr: string, merke: string, årsmodell: number) {
        this.regnr = regnr;
        this.merke = merke;
        this.årsmodell = årsmodell;
    }

    hentHastighet() { return this.hastighet; }

    gass() { this.hastighet += 10; }

    brems() { this.hastighet -= 10; }
}