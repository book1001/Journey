// document.addEventListener('DOMContentLoaded', function() {
//   let uppyIcon1 = document.querySelectorAll('.uppy-DashboardTab-btn svg');

//   let newIconUrl = 'icon/camera.svg';

//   uppyIcon1.forEach(function(svgElement) {
//       let newIcon = document.createElement('img');
//       newIcon.src = newIconUrl;
//       newIcon.classList.add(`iconCamera`);

//       svgElement.parentNode.replaceChild(newIcon, svgElement);
//   });

// });


// 버튼을 찾기 위한 클래스 셀렉터 설정
const buttonSelector = '.uppy-u-reset.uppy-c-btn.uppy-StatusBar-actionBtn.uppy-StatusBar-actionBtn--upload.uppy-c-btn-primary';

// 버튼 요소를 찾음
const buttons = document.querySelectorAll(buttonSelector);

// 각 버튼의 텍스트를 삭제
buttons.forEach(button => {
  button.textContent = ''; // 버튼의 텍스트를 삭제
});



// ==================================================
document.querySelector('.uppy-StatusBar-actionBtn--done').addEventListener('click', function() {
  document.getElementById('failAlert').style.background = 'red';
});



function Jg(i) {
  document.getElementById('failAlert').style.background = 'red';
}