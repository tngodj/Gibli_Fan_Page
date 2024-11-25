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