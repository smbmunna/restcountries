function loadData() {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayData(data))
}
//.then(data=>console.log(data[0].name))

function displayData(data) {

    for (let i = 0; i < data.length; i++) {
        const name = data[i].name;
        const capital = data[i].capital;

        //creating new div
        const newDiv = document.createElement('div');
        newDiv.id = 'newDiv';
        //create a h1 for country
        const countryNode = document.createElement('h2');
        countryNode.id = "country";
        countryNode.innerHTML = name;
        //create a h3 for capital
        const capitalNode = document.createElement('h4');
        capitalNode.id = "capital";
        capitalNode.innerHTML = capital;

        newDiv.appendChild(countryNode, capitalNode);
        newDiv.appendChild(capitalNode);

        // add the newly created element and its content into the DOM
        // Getting the existing div
        const currentDiv = document.getElementById('currentDiv');
        currentDiv.appendChild(newDiv);


    }
}

loadData();

function modal() {
    const currentDiv = document.getElementById('currentDiv');
    currentDiv.addEventListener('click', function () {
        modal.style.display = "block";
        const newDiv = event.target;
        const countryClicked = newDiv.children[0].innerText;
        getDetails(countryClicked);


    })
}

modal();

function getDetails(countryClicked) {
    fetch(`https://restcountries.com/v2/name/${countryClicked}`)
        .then(res => res.json())
        .then(data => {
            const country = data[0].name;
            const capital = data[0].capital;
            const population = data[0].population;
            const currency = data[0].currencies[0].name;
            const lang = data[0].languages[0].name;
            const flag = data[0].flag;

            
             document.getElementById('detailCountry').innerText=country;
             document.getElementById('detailCapital').innerText=capital;
             document.getElementById('population').innerText=population;
             document.getElementById('currency').innerText=currency;
             document.getElementById('lang').innerText=lang;
             document.getElementById('flag').src=flag;

        })
}

//modal
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal

var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
