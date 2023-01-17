class Konto {

    constructor(kundenr, navn, saldo) {
        this._kundenr = kundenr;
        this._navn = navn;
        this._saldo = saldo;
    }

    get navn() { return this._navn; }

    get saldo() { return this._saldo; }

    uttak(x) {
        if (x > this._saldo) {
            this._saldo = 0;
            return this._saldo;
        }
        this._saldo -= x;
        return x;
    }

    innskudd(x) { this._saldo += x; }

    kontoInformasjon() { return `${this._navn} med kundenummer ${this._kundenr} har ${this._saldo} kroner på konto.`; }
}

class BarneKonto extends Konto {
    constructor(kundenr, navn) {
        super(kundenr, navn);
        this._saldo = 200;
    }
}


export {
    Konto,
    BarneKonto
}