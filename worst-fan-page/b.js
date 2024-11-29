const images = [
    'totoro.jpeg',
    'cat.jpg',
    'haul.jpg',
    'sen.jpg',
    'ponyo.jpg',
    'laputa.jpg'
];
const imageLinks = [
    'https://tngodj.github.io/Totoro/', // '1.jpg'에 연결된 링크
    'https://tngodj.github.io/Cat/', // '7.jpg'에 연결된 링크
    'https://tngodj.github.io/Haul/', // '3.jpeg'에 연결된 링크
    'https://tngodj.github.io/Sen-Chihiro/', // '4.jpg'에 연결된 링크
    'https://tngodj.github.io/Ponyo/',  // '5.jpg'에 연결된 링크
    'https://tngodj.github.io/Laputa/' // '6.jpg'에 연결된 링크
];


let currentIndex = 0;
const carouselImage = document.getElementById('carouselImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const clickSound = new Audio('cllick.m4a'); // 효과음 파일 경로

// 이미지 업데이트 함수
function updateImage() {
    carouselImage.style.opacity = 0;  // 페이드 아웃 효과
    setTimeout(() => {
        carouselImage.src = images[currentIndex];
        carouselImage.style.opacity = 1;  // 페이드 인 효과
    }, 200);  // 0.2초 후에 이미지 전환
}

// 사운드 재생 함수
function playClickSound() {
    clickSound.currentTime = 0;  // 재생 위치 초기화
    clickSound.play();
}

// 이전 이미지로 이동
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
    playClickSound();
});

// 다음 이미지로 이동
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
    playClickSound();
});
// 이미지 클릭 시 새로운 페이지로 이동
carouselImage.addEventListener('click', () => {
    window.location.href = imageLinks[currentIndex];
});
// 클릭된 버튼 ID를 저장하는 Set
let clickedButtons = new Set();

// 드롭다운 메뉴 표시/숨김
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-menu');
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "flex"; // 메뉴 보이기
    } else {
        dropdown.style.display = "none"; // 메뉴 숨기기
    }
}

// 서브 버튼 클릭 처리
function clickSubButton(buttonId) {
    switch (buttonId) {
        case 1:
            window.location.href = "https://tngodj.github.io/Gibli-WorldCup-Main/"; // 버튼 1 클릭 시 이동할 URL
            break;
        case 2:
            window.location.href = "https://example.com/page2"; // 버튼 2 클릭 시 이동할 URL
            break;
        case 3:
            window.location.href = "https://example.com/page3"; // 버튼 3 클릭 시 이동할 URL
            break;
        default:
            console.error("잘못된 버튼 ID입니다."); // 디버그용
    }
};
