function isMobileOrTablet() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // 모바일 및 태블릿 디바이스 감지
  if (/android/i.test(userAgent)) {
    return true; // 안드로이드 디바이스
  }

  // iOS 디바이스 (iPad, iPhone, iPod)
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return true; // iOS 디바이스
  }

  return false; // 데스크탑이나 비모바일 디바이스
}

// pointer-events 적용 함수
function updatePointerEvents() {
  const houseElement = document.querySelector('.house');

  if (isMobileOrTablet()) {
    houseElement.style.pointerEvents = 'none'; // 모바일 및 태블릿에서는 클릭 비활성화
  } else {
    houseElement.style.pointerEvents = 'auto'; // 데스크탑에서는 클릭 활성화
  }
}

// 초기 로딩 시 한 번 실행
updatePointerEvents();
