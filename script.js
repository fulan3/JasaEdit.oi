function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

// Mengambil elemen tombol dengan kelas 'btn'
const btn = document.querySelector('.btn');


// Menambahkan event listener pada tombol
btn.addEventListener('click', function() {
    // Mengarahkan pengguna ke URL yang diinginkan saat tombol diklik
    window.location.href = 'TAB/MINAT.html'; // Ganti URL dengan tujuan Anda
});

    // Mengambil elemen tombol pertama dengan kelas 'btn'
    const btn1 = document.getElementById('btn1');

    // Menambahkan event listener pada tombol pertama
    btn1.addEventListener('click', function() {
        // Lakukan aksi atau perubahan yang diinginkan pada tombol pertama
        window.location.href = 'TAB/MINAT.html'; // Ganti dengan URL/halaman yang diinginkan untuk tombol pertama
    });

        // Mengambil elemen tombol pertama dengan kelas 'btn'
        const btn2 = document.getElementById('btn2');

        // Menambahkan event listener pada tombol pertama
        btn2.addEventListener('click', function() {
            // Lakukan aksi atau perubahan yang diinginkan pada tombol pertama
            window.location.href = 'TAB/MINAT.html'; // Ganti dengan URL/halaman yang diinginkan untuk tombol pertama
        });