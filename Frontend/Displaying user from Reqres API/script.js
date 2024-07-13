
        // Selecting necessary DOM elements
        let container = document.querySelector('.container');
        let btn = document.querySelector('button');

        // Event listener for the fetch button click event
        btn.addEventListener('click', getData);

        // Function to fetch data from the API
        async function getData() {
            let response = await fetch('https://reqres.in/api/users'); // Fetch data from API
            let res = await response.json(); // Convert response to JSON format
            displayUsers(res.data); // Call function to display users
            console.log(res.data); // Log fetched data to console
        }

        // Function to display user data in the DOM
        function displayUsers(arr) {
            container.innerHTML = ""; // Clear previous content in container
            arr.forEach(function (ele) {
                // Create HTML structure for each user card
                container.innerHTML += `
                <div class="usercard">
                    <img src="${ele.avatar}" class="avatar">
                    <h3 class="userName">${ele.first_name} ${ele.last_name}</h3>
                    <p class="Email">${ele.email}</p>
                </div>`;
            });
        }
    



