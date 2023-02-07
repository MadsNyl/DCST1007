import DataParser from "./dataParser.js";

const fillTable = async () => {
    const table = document.getElementById("table");
    const FILE = "./mountains.json";
    const data = await DataParser.getData(FILE);

    const sortedData = DataParser.sort(data.mountains);

    for (const info of sortedData) {
        let row = DataParser.format(info);
        table.appendChild(row);
    }
}

fillTable();