// window.onload = function() {
//   // const frontDiv = document.querySelector('#help1');
//   const frontDivs = document.querySelectorAll('.help1');
//   const frontDiv2 = document.querySelectorAll('.help2');
  
//   const wallPaper_front = '████▓▓▓▓';
//   const wallPaper_front2 = '████▓▓▓▓';
//   // const wallPaper_front = '████▓▓▓▓';
//   const repeatTimes = 1000; // 필요한 반복 횟수로 설정

 
//   for (let i = 0; i < repeatTimes; i++) {
//     frontDivs.forEach(frontDiv => {
//       const frontText = document.createTextNode(wallPaper_front);
//       frontDiv.appendChild(frontText);
//     });
//     // frontDivs2.forEach(frontDiv2 => {
//     //   const frontText2 = document.createTextNode(wallPaper_front2);
//     //   frontDiv2.appendChild(frontText2);
//     // });
//   }


//   // for (let i = 0; i < repeatTimes; i++) {
//   //   const frontText = document.createTextNode(wallPaper_front);
//   //   frontDiv.appendChild(frontText);
//   // }
// };

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
//     document.getElementById('failAlert').style.background = 'blue';
//     window.location.reload();
//   } catch (error) {
//     console.error('Failed to fetch and append data:', error);
//   }
// });

function createElement(item) {
  let itemDiv = document.createElement('div');
  let houseDiv = document.createElement('div');

  // =============================================
  // Json: House
  // =============================================
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
  }

  // =============================================
  // Json: Objects > Tree
  // =============================================
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
        
  // =============================================
  // Json: Objects > Flower
  // =============================================
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

  // =============================================
  // Json: Objects > Theater
  // =============================================
  let theaterText = '';
  switch (item.theaterClass) {
    case 'theater1':
      theaterText = 
      `
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
      ███████                   ███████
      ███▓▓▓██                 ██▓▓▓███
      ▓▓▓███▓▓▓███░░░░░░░░░███▓▓▓███▓▓▓
      ███▓▓▓███▓▓▓░░░░░░░░░▓▓▓███▓▓▓███
      ▓▓▓███▓▓▓███░░░░░░░░░███▓▓▓███▓▓▓
      ███▓▓▓███▓▓▓░░░░░░░░░▓▓▓███▓▓▓███
      ▓▓▓███▓▓▓███░░░░░░░░░███▓▓▓███▓▓▓
      ███▓▓▓███▓▓▓░░░░░░░░░▓▓▓███▓▓▓███
        `;
      break;
  }

  let theaterBallText = 
      `
      ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
      ▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓
      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
      ▒▒▒▒▒▒▒▒▒▒▒▒▓▒▓▒▓▒▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒
      ▒▒▒▒▒▒▒▒▒▒▒▓▒░▒░▒░▒░▒▓▒▒▒▒▒▒▒▒▒▒▒
      ▒▒▒▒▒▒▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▒▒▒▒▒▒
      ▓▒▓▒▓▒▓▒  V I S I T O R  ▒▓▒▓▒▓▒▓
             ▓     I N F O     ▓       
              ▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓        
                                       
                                       
                                       
                                       
                                       
                                       
        `;
  
  let theaterBallText2 = 
      `
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
        ▕▒▒▒▎                   ▕▒▒▒▎  
         ▕▒▎                     ▕▒▎   
                                       
                                       
                                       
                                       
                                       
                                       
        `;

  let theaterBallText3 = 
      `
                                       
                                       
                                       
                                       
       ▓ ▓                         ▓ ▓ 
      ▓   ▓       ▓▒▓▒▓▒▓▒▓       ▓   ▓
      ▓  ▓       ▓▒░▒░▒░▒░▒▓       ▓  ▓
       ▓     ▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓     ▓ 
        ▂▄▄▄▂                   ▂▄▄▄▂  
        ▕▒▒▒▎                   ▕▒▒▒▎  
         ▕▒▎                     ▕▒▎   
                                       
                                       
                                       
                                       
                                       
                                       
        `;

  // =============================================
  // Json: Objects > Light
  // =============================================
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

//   const treeDiv = document.createElement('div');
//   treeDiv.textContent = treeText;
//   treeDiv.classList.add(item.treeClass);

