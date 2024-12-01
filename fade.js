document.addEventListener("DOMContentLoaded", () => {
    const contentContainer = document.querySelector('.content-container');
    const introAnimation = document.querySelector('.intro-animation');
    const mainContainer = document.querySelector('.main-container');

    // 애니메이션이 끝난 후 실행
    setTimeout(() => {
        contentContainer.style.display = 'block'; // 콘텐츠 표시
        introAnimation.style.display = 'none'; // 인트로 숨김
    }, 5000); // 인트로 애니메이션 시간에 맞춤

    // 콘텐츠 숨김 (추가 효과)
    setTimeout(() => {
        document.body.style.overflow = 'auto'; // 스크롤 활성화
        contentContainer.style.display = 'none'; // 콘텐츠 숨김
        mainContainer.classList.remove('hidden');
        document.body.classList.remove('intro-body');
    }, 10000); // 콘텐츠 페이드아웃 애니메이션과 맞춤
});