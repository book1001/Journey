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