// menangkap event scroll
window.addEventListener("scroll", muncul);

// fungsi untuk memberikan efek elemen muncul ketika scroll
function muncul() {
  // menangkap setiap tag dengan class elemen
  let elements = document.querySelectorAll(".elemen");
  //perulangan untuk setiap tag dengan class elemen
  for (let i = 0; i < elements.length; i++) {
    //   mengambil ukuran tinggi layar
    let tinggiLayar = window.innerHeight;
    //menangkap ukuran elemen dan posisinya relatif terhadap viewport
    let jarakAtasElemen = elements[i].getBoundingClientRect().top;
    // menentukan ukuran scroll untuk memunculkan elemen
    let ukuranScroll = 150;
    // jika jarak atas elemen kurang dari tinggi layar dikurangi ukuran scroll maka tambahkan class tampil di setiap tag dengan class elemen
    if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
      elements[i].classList.add("tampil");
    }
    // jika tidak maka hapus class tampil
    else {
      elements[i].classList.remove("tampil");
    }
  }
}
