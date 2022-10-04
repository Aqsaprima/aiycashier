<script>

</script>

<template>
    <div class="sidebar">
        <div id="ciconk">
            <img src="blank.png">
            <img class="dim" src="iconk/iconk.png">
            <img class="dim" src="iconk/iconk1.png">
            <img class="dim aktif" src="iconk/iconk2.png">
            <img class="dim" src="iconk/iconk3.png">
            <img class="dim" src="iconk/iconk4.png">
            <img src="iconk/iconk5.png">
            <img src="iconk/iconk6.png">
        </div>
    </div>
        <div id="main">
        <h1>Tambah User Baru</h1>
        <div id="cform">
            <label for="username">Username</label><br>
            <input type="text" id="username">
            <label for="password">Password</label><br>
            <input type="text" id="password">
            <label for="role">Role</label><br>
            <input type="text" id="role">
        </div>
        <div id="ctom" class="flexcenter">
            <div id="tambah" class="tombol">Tambah User</div>
            <div id="kembali" class="tombol">Kembali</div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: bold;
}
#cform {
    display: flex;
    flex-direction: column;
}
label {
  color: white;
  font-weight: bold;
  padding-left: 0.1em;
}
input[type="text"] {
  height: 2.5vw;
  border-radius: 5px;
  margin: 0.4vw 0 1.5vw 0;
  background: white;
  width: 45vw;
}
.tombol {
  width: 30vw;
  height: 3.5vw;
  border-radius: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.1em;
  color: white;
}
#ctom {
    display: flex;
    flex-direction: column;
    gap: 1em;
}
#tambah {
    background: var(--hitam);
}
#kembali {
    background: var(--hijau-2);
}
</style>