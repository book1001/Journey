document.addEventListener("DOMContentLoaded", function() {
  fetch('db_test.json')
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

          const infoDiv = document.createElement('div');
          infoDiv.classList.add(`infoItem`);
          infoDiv.textContent = 'IT’S TRULY WONDERFUL THAT, AMIDST THIS VAST EXPANSE OF EARTH, YOU AND I CAN COME TOGETHER IN THE SAME SPACE AND LISTEN TO THE SAME MUSIC SIMULTANEOUSLY. “COMMUNAL RADIO CLUB” IS A SPACE WHERE VISITORS CAN LISTEN TO LIVE RADIO STATIONS. CLICKING THE BLUE JOG DIAL ☐ IN THE MIDDLE OF THE SCREEN WILL PLAY A RANDOM RADIO STATION WITH AN ODD ANIMATION.';

          // Loop through each item and create a div for it
          items.forEach((item, index) => {
            //   const masonryDiv = document.createElement('div');
            //   masonryDiv.classList.add(`grid-item`);

              const itemDiv = document.createElement('div');
              // Assign a class based on index (for demonstration, cycle through 3 styles)
              itemDiv.classList.add(`item`);
              itemDiv.classList.add(`item${(index % 3) + 1}`);
          

              const roofDiv = document.createElement('div');
              roofDiv.classList.add(`roof${(index % 3) + 1}`);
              roofDiv.textContent 
              = `░░░░░░░░░░░░
              ░░░░░░░░░░░░░░░░░░░░░░░
              ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`;

              const wallDiv = document.createElement('div');
              wallDiv.classList.add(`wall${(index % 3) + 1}`);
              wallDiv.textContent = '▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█';

              const textDiv = document.createElement('div');
              textDiv.classList.add(`textSign`);
              textDiv.textContent = item;

              contentDiv.appendChild(itemDiv);
              itemDiv.appendChild(roofDiv);
              itemDiv.appendChild(wallDiv);
              itemDiv.appendChild(textDiv);
          });
          contentDiv.appendChild(infoDiv);
      })
      .catch(error => console.error('Error fetching JSON data:', error));
});
