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



// ======================================================
// Window Size Change (Temp)
// ======================================================

const frontElement = document.querySelector('.front');
const MIN_WIDTH = 800;
const MIN_HEIGHT = 784;
const MAX_TRANSLATE_Z = -50;

function adjustTransform() {
  const widthRatio = Math.min(window.innerWidth / MIN_WIDTH, 1);
  const heightRatio = Math.min(window.innerHeight / MIN_HEIGHT, 1);

  // translateZ 값 계산 (비례해서 줄어듦)
  const newTranslateZ = MAX_TRANSLATE_Z * Math.min(widthRatio, heightRatio) + 10;

  frontElement.style.transform = `rotateX(0deg) translateZ(${newTranslateZ}vh)`;
}

// 창 크기 변경 시 이벤트 등록
window.addEventListener('resize', adjustTransform);

// 페이지 로드 시 초기 transform 설정
window.addEventListener('load', adjustTransform);
