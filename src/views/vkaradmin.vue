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
            <img id="fotopro" src="blank.png">
            <div id="cform">
                <div id="formkiri" class="kumpulan">
                    <label for="username">Username</label><br>
                    <input type="text" disabled id="username">
                    <label for="nohp">No. Hp</label><br>
                    <input type="text" disabled id="nohp">
                    <label for="toko">Toko</label><br>
                    <input type="text" disabled id="toko">
                </div>
                <div id="formkanan" class="kumpulan">
                    <label for="nama">Nama</label><br>
                    <input type="text" disabled id="nama">
                    <label for="alamat">Alamat</label><br>
                    <input type="text" disabled id="alamat">
                    <label for="role">Role</label><br>
                    <input type="text" disabled id="role">
                </div>
            </div>
            <div id="ctom" class="flexcenter">
                <div id="berhenti" class="tombol">Berhentikan</div>
                <div id="kembali" class="tombol">Kembali</div>
            </div>
        </div>
</template>

<style scoped>
#fotopro {
    width: 10vw;
    object-fit: contain;
    border-radius: 5vw;
    border: 0.25vw #ffffff solid;
}
#cform {
    display: flex;
    flex-direction: row;
    gap: 3em;
}
.kumpulan {
    display: flex;
    justify-content: center;
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
  filter: brightness(0.9);
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
#berhenti {
    background: var(--hitam);
}
#kembali {
    background: var(--hijau-2);
}
</style>