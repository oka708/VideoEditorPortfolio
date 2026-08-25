document.addEventListener("DOMContentLoaded", () => {
    // Memilih semua container yang memiliki video
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        const indicator = container.querySelector('.play-indicator');
        
        // Jika tidak ada video di dalam kotak (seperti kotak KSF yang isinya cuma gambar), lewati.
        if(!video) return;

        // Logika Klik untuk Play / Pause
        container.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                container.classList.add('playing');
            } else {
                video.pause();
                container.classList.remove('playing');
                // Mengubah teks saat dijeda
                if(indicator) indicator.textContent = "Click to Resume";
            }
        });

        // Mengembalikan teks awal jika video selesai (looping biasanya tidak butuh ini, tapi untuk jaga-jaga)
        video.addEventListener('ended', () => {
            container.classList.remove('playing');
            if(indicator) indicator.textContent = "Click to Play";
        });
    });
});