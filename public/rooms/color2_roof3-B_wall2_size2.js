const socket = io();

const inputTop = document.getElementById('input-top');
const inputLeft = document.getElementById('input-left');
const inputCenter = document.getElementById('input-front');
const inputRight = document.getElementById('input-right');
const inputBottom = document.getElementById('input-bottom');
const numRows = 100; // 1줄에 100개 input

 // 1000개의 input 필드 동적 생성
 for (let i = 1; i <= 4200; i++) {
     const input = document.createElement('input');
     input.type = 'text';
     input.id = `input${i}`;
     input.maxLength = 1; // 한 글자만 입력 가능
     // container.appendChild(input);

   // input 필드를 적절한 div에 배치
     if (i <= 700) { // 처음 50개의 input은 inputTop에 배치 (한 줄에 50개)
         inputTop.appendChild(input);
     } else if (i > 3500) {
         inputBottom.appendChild(input);
     } else if ((i - 701) % numRows < 25) { // 100개 중 25개 왼쪽
         inputLeft.appendChild(input);
     } else if ((i - 1) % numRows < 75) { // 100개 중 50개 가운데
         inputCenter.appendChild(input);
     } else { // 나머지 25개는 오른쪽
         inputRight.appendChild(input); 
     }
   
     // 입력 이벤트 리스너 추가
     input.addEventListener('input', function() {
       this.select();
         const value = this.value;
       
         if (value.length >= 1) {
             this.classList.add('input-texted');
         } else {
             this.classList.remove('input-texted');
         }

         if (value.length >= 1) {
             // 현재 input에 기존 텍스트를 대체
             // this.value = value.charAt(0);
           
             // 서버에 데이터 전송
             socket.emit('new_data2', { id: input.id, value: this.value });

             // 다음 input으로 포커스 이동
             const nextInput = document.getElementById(`input${i + 1}`);
             if (nextInput) {
               this.select();
               nextInput.focus();
               // this.value = value.charAt(0);
             }
         }
     });


   // 포커스 이벤트 리스너 추가
     input.addEventListener('focus', function() {
         this.select();
         socket.emit('focus_change2', { id: this.id, focused: true });
         this.classList.add('focused');
     });

     input.addEventListener('blur', function() {
         socket.emit('focus_change2', { id: this.id, focused: false });
         this.classList.remove('focused');
     });

   // 백스페이스 키를 눌렀을 때 이전 input 필드 선택 및 텍스트 삭제
     input.addEventListener('keydown', function(e) {
         if (e.key === 'Backspace') {
             e.preventDefault(); // 기본 백스페이스 동작 방지
             const value = this.value;
             if (value.length >= 0) {
                 // 현재 input 필드의 텍스트 삭제
                 this.value = '';
                 this.classList.remove('input-texted');

                 // 삭제된 텍스트를 서버에 전송
                 socket.emit('delete_data2', { id: this.id, deletedText: value });

                 // 이전 input 필드로 포커스 이동
                 const prevInput = document.getElementById(`input${i - 1}`);
                 if (prevInput) {
                     prevInput.focus();
                     prevInput.setSelectionRange(0, prevInput.value.length); // 전체 텍스트 선택
                 }
             }
         } else if (e.key === 'ArrowRight') {
             e.preventDefault(); // 기본 화살표 키 동작 방지
             const nextInput = document.getElementById(`input${i + 1}`);
             if (nextInput) {
                 nextInput.focus();
             }
         } else if (e.key === 'ArrowLeft') {
             e.preventDefault(); // 기본 화살표 키 동작 방지
             const prevInput = document.getElementById(`input${i - 1}`);
             if (prevInput) {
                 prevInput.focus();
             }
         } else if (e.key === 'ArrowUp') {
             e.preventDefault(); // 기본 화살표 키 동작 방지
             let upInput;
             if (i >= 726 && i <= 775) {
               upInput = document.getElementById(`input${i - 75}`);
             } else if (i >= 3501 && i <= 3550) {
               upInput = document.getElementById(`input${i - 75}`);
             } else if (i >= 1 && i <= 700) {
               upInput = document.getElementById(`input${i - 50}`);
             } else if (i >= 3501 && i <= 4200) {
               upInput = document.getElementById(`input${i - 50}`);
             } else {
               upInput = document.getElementById(`input${i - numRows}`);
             }
             if (upInput) {
               upInput.focus();
             }
         } else if (e.key === 'ArrowDown') {
             e.preventDefault(); // 기본 화살표 키 동작 방지
             let downInput;
             if (i >= 651 && i <= 700) {
                 downInput = document.getElementById(`input${i + 75}`);
             } else if (i >= 3426 && i <= 3475) {
                 downInput = document.getElementById(`input${i + 75}`);
             } else if (i >= 1 && i <= 700) {
                 downInput = document.getElementById(`input${i + 50}`);
             } else if (i >= 3501 && i <= 4200) {
                 downInput = document.getElementById(`input${i + 50}`);
             } else {
                 downInput = document.getElementById(`input${i + numRows}`);
             }
             if (downInput) {
                 downInput.focus();
             }
         }
     });
 }



 // 서버에서 초기 데이터를 받아 input 필드에 반영
 socket.on('update_data2', function(data) {
     for (let i = 1; i <= 4200; i++) {
       const inputField = document.getElementById(`input${i}`);
       inputField.value = data[`input${i}`] || '';
       
       // 데이터가 있으면 .input-texted 클래스 추가
       if (inputField.value.trim() !== '') {
           inputField.classList.add('input-texted');
       } else {
           inputField.classList.remove('input-texted');
       }
   }
 });

// 서버에서 포커스 상태 업데이트 받기
 socket.on('focus_change2', function(data) {
     const input = document.getElementById(data.id);
     if (input) {
         if (data.focused) {
             input.classList.add('focused');
         } else {
             input.classList.remove('focused');
         }
     }
 });

// 서버에서 삭제된 텍스트 데이터 받아오기
 socket.on('delete_data2', function(data) {
     const input = document.getElementById(data.id);
     if (input) {
       input.value = ''; // 삭제된 텍스트를 현재 필드에서 삭제
       input.classList.remove('input-texted');
     }
 });



//        function updatePerspective() {
//             const wrapperWall = document.querySelector('.wrapper-wall');
//             const wrapper = document.querySelector('.wrapper');
//             const windowWidth = window.innerWidth;

//             // 기본 perspective는 500px, 창 너비에 따라 조정
//             let newPerspective = 500; // 기본값

//             // 창 너비가 800px보다 클 경우 perspective 값 증가
//             if (windowWidth > 800) {
//                 newPerspective = 500 - (windowWidth - 800) / 2;
//             }

//             // perspective 값을 최소 300px로 제한
//             newPerspective = Math.max(100, newPerspective);

//             // perspective 값을 .wrapper-wall와 .wrapper에 적용
//             wrapperWall.style.perspective = `${newPerspective}px`;
//             wrapper.style.perspective = `${newPerspective}px`;
//         }

//         // 초기 perspective 설정
//         updatePerspective();

//         // 창 크기가 변경될 때마다 perspective 업데이트
//         window.addEventListener('resize', updatePerspective);