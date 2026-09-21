document.addEventListener('DOMContentLoaded', () => {
    const followBtn = document.getElementById('followBtn');
    let isFollowing = false;

    // 팔로우 버튼 토글 이벤트
    followBtn.addEventListener('click', () => {
        isFollowing = !isFollowing;

        if (isFollowing) {
            followBtn.innerText = '팔로잉 ✓';
            followBtn.classList.add('following');
        } else {
            followBtn.innerText = '팔로우';
            followBtn.classList.remove('following');
        }
    });
});