document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('play-btn');
    const audio = document.getElementById('bg-audio');
    const envelope = document.getElementById('envelope');

    playBtn.addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.log('Audio playback failed:', error);
        });
        playBtn.style.display = 'none';
    });

    envelope.addEventListener('click', function() {
        envelope.classList.toggle('open');
    });

    // Floating hearts animation
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (4 + Math.random() * 2) + 's';
        heart.innerText = ['💖','💕','💗','💘','💝','❤️'][Math.floor(Math.random()*6)];
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }
    setInterval(createHeart, 800);
});