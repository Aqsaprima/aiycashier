<script>

</script>

<template>
    <div class="sidebar">
        <div id="ciconk">
            <img src="blank.png">
            <img class="dim aktif" src="iconk/iconk.png">
            <img class="dim" src="iconk/iconk1.png">
            <img class="dim" src="iconk/iconk2.png">
            <img class="dim" src="iconk/iconk3.png">
            <img class="dim" src="iconk/iconk4.png">
            <img src="iconk/iconk5.png">
            <img src="iconk/iconk6.png">
        </div>
    </div>
    <div id="main">
        <div id="tkotak" class="flexcenter">
            <div class="flexcenter">
                <img src="dash1.png">
                <p><span>Laba</span><br>Rp. 50.000</p>
            </div>
            <div class="flexcenter">
                <img src="dash2.png">
                <p><span>Terjual</span><br>120 item</p>
            </div>
            <div class="flexcenter">
                <img src="dash3.png">
                <p><span>Barang</span><br>500 item</p>
            </div>
        </div>
        <div id="diket" class="flexcenter">
            <div id="search">
                <input type="search" name="cari">
                <label for="cari">Cari</label>
            </div>
            <div id="tgl" class="flexcenter">
                <p>DD/MM/YYYY</p>
                <img src="date.png">
            </div>
        </div>
        <table>
            <tr id="bsatu">
                <td>No</td>
                <td>Tanggal</td>
                <td>Nama</td>
                <td>Harga</td>
                <td>Jumlah</td>
                <td>Total</td>
            </tr>
            <tr>
                <td>1</td>
                <td>12/03/2022 18:00</td>
                <td>Frisian Flag</td>
                <td>8.500</td>
                <td>2</td>
                <td>17.000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>12/03/2022 18:00</td>
                <td>Good Day Coffee</td>
                <td>18.000</td>
                <td>2</td>
                <td>36.000</td>
            </tr>
            <tr>
                <td>3</td>
                <td>12/03/2022 18:00</td>
                <td>Ovaltine</td>
                <td>20.000</td>
                <td>2</td>
                <td>40.000</td>
            </tr>
            <tr>
                <td>4</td>
                <td>12/03/2022 18:00</td>
                <td>Pop Ice</td>
                <td>10.500</td>
                <td>2</td>
                <td>21.000</td>
            </tr>
            <tr>
                <td>5</td>
                <td>12/03/2022 18:00</td>
                <td>Teh Sisri</td>
                <td>7.500</td>
                <td>2</td>
                <td>15.000</td>
            </tr>
            <tr>
                <td>6</td>
                <td>12/03/2022 18:00</td>
                <td>Tea Jus</td>
                <td>7.500</td>
                <td>2</td>
                <td>15.000</td>
            </tr>
            <tr>
                <td>7</td>
                <td>12/03/2022 18:00</td>
                <td>Milo Sachet</td>
                <td>18.500</td>
                <td>2</td>
                <td>37.000</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
#tkotak {
  gap: 2em;
  width: 80vw;
  justify-content: space-evenly;
}
#tkotak > div {
  background: var(--hijau-gelap);
  width: 20vw;
  height: 10vw;
  justify-content: space-evenly;
  border-radius: 1em;
  color: #fff;
  font-size: 1.3em;
}
#tkotak > div span {
  font-weight: 600;
  font-size: 1.1em;
}
#diket {
  width: 70vw;
  justify-content: space-evenly;
}
#tgl {
  background: var(--putih);
  width: 16vw;
  height: 2.5vw;
  border-radius: 5px;
  gap: 1em;
}
#tgl p {
    font-size: 0.9em;
} 
#tgl img {
  height: 1.5vw;
}
table tr td:nth-child(5) {
  width: 4vw;
}
</style>