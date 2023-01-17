import { Konto, BarneKonto } from "./konto.js";
import appendUserInput from "./createUser.js";

const addUserBtn = document.getElementById("create-user");
addUserBtn.addEventListener("click", appendUserInput);

