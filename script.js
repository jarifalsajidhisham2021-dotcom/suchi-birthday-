// Show Countdown Section
document.getElementById('countdown-section').style.display = 'block';

// Countdown logic
const countdownDate = new Date('Jan 8, 2026 00:00:00').getTime();
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2,'0');
    document.getElementById('hours').innerText = hours.toString().padStart(2,'0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2,'0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2,'0');

    if(distance <= 0){
        clearInterval(countdownInterval);
        document.getElementById('countdown-section').style.display = 'none';
        document.getElementById('photos-section').style.display = 'block';
        loadPhotos();
    }
}, 1000);

// Load 20 photos
function loadPhotos() {
    const gallery = document.getElementById('photo-gallery');
    for(let i=1;i<=20;i++){
        const img = document.createElement('img');
        img.src = `images/photo${i}.jpg`;
        img.alt = `Photo ${i}`;
        gallery.appendChild(img);
    }
}

// Continue button for message
document.getElementById('continue-btn').addEventListener('click', () => {
    document.getElementById('photos-section').style.display = 'none';
    document.getElementById('message-section').style.display = 'none';
    document.getElementById('cake-section').style.display = 'block';
});

// Blow candle
document.getElementById('blow-btn').addEventListener('click', () => {
    document.getElementById('candle').style.display = 'none';
    const music = document.getElementById('birthday-music');
    music.play();
});
