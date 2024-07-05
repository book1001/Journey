

// // Select all buttons with the specified classes
// const buttons = document.querySelectorAll('.uppy-u-reset.uppy-c-btn.uppy-StatusBar-actionBtn.uppy-StatusBar-actionBtn--done');

// // Add event listener to each button
// buttons.forEach(button => {
//   button.addEventListener('click', async () => {
//     try {
//       const response = await fetch('/fetch-and-append-data');
//       const message = await response.text();
//       console.log(message);
//       // Optionally, display a success message or handle UI updates
//     } catch (error) {
//       console.error('Failed to fetch and append data:', error);
//       // Handle error scenario
//     }
//   });
// });


// document.getElementById('apple').addEventListener('click', async () => {
//   try {
//     const response = await fetch('/fetch-and-append-data');
//     const message = await response.text();
//     console.log(message);
//     // Optionally, display a success message or handle UI updates
//   } catch (error) {
//     console.error('Failed to fetch and append data:', error);
//     // Handle error scenario
//   }
// });



document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('db.json');
    const data = await response.json();

    const contentDiv = document.getElementById('content');

    const infoDiv = document.createElement('div');
    infoDiv.classList.add(`infoItem`);
    infoDiv.textContent = 'IT’S TRULY WONDERFUL THAT, AMIDST THIS VAST EXPANSE OF EARTH, YOU AND I CAN COME TOGETHER IN THE SAME SPACE AND LISTEN TO THE SAME MUSIC SIMULTANEOUSLY. “COMMUNAL RADIO CLUB” IS A SPACE WHERE VISITORS CAN LISTEN TO LIVE RADIO STATIONS. CLICKING THE BLUE JOG DIAL ☐ IN THE MIDDLE OF THE SCREEN WILL PLAY A RANDOM RADIO STATION WITH AN ODD ANIMATION.';


    data.forEach(item => {
      let itemDiv = document.createElement('div');

      let roofText = '';
      switch (item.roofClass) {
        case 'roof1':
          roofText = 
          `
           ░░░░░░░░░░░░
           ░░░░░░░░░░░░░░░░░░░░░░░
           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
           `;
          break;
        case 'roof2':
          roofText = 
          `
           ▒▒▒▒▒▒▒▒▒▒▒▒
           ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
           ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
           ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
           `;
          break;
        case 'roof3':
          roofText = 
          `
           ░░░░░░░░░░░░
           ░░░░░░░░░░░░░░░░░░░░░░░
           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
           `;
          break;
      }

      let wallText = '';
      switch (item.wallClass) {
        case 'wall1':
          wallText = 
          `
           █▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓
           ▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓
           █▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓
           ▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓
           █▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓
           ▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓
           █▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓
           ▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓
           █▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓
           ▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓
           `;
          break;
        case 'wall2':
          wallText = 
          `
          █████████████████████████████████
          ████▓▓▓▓███▓▓▓▓███▓▓▓▓███▓▓▓▓████
          ▓▓▓▓███▓▓▓▓███▓▓▓▓▓███▓▓▓▓███▓▓▓▓
          ████▓▓▓▓███▓▓▓▓███▓▓▓▓███▓▓▓▓████
          ▓▓▓▓███▓▓▓▓███▓▓▓▓▓███▓▓▓▓███▓▓▓▓
          ████▓▓▓▓███▓▓▓▓███▓▓▓▓███▓▓▓▓████
          ▓▓▓▓███▓▓▓▓███▓▓▓▓▓███▓▓▓▓███▓▓▓▓
          ████▓▓▓▓███▓▓▓▓███▓▓▓▓███▓▓▓▓████
          ▓▓▓▓███▓▓▓▓███▓▓▓▓▓███▓▓▓▓███▓▓▓▓
          ████▓▓▓▓███▓▓▓▓███▓▓▓▓███▓▓▓▓████
          `;
          break;
        case 'wall3':
          wallText = 
          `
          █████████████████████████████████
          █████████████████████████████████
          █████████████████████████████████
          █████░░░█████████████████░░░█████
          █████░░░█████████████████░░░█████
          ██████████████░░░░░██████████████
          ██████████████░░░░░██████████████
          ██████████████░░░░░██████████████
          ██████████████░░░░░██████████████
          ██████████████░░░░░██████████████
          `;
          break;

        // case 'wall3':
        //   wallText = 
        //   `
        //   █████████████████████████████████
        //   █████████████████████████████████
        //   █████████████████████████████████
        //   ████╔═╦═╗███████████████╔═╦═╗████
        //   █████   ████████████████╠═╬═╣████
        //   ██████████████░░░░░█████╚═╩═╝████
        //   ██████████████░░░░░██████████████
        //   ██████████████░░░░░██████████████
        //   ██████████████░░░░░██████████████
        //   ██████████████░░░░░██████████████
        //   `;
        //   break;
        // case 'wall3':
        //   wallText = 
        //   `
        //   ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣
        //   ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣
        //   ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣
        //   ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣
        //   ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣
        //   ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣
        //   ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣
        //   ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣
        //   ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣
        //   ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣
        //   `;
        //   break;
        // case 'wall4':
        //   wallText = 
        //   `
        //   |___|___|___|___|___|___|___|___|
        //   |___|___|___|___|___|___|___|___|
        //   |___|___|___|___|___|___|___|___|
        //   |___|___|___|___|___|___|___|___|
        //   |___|___|___|___|___|___|___|___|
        //   |___|___|___|___|___|___|___|___|
        //   |___|___|___|___|___|___|___|___|
        //   |___|___|___|___|___|___|___|___|
        //   |___|___|___|___|___|___|___|___|
        //   |___|___|___|___|___|___|___|___|
        //   `;
        //   break;
      }

      let gardenRText = '';
      switch (item.gardenRClass) {
        case 'gardenR1':
          gardenRText = 
          `
             
           ▀▄
           ▀▄▀▄
           ▀▄  
           |
           |
           |
           |
           `;
          break;
        case 'gardenR2':
          gardenRText = 
          `
            & &
          &\ |/
            \|
             |
           `;
          break;
        case 'gardenR3':
          gardenRText = 
          `
           `;
          break;
      }
      
      let treeText = '';
      switch (item.treeClass) {
        case 'tree1':
          treeText = 
          `
             
           ▀▄
           ▀▄▀▄
           ▀▄  
           |
           |
           |
           |
           `;
          break;
        case 'tree2':
          treeText = 
          `
            & &
          &\ |/
            \|
             |
           `;
          break;
        case 'tree3':
          treeText = 
          `
           `;
          break;
      }


    //   const roofDiv = document.createElement('div');
    //   roofDiv.textContent = roofText;
    //   roofDiv.classList.add(item.roofClass);

    //   const textDiv = document.createElement('div');
    //   textDiv.textContent = item.text;
    //   textDiv.classList.add(item.textClass);

    //   const wallDiv = document.createElement('div');
    //   wallDiv.textContent = wallText;
    //   wallDiv.classList.add(item.wallClass);
    //   wallDiv.classList.add(item.sizeClass);

    //   const gardenRDiv = document.createElement('div');
    //   gardenRDiv.textContent = gardenRText;
    //   gardenRDiv.classList.add(item.gardenRClass);

    //   const treeDiv = document.createElement('div');
    //   treeDiv.textContent = treeText;
    //   treeDiv.classList.add(item.treeClass);

    //   contentDiv.appendChild(itemDiv);
    //   itemDiv.appendChild(roofDiv);
    //   itemDiv.appendChild(textDiv);
    //   itemDiv.appendChild(wallDiv);
    //   // itemDiv.appendChild(gardenRDiv);
    //   contentDiv.appendChild(treeDiv);
    // });

      contentDiv.appendChild(itemDiv);
        if (item.roofClass) {
          itemDiv.classList.add('item');
          itemDiv.classList.add(item.colorClass);
          const roofDiv = document.createElement('div');
          roofDiv.textContent = roofText;
          roofDiv.classList.add(item.roofClass);
          itemDiv.appendChild(roofDiv);
        }

        if (item.text) {
          itemDiv.classList.add('item');
          itemDiv.classList.add(item.colorClass);
          const textDiv = document.createElement('div');
          textDiv.textContent = item.text;
          textDiv.classList.add(item.textClass);
          itemDiv.appendChild(textDiv);
        }

        if (item.wallClass) {
          itemDiv.classList.add('item');
          itemDiv.classList.add(item.colorClass);
          const wallDiv = document.createElement('div');
          wallDiv.textContent = wallText;
          wallDiv.classList.add(item.wallClass);
          wallDiv.classList.add(item.sizeClass);
          itemDiv.appendChild(wallDiv);
        }

        // if (item.gardenRClass) {
        //   itemDiv.classList.add('item');
        //   itemDiv.classList.add(item.colorClass);
        //   const gardenRDiv = document.createElement('div');
        //   gardenRDiv.textContent = gardenRText;
        //   gardenRDiv.classList.add(item.gardenRClass);
        //   itemDiv.appendChild(gardenRDiv);
        // }

        if (item.treeClass) {
          itemDiv.classList.add('tree');
          const treeDiv = document.createElement('div');
          treeDiv.textContent = treeText;
          treeDiv.classList.add(item.treeClass);
          itemDiv.appendChild(treeDiv);
        }
    });

    contentDiv.appendChild(infoDiv);

  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
});