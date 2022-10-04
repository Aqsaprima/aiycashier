<script>

</script>

<template>
    <div class="sidebar">
        <div id="ciconk">
            <img src="blank.png">
            <img class="dim" src="iconk/iconk.png">
            <img class="dim" src="iconk/iconk1.png">
            <img class="dim" src="iconk/iconk2.png">
            <img class="dim aktif" src="iconk/iconk3.png">
            <img class="dim" src="iconk/iconk4.png">
            <img src="iconk/iconk5.png">
            <img src="iconk/iconk6.png">
        </div>
    </div>
        <div id="main">
        <h1>Tambah Barang</h1>
            <div id="cform">
                <div id="formkiri" class="kumpulan">
                    <label for="nama">Nama</label><br>
                    <input type="text" id="nama">
                    <label for="kategori">Kategori</label><br>
                    <input type="text" id="kategori">
                    <label for="satuan">Satuan</label><br>
                    <input type="text" id="satuan">
                </div>
                <div id="formkanan" class="kumpulan">
                    <label for="modal">Modal</label><br>
                    <input type="text" id="modal">
                    <label for="harga">Harga</label><br>
                    <input type="text" id="harga">
                    <label for="stok">Stok</label><br>
                    <input type="text" id="stok">
                </div>
            </div>
        <div id="ctom" class="flexcenter">
            <div id="tbarang" class="tombol">Tambah Barang</div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: bold;
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
}
input:disabled {
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
#tbarang {
    background: var(--hijau-2);
}
</style>