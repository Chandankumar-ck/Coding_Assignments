

let container = document.querySelector('.container');  // Select the container element
let select = document.querySelector('#short');  // Select the dropdown element

// Function to fetch data from the API
function getData(URL) {
fetch(URL)
.then(function (res) {
return res.json();  // Convert the response to JSON
})
.then(function (res) {
console.log(res);
showData(res);  // Pass the data to showData function
})
.catch(function (err) {
console.log(err);  // Log any errors
});
}

// Function to display data on the webpage
function showData(arr) {
container.innerHTML = '';  // Clear the container before appending new data
arr.data.forEach(function (ele) {

let box = document.createElement('div');  // Create a new div for each country
box.className = 'box';  // Add the 'box' class to the div

let h3 = document.createElement('h3');  // Create an h3 element for the country name
let rank1 = document.createElement('h3');  // Create an h3 element for the rank
let population1 = document.createElement('p');  // Create a p element for the population

h3.innerHTML = ele.country;  // Set the country name
rank1.innerHTML = ele.Rank;  // Set the rank
population1.innerHTML = ele.population;  // Set the population

box.append(rank1, h3, population1);  // Append the elements to the box
container.append(box);  // Append the box to the container
});
}

// Initial API call to get the data
getData('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries');

// Event listener for the dropdown change event
select.addEventListener('change', shortData);

// Function to handle sorting based on dropdown selection
function shortData() {
let value = select.value;  // Get the selected value
let url = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries';  // API URL

// Modify the URL based on the selected value
if (value === 'asc') {
url += '?sort=population&order=asc';
} else if (value === 'desc') {
url += '?sort=population&order=desc';
} else if (value == "") {
return url;
}

getData(url);  // Fetch data from the modified URL
}
