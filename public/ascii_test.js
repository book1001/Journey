
// JSON 데이터를 가져오는 함수
async function fetchData() {
  // const response = await fetch('https://journey-spaces.nyc3.digitaloceanspaces.com/hi.json');
  const response = await fetch('db_test.json');
  const data = await response.json();
  return data;
}

// "Created with\nTransloadit"에서 파생된 텍스트 필터링 함수
function isDerivedText(text) {
  const derivedTexts = ["Created", "with", "Transloadit"];
  return derivedTexts.includes(text);
}

// 랜덤한 요소를 선택하는 함수
function getRandomElement(elements) {
  return elements[Math.floor(Math.random() * elements.length)];
}

// 랜덤한 클래스 이름을 생성하는 함수
function randomRoof() {
  const classes = ['roof1', 'roof2', 'roof3'];
  return getRandomElement(classes);
}

function randomText() {
  const classes = ['text1', 'text2', 'text3'];
  return getRandomElement(classes);
}

function randomWall() {
  const classes = ['wall1', 'wall2', 'wall3'];
  return getRandomElement(classes);
}

// 데이터를 처리하고 HTML에 표시하는 함수
async function processAndDisplayData() {
  const data = await fetchData();
  const contentDiv = document.getElementById('content');
  
  data.slice(1).forEach(item => {
    if (!isDerivedText(item.text)) {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');

      const roofDiv = document.createElement('div');
      roofDiv.classList.add(randomRoof());
      roofDiv.textContent 
      = `░░░░░░░░░░░░
      ░░░░░░░░░░░░░░░░░░░░░░░
      ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`;

      const textDiv = document.createElement('div');
      textDiv.textContent = item.text;
      textDiv.classList.add(randomText());

      const wallDiv = document.createElement('div');
      wallDiv.classList.add(randomWall());
      wallDiv.textContent 
      = '▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█▓▓█';


      // itemDiv.classList.add('item', getRandomClass()); // 랜덤한 클래스 추가
      contentDiv.appendChild(itemDiv);
      itemDiv.appendChild(roofDiv);
      itemDiv.appendChild(textDiv);
      itemDiv.appendChild(wallDiv);
    }
  });
}

// 함수 호출
processAndDisplayData();