//   contentDiv.appendChild(itemDiv);
//   itemDiv.appendChild(roofDiv);
//   itemDiv.appendChild(textDiv);
//   itemDiv.appendChild(wallDiv);
//   // itemDiv.appendChild(gardenDiv);
//   contentDiv.appendChild(treeDiv);
// });

  // =============================================
  // Add: Room > Link
  // =============================================
    houseDiv.onclick = function() {
      let roomLink = item.colorClass + '_' + item.roofClass + '_' + item.wallClass + '_' + item.sizeClass;
      // let roomLink = 'rooms/' + item.colorClass + '_' + item.roofClass + '_' + item.wallClass + '_' + item.sizeClass + '.html';

      let height;
      if (item.sizeClass === 'size1') {
        height = 640; //72px
      } else if (item.sizeClass === 'size2') {
        height = 720; //96px
      } else if (item.sizeClass === 'size3') { 
        height = 784; //120px (800px)
      }

      let width = 800;
      
      // Current browser position, size
      const screenLeft = window.screenX || window.screenLeft;
      const screenTop = window.screenY || window.screenTop;
      const screenWidth = window.outerWidth;
      const screenHeight = window.outerHeight;
      
      // Browser position center calcurate
      const left = screenLeft + (screenWidth - width) / 2;
      const top = screenTop + (screenHeight - height) / 2;

      // new window
      const newWindow = window.open('', '_blank', `width=${width},height=${height},left=${left},top=${top}`);

      // new window HTML
      newWindow.document.write(`
        <html>
        <head>
          <title>◼︎</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">

          <link rel="stylesheet" href="rooms/room.css">
          <script>let roomLink = "${roomLink}";</script>
          <script type="text/javascript" src="rooms/wallpaper_rooting.js"></script>  
          <link rel="stylesheet" href="rooms/wallpaper_rooting.css">

          <style>
            iframe {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              min-width: 800px;
              height: 100%;
              border: none;
              z-index: 2;
              cursor: text;
            }
          </style>
        </head>

        <body>
          <iframe src="https://scrape-room7.glitch.me/${roomLink}" frameborder="0"></iframe>

          <div class="wallpapers-container">
            <div class="wallpapers">
              <div class="top" id="wallpaper-top"></div>
              <div class="left" id="wallpaper-left"></div>
              <div class="front" id="wallpaper-front"></div>
              <div class="right" id="wallpaper-right"></div>
              <div class="bottom" id="wallpaper-bottom"></div>
            </div>
          </div>

          <script type="text/javascript" src="rooms/wallpaper_tiling.js"></script>  
        </body>
        </html>
      `);

    };


  // =============================================
  // Add: House > Roof
  // =============================================
  if (item.roofClass) {
    itemDiv.classList.add('item');
    itemDiv.appendChild(houseDiv);

    houseDiv.classList.add('house');
    houseDiv.classList.add(item.colorClass);
    const roofDiv = document.createElement('div');
    roofDiv.textContent = roofText;
    roofDiv.classList.add(item.roofClass);
    // roofDiv.classList.add(item.roofColorClass);
    houseDiv.appendChild(roofDiv);
  }

  // =============================================
  // Add: House > Text
  // =============================================
  if (item.text) {
    itemDiv.classList.add('item');
    itemDiv.appendChild(houseDiv);

    houseDiv.classList.add('house');
    houseDiv.classList.add(item.colorClass);
    const textDiv = document.createElement('div');
    textDiv.textContent = item.text;
    textDiv.classList.add(item.textClass);
    houseDiv.appendChild(textDiv);
  }

  // =============================================
  // Add: House > Wall
  // =============================================
  if (item.wallClass) {
    itemDiv.classList.add('item');
    itemDiv.appendChild(houseDiv);

    houseDiv.classList.add('house');
    houseDiv.classList.add(item.colorClass);
    const wallDiv = document.createElement('div');
    wallDiv.textContent = wallText;
    wallDiv.classList.add(item.wallClass);
    wallDiv.classList.add(item.sizeClass);
    houseDiv.appendChild(wallDiv);
  }

  // =============================================
  // Add: House > Garden
  // =============================================
  // if (item.gardenClass) {
  //   itemDiv.classList.add('item');
  //   itemDiv.classList.add(item.colorClass);
  //   const gardenDiv = document.createElement('div');
  //   gardenDiv.classList.add(item.gardenClass);
  //   itemDiv.appendChild(gardenDiv);
  //   const gardenImgC = document.createElement('img');
  //   gardenImgC.src = gardenImg;
  //   gardenImgC.classList.add('gardenImg-R'); 
  //   gardenDiv.appendChild(gardenImgC);
  // }   

  // if (item.gardenClass) {
  //   itemDiv.classList.add('item');
  //   itemDiv.classList.add(item.colorClass);
  //   const gardenDiv = document.createElement('div');
  //   gardenDiv.textContent = gardenText;
  //   gardenDiv.classList.add(item.gardenClass);
  //   itemDiv.appendChild(gardenDiv);
  // }

  // =============================================
  // Add: Objects > Tree
  // =============================================
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

  // =============================================
  // Add: Objects > Flower
  // =============================================
  if (item.flowerClass) {
    itemDiv.classList.add('flower');
    const flowerDiv = document.createElement('div');
    flowerDiv.textContent = flowerText;
    flowerDiv.classList.add(item.flowerClass);
    itemDiv.appendChild(flowerDiv);
  }

  // =============================================
  // Add: Objects > Theater
  // =============================================
  if (item.theaterClass) {
    itemDiv.classList.add('theater');
    const theaterDiv = document.createElement('div');
    const theaterAtag = document.createElement('a');
    theaterAtag.href = 'link_theater';
    itemDiv.appendChild(theaterAtag);

    // const signDiv = document.createElement('div');
    // signDiv.textContent = 'Are.na Theater';
    // signDiv.classList.add('sign');
    // theaterAtag.appendChild(signDiv);

    theaterDiv.textContent = theaterText;
    theaterDiv.classList.add(item.theaterClass);
    theaterAtag.appendChild(theaterDiv);

    const theaterBallDiv = document.createElement('div');
    theaterBallDiv.textContent = theaterBallText;
    theaterBallDiv.classList.add('theater_ball');
    theaterAtag.appendChild(theaterBallDiv);
  }

  // =============================================
  // Add: Objects > Light
  // =============================================
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
  
    // ---------------------------------------------
    // Light: Function (Toggle)
    // ---------------------------------------------
    lightDiv.addEventListener('click', function() {
      if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = '';
        dayMode();
      } else {
        document.body.style.backgroundColor = 'black';
        nightMode();
      }
    });
  }

  function nightMode() {
    document.querySelectorAll('.infoItem').forEach(div => {
      div.style.color = 'white';
      div.style.textShadow = '0 0px 3px yellow';
    });

    document.querySelectorAll('.roof1, .roof2, .roof3-R, .roof3-G, .roof3-B').forEach(div => {
      div.style.borderBottom = '1px solid black';
      div.style.textShadow = '0 0px 3px yellow';
    });

    document.querySelectorAll('.text1').forEach(div => {
      div.style.color = 'white';
      div.style.background = 'black';
      div.style.textShadow = '0 0px 3px yellow';
    });

    document.querySelectorAll('.wall1, .wall2, .wall3').forEach(div => {
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

    document.querySelectorAll('.theater1').forEach(div => {
      div.style.color = 'green';
      div.style.textShadow = '0 0 3px yellow';
    });

    document.querySelectorAll('.theater_ball').forEach(div => {
      div.style.color = 'white';
      div.style.textShadow = '0 2px 5px yellow';
    });

    document.querySelectorAll('.light1').forEach(div => {
      div.style.textShadow = '0 0px 3px yellow';
    });

    document.querySelectorAll('.light_ball').forEach(div => {
      div.style.color = 'yellow';
      div.style.textShadow = '0 2px 5px yellow';
    });

    document.querySelectorAll('.info-roof').forEach(div => {
      div.style.color = 'white';
      div.style.textShadow = '0 2px 5px yellow';
    });

    document.querySelectorAll('.info-wall').forEach(div => {
      div.style.color = 'green';
      div.style.textShadow = '0 0 3px yellow';
    });
  }

  function dayMode() {
    document.querySelectorAll('.infoItem').forEach(div => {
      div.style.color = '';
      div.style.textShadow = '';
    });

    document.querySelectorAll('.roof1, .roof2, .roof3-R, .roof3-G, .roof3-B').forEach(div => {
      div.style.borderBottom = '';
      div.style.textShadow = '';
    });

    document.querySelectorAll('.text1').forEach(div => {
      div.style.color = '';
      div.style.background = '';
      div.style.textShadow = '';
    });

    document.querySelectorAll('.wall1, .wall2, .wall3').forEach(div => {
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

    document.querySelectorAll('.theater1').forEach(div => {
      div.style.color = '';
      div.style.textShadow = '';
    });

    document.querySelectorAll('.theater_ball').forEach(div => {
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

    document.querySelectorAll('.info-roof').forEach(div => {
      div.style.color = '';
      div.style.textShadow = '';
    });

    document.querySelectorAll('.info-wall').forEach(div => {
      div.style.color = '';
      div.style.textShadow = '';
    });
  }

  return itemDiv;
}


document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('db.json');
    const data = await response.json();
    const reversedData = data.reverse();


    // =============================================
    // Add: Container
    // =============================================
    const contentDiv = document.getElementById('content');
    

    // =============================================
    // Add: Info
    // =============================================
    const infoDiv = document.createElement('div');
    infoDiv.classList.add(`infoItem`);
    infoDiv.textContent = 'Scrape the World scrapes landscapes from around the world into the web. Hit the camera button to add your world hear! Some items have special Easter eggs. (More to be added soon!) Click here for detailed usage instructions. If you want to know more about Scrape the World, click here. — 2024. 7. 23 Halim';
    // infoDiv.textContent = '';
    // infoDiv.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    const infoSignDiv = document.createElement('div');
    infoSignDiv.classList.add(`infoSign`);
    
    infoSignDiv.onclick = function() {
      let roomLink = 'rooms/info.html';
    
      let width = 1400;
      let height = 900;
      
      // Current browser position, size
      const screenLeft = window.screenX || window.screenLeft;
      const screenTop = window.screenY || window.screenTop;
      const screenWidth = window.outerWidth;
      const screenHeight = window.outerHeight;
      
      // Browser position center calcurate
      const left = screenLeft + (screenWidth - width) / 2;
      const top = screenTop + (screenHeight - height) / 2;

      // new window
      window.open(roomLink, '_blank', `width=${width},height=${height},left=${left},top=${top}`);

    };


    const infoRoofDiv = document.createElement('div');
    infoRoofDiv.classList.add('info-roof');
    infoSignDiv.appendChild(infoRoofDiv);
    const infoWallDiv = document.createElement('div');
    infoWallDiv.classList.add('info-wall');
    infoSignDiv.appendChild(infoWallDiv);

    infoRoofDiv.textContent = 
    `
    ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
    ▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
    ▒▒▒▒▒▒▒▒▒▒▒▒▓▒▓▒▓▒▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒
    ▒▒▒▒▒▒▒▒▒▒▒▓▒░▒░▒░▒░▒▓▒▒▒▒▒▒▒▒▒▒▒
    ▒▒▒▒▒▒▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▒▒▒▒▒▒
    ▓▒▓▒▓▒▓▒  V I S I T O R  ▒▓▒▓▒▓▒▓
           ▓     I N F O     ▓       
            ▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓        
                                     
                                     
                                     
                                     
                                     
                                     
      `;

    infoWallDiv.textContent = 
    `
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
      ███████                   ███████
      ███▓▓▓██                 ██▓▓▓███
      ▓▓▓███▓▓▓███░░░░░░░░░███▓▓▓███▓▓▓
      ███▓▓▓███▓▓▓░░░░░░░░░▓▓▓███▓▓▓███
      ▓▓▓███▓▓▓███░░░░░░░░░███▓▓▓███▓▓▓
      ███▓▓▓███▓▓▓░░░░░░░░░▓▓▓███▓▓▓███
      ▓▓▓███▓▓▓███░░░░░░░░░███▓▓▓███▓▓▓
      ███▓▓▓███▓▓▓░░░░░░░░░▓▓▓███▓▓▓███
        `;


    const qrDiv = document.createElement('div');
    qrDiv.classList.add(`qrItem`);
    const qrImgUrl = './qrcode/qr.svg';

    const qrImg = document.createElement('img');
    qrImg.src = qrImgUrl;
    qrImg.alt = 'QR'; 
    qrImg.classList.add(`qrImg`);

    contentDiv.appendChild(infoDiv);
    contentDiv.appendChild(infoSignDiv);
    // contentDiv.appendChild(qrDiv);
    // qrDiv.appendChild(qrImg);

    reversedData.forEach(item => {
      const itemDiv = createElement(item);
      contentDiv.appendChild(itemDiv);
    });

    // contentDiv.appendChild(qrDiv);
    // qrDiv.appendChild(qrImg);
    // contentDiv.appendChild(infoDiv);

  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
});

