document.addEventListener("DOMContentLoaded", function() {
  fetch('db.json')
      .then(response => response.json())
      .then(data => {
          // Assuming the JSON data is a single string
          let jsonData = data;

          jsonData = jsonData.replace(/\n/g, '🌞');
      
          // Split the string by newline characters
          // const items = jsonData.split('\n\n');
          const items = jsonData.split('●');

          // Get the content div
          const contentDiv = document.getElementById('content');

          // Loop through each item and create a div for it
          items.forEach((item, index) => {
              const itemDiv = document.createElement('div');
              // Assign a class based on index (for demonstration, cycle through 3 styles)
              itemDiv.classList.add(`item${(index % 3) + 1}`);
              itemDiv.textContent = item;
              contentDiv.appendChild(itemDiv);
          });
      })
      .catch(error => console.error('Error fetching JSON data:', error));
});