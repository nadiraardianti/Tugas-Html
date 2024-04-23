alert ('Hi everybody! Welcome to my website please click OK to continue')

document.addEventListener('DOMContentLoaded', function () {
    // Perubahan gaya saat hover pada menu
    const menuItems = document.querySelectorAll('.nav ul li a');
    menuItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            this.style.color = 'black'; // Ubah warna teks saat hover
        });
        item.addEventListener('mouseout', function() {
            this.style.color = ''; // Kembalikan ke warna asli
        });
    });
});

    // Tambahkan event listener ke gambar di gallery
    const galleryImages = document.querySelectorAll('.Gallery img');
    galleryImages.forEach(function(image) {
        image.addEventListener('click', function() {
            alert('photo by: Nadira Ardianti : ' + this.alt);
        });
    });
