export default function showTimeLine(accounts) {
    /**
        Kari = index 0
        Lise = index 1
        Petter = index 2
    */

    const div = document.getElementById("timeLine");
    div.style.display = "block";
    const firstInput = document.getElementById("first-input");
    const secondInput = document.getElementById("second-input");
    const firstTakeout = document.getElementById("first-takeout");
    const secondTakeout = document.getElementById("second-takeout");
    const firstTransfer = document.getElementById("first-transfer");

    firstTakeout.innerText = takeout(accounts[0], 300);
    firstInput.innerText = input(accounts[1], 4000);
    secondInput.innerText= input(accounts[2], 3000);
    firstTransfer.innerText = transfer(accounts[0], accounts[2], 250);
    secondTakeout.innerText = takeout(accounts[0], 800);
}

const takeout = (account, x) => {
    const output = account.uttak(x);
    if (x <= output) return `${account.navn} tar ut ${output} kr, og har ${account.saldo} kr igjen.`;
    else return `${account.navn} prøver å ta ut ${x}, men har ikke nok penger på saldo.`;
}

const input = (account, x) => {
    account.innskudd(x);
    return `${account.navn} får satt inn ${x} kr, og har ${account.saldo} kr på konto.`;
}

const transfer = (from, to, x) => {
    const output = from.uttak(x);
    to.innskudd(x);
    return `${from.navn} overfører ${output} kr til ${to.navn}. ${from.navn} har ${from.saldo} kr igjen, og ${to.navn} har ${to.saldo} kr på konto.`;
}



