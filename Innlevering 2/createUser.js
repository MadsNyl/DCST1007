import { Konto, BarneKonto } from "./konto.js";
import showTimeLine from "./timeLine.js";

export default function appendUserInput() {
    const div = document.getElementById("create-user-box");
    div.style.display = "block";

    const user = document.getElementById("user");
    const btn = document.getElementById("createUser");

    let i = 0;
    const accounts = [];

    user.addEventListener("change", (e) => validateUserType(e, saldo));
    btn.addEventListener("click", (e) => { 
        accounts.push(createUser(e));
        i++; 

        if (i === 3) showTimeLine(accounts);
    });
}

const createUser = (e) => {
    const accountNumber = document.getElementById("customerNumber");
    const name = document.getElementById("name");
    const user = document.getElementById("user");
    const saldo = document.getElementById("saldo");

    let account;

    if (user.value === "adult") account = new Konto(accountNumber.value, name.value, parseInt(saldo.value));
    else account = new BarneKonto(accountNumber.value, name.value);

    appendUserInfo(account);
    accountNumber.value = "";
    name.value = "";
    saldo.value = 0;

    return account;
}

const validateUserType = (e, saldo) => {
    if (e.target.value == "child") {
        saldo.value = 200;
        saldo.disabled = true;
    } else {
        saldo.value = 0;
        saldo.disabled = false;
    }
}

const appendUserInfo = (account) => {
    const div = document.getElementById("user-info");
    const info = document.createElement("p");
    info.innerText = account.kontoInformasjon();
    div.appendChild(info);
}