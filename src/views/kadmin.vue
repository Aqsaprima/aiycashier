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
        <div id="catas">
            <div id="search">
                <input type="search" name="cari">
                <label for="cari">Cari</label>
            </div>
            <div id="tkaryawan">Tambah Karyawan<!--atau pegawai--></div>
        </div>
        <table>
            <tr id="bsatu">
                <td>No</td>
                <td>Username</td>
                <td>Nama</td>
                <td>Role</td>
            </tr>
            <tr>
                <td>1</td>
                <td><img src="blank.png">desymeters</td>
                <td>Desy Rahma</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>2</td>
                <td><img src="blank.png">hendro</td>
                <td>Desy Rahma</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>3</td>
                <td><img src="blank.png">iqbal al ayubbi</td>
                <td>Desy Rahma</td>
                <td>User</td>
            </tr>
            <tr>
                <td>4</td>
                <td><img src="blank.png">yudhistira</td>
                <td>Desy Rahma</td>
                <td>User</td>
            </tr>
            <tr>
                <td>5</td>
                <td><img src="blank.png">desymeters</td>
                <td>Desy Rahma</td>
                <td>User</td>
            </tr>
            <tr>
                <td>6</td>
                <td><img src="blank.png">desymeters</td>
                <td>Desy Rahma</td>
                <td>User</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
#catas {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
}
#tkaryawan {
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
table {
    width: calc( 61vw + 2em);
}
table td {
    height: 3.7vw;
    width: 15vw;
}
table img {
    height: 5vh;
    object-fit: contain;
    border-radius: 1em;
    vertical-align: middle;
    margin-right: 1em;
}
tr td:nth-child(1) {
    width: 5vw;
}
tr td:nth-child(2) {
    width: 15vw;
    text-align: left;
    padding-left: 3.5em;
}
</style>