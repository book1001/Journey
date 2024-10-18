// const { io } = require("socket.io-client");
const socket = io();

socket.on("connect_error", (err) => {
  // the reason of the error, for example "xhr poll error"
  console.log(err.message);

  // some additional description, for example the status code of the initial HTTP response
  console.log(err.description);

  // some additional context, for example the XMLHttpRequest object
  console.log(err.context);
});

socket.on("connect", () => {
  const transport = socket.io.engine.transport.name; // in most cases, "polling"

  socket.io.engine.on("upgrade", () => {
    const upgradedTransport = socket.io.engine.transport.name; // in most cases, "websocket"
  });
});

const fileName = window.location.pathname.split('/').pop().split('.').shift();
    console.log("Current File Name: " + fileName);  // For debugging

const inputTop = document.getElementById('input-top');
const inputLeft = document.getElementById('input-left');
const inputCenter = document.getElementById('input-front');
const inputRight = document.getElementById('input-right');
const inputBottom = document.getElementById('input-bottom');
const numRows = 100; // 1줄에 100개 input

// 4200개의 input 필드 동적 생성
for (let i = 1; i <= 4200; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = `input${i}`;
    input.maxLength = 1; // 한 글자만 입력 가능

    // input 필드를 적절한 div에 배치
    if (i <= 700) { 
        inputTop.appendChild(input);
    } else if (i > 3500) {
        inputBottom.appendChild(input);
    } else if ((i - 701) % numRows < 25) { 
        inputLeft.appendChild(input);
    } else if ((i - 1) % numRows < 75) { 
        inputCenter.appendChild(input);
    } else { 
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
            socket.emit(`new_data_${fileName}`, { id: input.id, value: this.value });

            const nextInput = document.getElementById(`input${i + 1}`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    });

    // 포커스 이벤트 리스너 추가
    input.addEventListener('focus', function() {
        this.select();
        socket.emit(`focus_change_${fileName}`, { id: this.id, focused: true });
        this.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        socket.emit(`focus_change_${fileName}`, { id: this.id, focused: false });
        this.classList.remove('focused');
    });

    // 백스페이스 키를 눌렀을 때 처리
    input.addEventListener('keydown', function(e) {
          if (e.key === 'Backspace') {
              e.preventDefault();
              const value = this.value;
              if (value.length >= 0) {
                  this.value = '';
                  this.classList.remove('input-texted');
                  socket.emit(`delete_data_${fileName}`, { id: this.id });
                  const prevInput = document.getElementById(`input${i - 1}`);
                  if (prevInput) {
                      prevInput.focus();
                      prevInput.setSelectionRange(0, prevInput.value.length);
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
socket.on(`update_data_${fileName}`, function(data) {
    for (let i = 1; i <= 4200; i++) {
        const inputField = document.getElementById(`input${i}`);
        inputField.value = data[`input${i}`] || '';
        
        if (inputField.value.trim() !== '') {
            inputField.classList.add('input-texted');
        } else {
            inputField.classList.remove('input-texted');
        }
    }
});

// 서버에서 포커스 상태 업데이트 받기
socket.on(`focus_change_${fileName}`, function(data) {
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
socket.on(`delete_data_${fileName}`, function(data) {

  console.log("connection: " + socket.connected); // true
    const input = document.getElementById(data.id);
    if (input) {
        input.value = ''; // 삭제된 텍스트를 현재 필드에서 삭제
        input.classList.remove('input-texted');
    }
});




