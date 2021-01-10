const myTable = document.getElementById('myTable');
const searchBar = document.getElementById('searchBar');
const tableHead = document.getElementById('tableHead')

let myCountries = countries.map((country) => ({
    name: country.name,
    capital: country.capital,
    population: country.population,
    region: country.region,
    currencie: country.currencies[0].code,
    area: country.area,
}));

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCountries = myCountries.filter((country) => {
        return (
            country.name.toLowerCase().includes(searchString) ||
            country.capital.toLowerCase().includes(searchString) ||
            country.region.toLowerCase().includes(searchString)
        );
    });
    displayCountries(filteredCountries);
});


$('th').on('click', function () {
    let column = $(this).data('column')
    let order = $(this).data('order')   


        if (order == 'desc'){
        $(this).data('order', 'asc')
            myCountries = myCountries.sort ((a,b) => a[column] > b[column] ? 1 : -1)
        
        }else {
            $(this).data('order', 'desc')
            myCountries = myCountries.sort ((a,b) => a[column] < b[column] ? 1 : -1)
        }
        displayCountries(myCountries)
})

function displayCountries(data) {
    let myTable = document.getElementById('myTable');

    myTable.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        const row = `<tr>                  
                            <td>${data[i].name}</td>
							<td>${data[i].capital}</td>
                            <td>${data[i].population}</td>
							<td>${data[i].region}</td>
							<td>${data[i].currencie}</td>
                            <td>${data[i].area}</td>
					  </tr>`
        myTable.innerHTML += row
    }
}
displayCountries(myCountries);
