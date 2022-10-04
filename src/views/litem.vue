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
        <div id="catas">
            <div id="search">
                <input type="search" name="cari">
                <label for="cari">Cari</label>
            </div>
            <div id="tbarang">Tambah Barang<!--atau pegawai--></div>
        </div>
        <table>
            <tr id="bsatu">
                <td>No</td>
                <td>Nama Barang</td>
                <td>Kategori</td>
                <td>Satuan</td>
                <td>Harga</td>
                <td>Modal</td>
                <td>Stock</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Chocolatos</td>
                <td>Makanan</td>
                <td>PCS</td>
                <td>1.000</td>
                <td>2.500</td>
                <td>2</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Nabati Wafer</td>
                <td>Makanan</td>
                <td>PCS</td>
                <td>6.500</td>
                <td>2.500</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Wafello</td>
                <td>Makanan</td>
                <td>PCS</td>
                <td>6.500</td>
                <td>2.500</td>
                <td>2</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Superstar Choco</td>
                <td>Makanan</td>
                <td>PCS</td>
                <td>1.000</td>
                <td>2.500</td>
                <td>2</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Tanggo</td>
                <td>Makanan</td>
                <td>PCS</td>
                <td>1.500</td>
                <td>2.500</td>
                <td>2</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Cheetos</td>
                <td>Makanan</td>
                <td>PCS</td>
                <td>1.500</td>
                <td>2.500</td>
                <td>2</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Bear Brand</td>
                <td>Makanan</td>
                <td>PCS</td>
                <td>9.500</td>
                <td>2.500</td>
                <td>2</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Yakult</td>
                <td>Minuman</td>
                <td>PCS</td>
                <td>2.500</td>
                <td>2.500</td>
                <td>2</td>
            </tr>
            <tr>
                <td>9</td>
                <td>Fruit Tea</td>
                <td>Minuman</td>
                <td>PCS</td>
                <td>4.000</td>
                <td>2.500</td>
                <td>2</td>
            </tr>
            <tr>
                <td>10</td>
                <td>Milk U</td>
                <td>Minuman</td>
                <td>PCS</td>
                <td>3.500</td>
                <td>2.500</td>
                <td>2</td>
            </tr>
            <tr>
                <td>11</td>
                <td>Good Day Coffee</td>
                <td>Minuman</td>
                <td>PCS</td>
                <td>8.500</td>
                <td>2.500</td>
                <td>2</td>
            </tr>
            <tr>
                <td>12</td>
                <td>Ovaltine</td>
                <td>Minuman</td>
                <td>PCS</td>
                <td>2.500</td>
                <td>2.500</td>
                <td>2</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
#catas {
  display: flex;
  gap: 3em;
}
#tbarang {
  height: 2.5vw;
  width: 15vw;
  background: var(--biru);
  color: var(--putih);
  border-radius: 6px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
}
table td {
    width: 9vw;
}
</style>