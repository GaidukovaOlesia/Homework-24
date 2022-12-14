
let marvelHeroes = [
    {
        name: "Thor"
    },
    {
        name: "Spider Man"
    }
];

let dcHeroes = [
    {
        name: "Superman"
    },
    {
        name: "Batman"
    },
    {
        name: "Deadpool"
    }
];
Array.prototype.heroesRender = (function(folder) {
    const trs = this
        .map(function(heroes){
            return `
                <tr>
                    <td>${heroes.name}</td>
                    <td>
                        <img src="images/${folder}/${heroes.name.replaceAll(" ", "").toLowerCase()}.svg" alt = "${heroes.name}" width="50">
                    </td>
                </tr>
            `
        })
        .join("");
    document.write(`
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Icon</th>
                </tr>
            </thead>
            <tbody>${trs}</tbody>
        </table> 
    `)
});
marvelHeroes.heroesRender("marvel");
dcHeroes.heroesRender("dc");