
// JSON 데이터를 가져오는 함수
async function fetchData() {
  const response = await fetch('https://journey-spaces.nyc3.digitaloceanspaces.com/hi.json');
  const data = await response.json();
  return data;
}

// "Created with\nTransloadit"에서 파생된 텍스트 필터링 함수
function isDerivedText(text) {
  const derivedTexts = ["Created", "with", "Transloadit"];
  return derivedTexts.includes(text);
}

// 데이터를 처리하고 HTML에 표시하는 함수
async function processAndDisplayData() {
  const data = await fetchData();
  const textContainer = document.getElementById('text-container');

  data.slice(1).forEach(item => {
    if (!isDerivedText(item.text)) {
      const p = document.createElement('p');
      p.textContent = item.text;
      textContainer.appendChild(p);
    }
  });
}

// 함수 호출
processAndDisplayData();
