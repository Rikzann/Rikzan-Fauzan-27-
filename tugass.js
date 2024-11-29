document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah pengiriman form secara default

  // Mendapatkan nilai username dan password dari input
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Validasi sederhana
  if (username === "rikzan" && password === "0000") {
    // Jika login berhasil, redirect ke halaman lain
    window.location.href = "dashboard.html"; // Ganti dengan halaman dashboard
  } else {
    // Jika login gagal, tampilkan pesan error di elemen errorMessage
    document.getElementById('errorMessage').innerText = "Username atau password salah!";
  }
});