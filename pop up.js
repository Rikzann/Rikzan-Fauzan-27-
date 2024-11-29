function showDialog() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                document.getElementById('popup').style.display = 'flex';
                return false; // Mencegah form dari submit
            }
            return true; // Jika tidak ada username/password, lanjutkan submit
        }

        function confirmLogin() {
            window.location.href = 'kelompok1.html'; 
        }

        function closeDialog() {
            document.getElementById('popup').style.display = 'none';
        }