

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

    const reversedData = data.reverse();

    const contentDiv = document.getElementById('content');

    const infoDiv = document.createElement('div');
    infoDiv.classList.add(`infoItem`);
    infoDiv.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    const qrDiv = document.createElement('div');
    qrDiv.classList.add(`qrItem`);
    const qrImgUrl = './qrcode/qr.svg';

    const qrImg = document.createElement('img');
    qrImg.src = qrImgUrl;
    qrImg.alt = 'QR'; 
    qrImg.classList.add(`qrImg`);

    contentDiv.appendChild(infoDiv);
    // contentDiv.appendChild(qrDiv);
    // qrDiv.appendChild(qrImg);


    reversedData.forEach(item => {
      let itemDiv = document.createElement('div');

      let roofText = '';
      switch (item.roofClass) {
        case 'roof1':
          roofText = 
          `
           ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
           ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
           ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
           `;
          break;
        case 'roof2':
          roofText = 
          `
            ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
            ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
            ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
            ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
            ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
            ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
            ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
            ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
            `;
          break;
        // case 'roof2':
        //   roofText = 
        //   `
        //               ▒▒▒▒▒▒▒▒▒▒▒           
        //         ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒     
        //    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        //    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        //    `;
        //   break;
        case 'roof3-R':
          roofText = 
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
        case 'roof3-G':
          roofText = 
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
        case 'roof3-B':
          roofText = 
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
        // case 'roof1':
        //   roofText = 
        //   `
        //     ░░░░░░░░░░░░
        //     ░░░░░░░░░░░░░░░░░░░░░░░
        //     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
        //     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
        //     `;
        //   break;
        // case 'roof3':
        //   roofText = 
        //   `
        //   █████████████████████████████████
        //   ████▓▓▓▓███▓▓▓▓███▓▓▓▓███▓▓▓▓████
        //   ▓▓▓▓███▓▓▓▓███▓▓▓▓▓███▓▓▓▓███▓▓▓▓
        //   ████▓▓▓▓███▓▓▓▓███▓▓▓▓███▓▓▓▓████
        //   ▓▓▓▓███▓▓▓▓███▓▓▓▓▓███▓▓▓▓███▓▓▓▓
        //   ████▓▓▓▓███▓▓▓▓███▓▓▓▓███▓▓▓▓████
        //   ▓▓▓▓███▓▓▓▓███▓▓▓▓▓███▓▓▓▓███▓▓▓▓
        //   ████▓▓▓▓███▓▓▓▓███▓▓▓▓███▓▓▓▓████
        //   ▓▓▓▓███▓▓▓▓███▓▓▓▓▓███▓▓▓▓███▓▓▓▓
        //   ████▓▓▓▓███▓▓▓▓███▓▓▓▓███▓▓▓▓████
        //    `;
        //   break;
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
              ▄█▆█▄  
              ▀█▆█▀  
          ▄█▆█▄ ░    
          ▀█▆█▀ ░    
             ░  ░    
             ░ ░     
              ░      
              ░      
           `;
          break;
      }
      
      let gardenRImg = '';
      switch (item.gardenRClass) {
        case 'gardenR1':
          gardenRImg = './img/plant1.png';
          break;
        case 'gardenR2':
          gardenRImg = './img/plant1.png';
          break;
        case 'gardenR3':
          gardenRImg = './img/plant1.png';
          break;
      }


      let treeText = '';
      switch (item.treeClass) {
        case 'tree1':
          treeText = 
          `
                   ▓             ▓         
                 ▁▆▓▆▁         ▁▆▓▆▁       
                ▄▓▓█▓▓▄       ▄▓▓█▓▓▄      
                  █▓▓           █▓▓        
                 █▓▓█▓         █▓▓█▓       
               ▄█▓▓█▓▓█▄     ▄█▓▓█▓▓█▄     
                 ▓█▓▓█         ▓█▓▓█       
                ▓█▓▓█▓▓       ▓█▓▓█▓▓      
              ▄▓█▓▓▒▓▓█▓▄   ▄▓█▓▓▒▓▓█▓▄    
                ▓▓█▒▓█▓       ▓▓█▒▓█▓      
               ▓▓█▓▒█▓▓█     ▓▓█▓▒█▓▓█     
             ▄▓▓█▓▓▒▓▓█▓▓▄ ▄▓▓█▓▓▒▓▓█▓▓▄   
              ▔ ▔ ▔▒▔ ▔ ▔   ▔ ▔ ▔▒▔ ▔ ▔    
                   ▒             ▒         
                   ▒             ▒         
           `;
          break;
      }

      let treeBallText = 
          `
                   ▀             ▓         
                    ▓          ▁▆▓▆▁       
                  █  ▄        ▄▓▓█▓▓▄      
                   ▀            █▓▓        
                 ▓  ▓          █▓▓█▓       
                  ▄  ▄       ▄█▓▓█▓▓█▄     
                   █           ▓█▓▓█       
                 █  ▀         ▓█▓▓█▓▓      
               ▓  ▓  ▓      ▄▓█▓▓▒▓▓█▓▄    
                ▓  ▒  ▄       ▓▓█▒▓█▓      
                 █  █  █     ▓▓█▓▒█▓▓█     
               ▓  ▓  ▓  ▀  ▄▓▓█▓▓▒▓▓█▓▓▄   
              ▔ ▔ ▔▒▔ ▔ ▔   ▔ ▔ ▔▒▔ ▔ ▔    
                   ▒             ▒         
                   ▒             ▒         
           `;
            
      let flowerText = '';
      switch (item.flowerClass) {
        case 'flower1':
          flowerText = 
          `
                         ▄█▆█▄                         ▄█▆█▄                
              ▄█▆█▄      ▀▓▆▓▀  ▄█▆█▄           ▄█▆█▄  ▀▓▆▓▀      ▄█▆█▄     
              ▀▓▆▓▀ ▄█▆█▄ ░     ▀▓▆▓▀   ▄█▆█▄   ▀▓▆▓▀     ░ ▄█▆█▄ ▀▓▆▓▀     
          ▄█▆█▄  ░  ▀▓▆▓▀ ░ ▄█▆█▄ ░     ▀▓▆▓▀     ░ ▄█▆█▄ ░ ▀▓▆▓▀  ░  ▄█▆█▄ 
          ▀▓▆▓▀ ▄█▆█▄  ░  ░ ▀▓▆▓▀ ░ ▄█▆█▄ ░ ▄█▆█▄ ░ ▀▓▆▓▀ ░  ░  ▄█▆█▄ ▀▓▆▓▀ 
             ░  ▀▓▆▓▀   ░ ░   ░   ░ ▀▓▆▓▀ ░ ▀▓▆▓▀ ░   ░   ░ ░   ▀▓▆▓▀  ░    
              ░    ░     ░    ░   ░  ░   ░     ░  ░   ░    ░     ░    ░     
              ░     ░    ░     ░  ░ ░    ░      ░ ░  ░     ░    ░     ░     
          `;
          break;
      }

      let lightText = '';
      switch (item.lightClass) {
        case 'light1':
          lightText = 
          `
                    ▂▄▄▄▂   ▂▄▄▄▂          
                 ▂▄█▄▂   ▓ ▓   ▂▄█▄▂       
                 ▕▒▒▒▎   ▔▒▔   ▕▒▒▒▎       
                  ▕▒▎     ▒     ▕▒▎        
                          ▒                
                          ▒                
                          ▒                
                          ▒                
                          ▒                
                          ▒                
                          ▒                
                          ▒                
                          ▒                
                         ▕▓▎               
                        ▄▓█▓▄              
            `;
          break;
      }

      let lightBallText = 
          `
                                           
                  ▂▂▂           ▂▂▂        
                 ▔░▒░▔         ▔░▒░▔       
                   ░             ░         
                   ▔             ▔         
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
            `;



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
          // roofDiv.classList.add(item.roofColorClass);
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
        //   gardenRDiv.classList.add(item.gardenRClass);
        //   itemDiv.appendChild(gardenRDiv);
        //   const gardenRImgC = document.createElement('img');
        //   gardenRImgC.src = gardenRImg;
        //   gardenRImgC.classList.add('gardenImg-R'); 
        //   gardenRDiv.appendChild(gardenRImgC);
        // }   

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

          const treeBallDiv = document.createElement('div');
          treeBallDiv.textContent = treeBallText;
          treeBallDiv.classList.add('tree_ball');
          itemDiv.appendChild(treeBallDiv);
        }

        if (item.flowerClass) {
          itemDiv.classList.add('flower');
          const flowerDiv = document.createElement('div');
          flowerDiv.textContent = flowerText;
          flowerDiv.classList.add(item.flowerClass);
          itemDiv.appendChild(flowerDiv);
        }

        // if (item.lightClass) {
        //   itemDiv.classList.add('light');
        //   const lightDiv = document.createElement('div');
        //   lightDiv.textContent = lightText;
        //   lightDiv.classList.add(item.lightClass);
        //   itemDiv.appendChild(lightDiv);
        // }


        if (item.lightClass) {
          itemDiv.classList.add('light');
          const lightDiv = document.createElement('div');
          lightDiv.textContent = lightText;
          lightDiv.classList.add(item.lightClass);
          itemDiv.appendChild(lightDiv);

          const lightBallDiv = document.createElement('div');
          lightBallDiv.textContent = lightBallText;
          lightBallDiv.classList.add('light_ball');
          itemDiv.appendChild(lightBallDiv);
        
          // Add click event listener to toggle background color
          lightDiv.addEventListener('click', function() {
            if (document.body.style.backgroundColor === 'black') {
              document.body.style.backgroundColor = ''; // Reset to original color
              resetTextColor();
            } else {
              document.body.style.backgroundColor = 'black'; // Replace 'newColor' with the desired color
              changeTextColorToWhite();
            }
          });
        }

        function changeTextColorToWhite() {
          document.querySelectorAll('.infoItem').forEach(div => {
            div.style.color = 'white';
            div.style.textShadow = '0 0px 3px yellow';
          });

          document.querySelectorAll('.roof1, .roof2, .roof3-R, .roof3-G, .roof3-B, .wall1, .wall2, .wall3').forEach(div => {
            div.style.borderBottom = '1px solid black';
            div.style.textShadow = '0 0px 3px yellow';
          });

          document.querySelectorAll('.text1').forEach(div => {
            div.style.color = 'white';
            div.style.background = 'black';
            div.style.textShadow = '0 0px 3px yellow';
          });

          document.querySelectorAll('.tree1').forEach(div => {
            div.style.color = 'green';
            div.style.textShadow = '0 0 3px yellow';
          });

          document.querySelectorAll('.tree_ball').forEach(div => {
            div.style.color = 'green';
            div.style.textShadow = '0 2px 5px yellow';
          });

          document.querySelectorAll('.flower').forEach(div => {
            div.style.color = 'blue';
            div.style.textShadow = '0 0px 3px yellow';
          });

          document.querySelectorAll('.light1').forEach(div => {
            div.style.textShadow = '0 0px 3px yellow';
          });

          document.querySelectorAll('.light_ball').forEach(div => {
            div.style.color = 'yellow';
            div.style.textShadow = '0 2px 5px yellow';
          });
        }

        function resetTextColor() {
          document.querySelectorAll('.infoItem').forEach(div => {
            div.style.color = '';
            div.style.textShadow = '';
          });

          document.querySelectorAll('.roof1, .roof2, .roof3-R, .roof3-G, .roof3-B, .wall1, .wall2, .wall3').forEach(div => {
            div.style.borderBottom = '';
            div.style.textShadow = '';
          });

          document.querySelectorAll('.text1').forEach(div => {
            div.style.color = '';
            div.style.background = '';
            div.style.textShadow = '';
          });

          document.querySelectorAll('.tree1').forEach(div => {
            div.style.color = '';
            div.style.textShadow = '';
          });

          document.querySelectorAll('.tree_ball').forEach(div => {
            div.style.color = '';
            div.style.textShadow = '';
          });

          document.querySelectorAll('.flower').forEach(div => {
            div.style.color = '';
            div.style.textShadow = '';
          });

          document.querySelectorAll('.light1').forEach(div => {
            div.style.textShadow = '';
          });

          document.querySelectorAll('.light_ball').forEach(div => {
            div.style.color = '';
            div.style.textShadow = '';
          });
        }

    });

    // contentDiv.appendChild(qrDiv);
    // qrDiv.appendChild(qrImg);
    // contentDiv.appendChild(infoDiv);

  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
});