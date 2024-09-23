// ======================================================
// Tiling
// ======================================================

const elements = [
  { div: document.querySelector('#wallpaper-top'), repeat: 4000, pattern1: 'pattern-R1', pattern2: 'pattern-R2', repeatPattern1: 4, repeatPattern2: 5 },
  { div: document.querySelector('#wallpaper-left'), repeat: 8000, pattern1: 'pattern-W1', pattern2: 'pattern-W2', repeatPattern1: 4, repeatPattern2: 5 },
  { div: document.querySelector('#wallpaper-right'), repeat: 8000, pattern1: 'pattern-W1', pattern2: 'pattern-W2', repeatPattern1: 4, repeatPattern2: 5 },
  { div: document.querySelector('#wallpaper-bottom'), repeat: 4000, pattern1: 'pattern-W1', pattern2: 'pattern-W2', repeatPattern1: 4, repeatPattern2: 5 }
];

function createTiles(div, repeat, pattern1, pattern2, repeatPattern1, repeatPattern2) {
  if (!div) return;

  const totalPatternLength = repeatPattern1 + repeatPattern2;

  for (let i = 0; i < repeat; i++) {
    const tile = document.createElement('div');
    // Apply pattern1 for repeatPattern1 times, pattern2 for repeatPattern2 times
    tile.classList.add('tile', i % totalPatternLength < repeatPattern1 ? pattern1 : pattern2);
    div.appendChild(tile);
  }
}

elements.forEach(({ div, repeat, pattern1, pattern2, repeatPattern1, repeatPattern2 }) => 
  createTiles(div, repeat, pattern1, pattern2, repeatPattern1, repeatPattern2)
);


// const elements = [
//     { div: document.querySelector('#wallpaper-top'), repeat: 4000, pattern1: 'pattern-R1', pattern2: 'pattern-R2' },
//     { div: document.querySelector('#wallpaper-left'), repeat: 8000, pattern1: 'pattern-W1', pattern2: 'pattern-W2' },
//     { div: document.querySelector('#wallpaper-right'), repeat: 8000, pattern1: 'pattern-W1', pattern2: 'pattern-W2' },
//     { div: document.querySelector('#wallpaper-bottom'), repeat: 4000, pattern1: 'pattern-W1', pattern2: 'pattern-W2' }
//   ];

//   const patternLength = 8;

//   function createTiles(div, repeat, pattern1, pattern2) {
//     if (!div) return;

//     for (let i = 0; i < repeat; i++) {
//       const tile = document.createElement('div');
//       tile.classList.add('tile', i % patternLength < 4 ? pattern1 : pattern2);
//       div.appendChild(tile);
//     }
//   }

//   elements.forEach(({ div, repeat, pattern1, pattern2 }) => 
//     createTiles(div, repeat, pattern1, pattern2)
//   );