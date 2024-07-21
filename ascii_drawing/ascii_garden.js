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