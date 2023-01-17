export default class Bil {
    constructor(regnr, merke, årsmodell) {
        this._regnr = regnr;
        this._merke = merke;
        this._årsmodell = årsmodell;
        this._hastighet = 0;
    }

    get hastighet() { return this._hastighet; }

    gass() { this._hastighet += 10; }

    brems() { this._hastighet -= 10; }
}
