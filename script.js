const URL = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest();

xhr.open("GET", URL)

xhr.send();

xhr.onload = () => {
    const respon = JSON.parse(xhr.response);

    //a.Get all the countries from Asia continent /region using Filter function

    const asiacontinent = respon.filter((contries) => contries.region === "Asia")
    console.log(asiacontinent.map(contries => contries.name.common))

    //b.Get all the countries with a population of less than 2 lakhs using Filter function
    
    const population = respon.filter((country) => country.population < 200000)
    console.log(population.map((country)=> country.name.common))

    //c.Print the following details name, capital, flag, using forEach function

    respon.forEach(country => {
        console.log("Name:",country.name.common)
        console.log("Capital:",country.capital)
        console.log("Flag:",country.flags.png)
    })

    //d.Print the total population of countries using reduce function

    const totalPopulation = respon.reduce((accum, countries) => accum + countries.population, 0);
    console.log("total poulation of countries:",totalPopulation)

    //e.Print the country that uses US dollars as currency.

    const usdollar = respon.find((country) => country.currencies.hasOwnProperty("USD"))
    console.log(usdollar.name.common)

}

