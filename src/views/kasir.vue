<script>

</script>

<template>
    <div class="sidebar">
        <div id="ciconk">
            <img src="blank.png">
            <img class="dim" src="iconk/iconk.png">
            <img class="dim aktif" src="iconk/iconk1.png">
            <img class="dim" src="iconk/iconk2.png">
            <img class="dim" src="iconk/iconk3.png">
            <img class="dim" src="iconk/iconk4.png">
            <img src="iconk/iconk5.png">
            <img src="iconk/iconk6.png">
        </div>
    </div>
    <div id="main">
        <div id="showputih">
            <p>Rp.50.000</p>
        </div>
        <div id="search">
            <input type="search" name="cari">
            <label for="cari">Cari</label>
        </div>
        <table>
            <tr id="bsatu">
                <td>No</td>
                <td>Nama Barang</td>
                <td>Harga</td>
                <td>Jumlah</td>
                <td>Total</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Milo coklat</td>
                <td>2.500</td>
                <td>2</td>
                <td>5.000</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Milo coklat</td>
                <td>2.500</td>
                <td>2</td>
                <td>5.000</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Milo coklat</td>
                <td>2.500</td>
                <td>2</td>
                <td>5.000</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Milo coklat</td>
                <td>2.500</td>
                <td>2</td>
                <td>5.000</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Milo coklat</td>
                <td>2.500</td>
                <td>2</td>
                <td>5.000</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Milo coklat</td>
                <td>2.500</td>
                <td>2</td>
                <td>5.000</td>
            </tr>
        </table>
        <input type="submit" value="Bayar">
    </div>
</template>

<style scoped>
    #ciconk img:nth-child(3)::before {
        filter: brightness(0) saturate(100%);
    }
    #main {
        padding-top: 2em;
    }
    #showputih {
        background: var(--putih);
        width: 70vw;
        height: 8vw;
        border-radius: 1em;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 4vw;
        font-size: 2em;
    }
    input[type="submit"] {
        background: var(--hijau-gelap);
        border: none;
        width: 70vw;
        height: 3.5vw;
        font-size: 1em;
        color: var(--putih);
        font-weight: bold;
        border-radius: 6px;
    }
</style>