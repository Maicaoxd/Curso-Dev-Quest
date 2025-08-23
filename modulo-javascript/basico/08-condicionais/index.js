let nomeFilme = "Vingadores"

nomeFilme === "Vingadores" ? console.log("Avante") : console.log("É outro filme")

if (nomeFilme === "Vingadores") {
    console.log("Avante")
} else {
    console.log("É outro filme")
}

switch (nomeFilme) {
    case "Vingadores":
        console.log("Avante")
        break
    case "Xmen":
        console.log("Xmen")
        break
    default:
        console.log("Outro filme")
        break
}