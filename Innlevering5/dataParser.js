export default class DataParser{
    static async getData(file) {
        const res = await fetch(file);

        if (res.status !== 200) return;
        
        return await res.json();
    }

    static sort(data) { return data.sort((a, b) => a.height - b.height).reverse(); }

    static format(data) {
        const row = document.createElement("div");
        row.classList.add(
            "flex",
            "justify-between",
            "items-center"
        );

        const nameWrapper = document.createElement("div");
        const name = document.createElement("h1");
        name.innerText = data.name;
        name.classList.add(
            "text-lg",
            "font-semibold"
        );
        const county = document.createElement("p");
        county.innerText = data.county;
        county.classList.add(
            "text-gray-400",
            "font-medium"
        );
        nameWrapper.appendChild(name);
        nameWrapper.appendChild(county);

        const height = document.createElement("h1");
        height.innerText = `${this.thousandSeparator(data.height)} m`;
        height.classList.add(
            "text-lg",
            "font-semibold"
        );

        row.appendChild(nameWrapper);
        row.appendChild(height);

        return row;
    }

    static thousandSeparator(x) { return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " "); }
}