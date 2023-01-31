const testTall = (tall) => {
    new Promise((resolve, reject) => {
        if (tall > 10) resolve("Tallet er større enn 10.");
        else if (tall < 10) resolve("Tallet er mindre enn 10.");
        else reject(new Error("Tallet er 10."));
    });
}

const lagStoreBokstaver = (ordliste) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < ordliste.length; i++) {
            if (typeof ordliste[i] !== "string") reject(new Error("Listen må kun inneholde strenger."));
            else ordliste[i] = ordliste[i].toUpperCase();
        }
        resolve(ordliste);
    });
}

const sorterOrdliste = (ordliste) => {
    return new Promise((resolve, reject) => {
        !ordliste.length && reject(new Error("Listen er tom."));
        resolve(ordliste.sort());
    });
}

const prosesserOrdliste = async (ordliste) => {
    try {
        const nyListe = await lagStoreBokstaver(ordliste);
        return await sorterOrdliste(nyListe);
    } catch (error) {
        console.log(error);
    }
}
