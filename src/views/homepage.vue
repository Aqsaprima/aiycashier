<script setup>
</script>

<template>
  <img class="logoatas" src="logo.png">
  <div id="atas">
    <p>Beranda</p>
    <p>Tentang</p>
    <p>Fitur</p>
    <RouterLink to="/login"><div id="log" class="tombol ttombol">Masuk</div></RouterLink>
    <RouterLink to="/signup"><div id="sign" class="tombol ttombol">Daftar</div></RouterLink>
  </div>
  <div id="hvpart1">
    <div id="pt1clear">
      <h1>Buat Kasir Online Digital<br> Pertamamu</h1>
      <p>Buka usahamu mulai dari nol dan lakukanlah transaksi sebanyak mungkin untuk mendapatkan keuntungan maksimal</p>
      <div id="btoko" class="ttombol">Buka Toko</div>
    </div>
  </div>
  <div id="hvpart2">
    <div id="putihtengah">
      <div><p>Pengguna</p><span>+200</span></div>
      <div><p>Karyawan</p><span>+200</span></div>
      <div><p>Keuntungan</p><span>20 Jt</span></div>
    </div>
    <h1>Fitur</h1>
    <div id="baris">
      <div class="kputih">
        <span class="judul">Pembayaran Mudah</span>
        <p>AiyChasier support pembayaran bank dan e-wallet seperti berikut :</p>
        <div id="cards">
          <img class="ccard" src="cards/bri.png">
          <img class="ccard" src="cards/mandiri.png">
          <img class="ccard" src="cards/bca.png">
          <img class="ccard" src="cards/bni.png">
          <img class="ccard" src="cards/gopay.png">
        </div>
      </div>
      <div class="kputih">
        <span class="judul">Kelola Karyawan dengan Mudah</span>
        <p> AiyChasier memiliki fitur kelola karyawan untuk mempermudah anda dalam mengontrol penjualan dan keluar masuk uang dari mana saja.</p>
      </div>
      <div class="kputih">
        <span class="judul">Laporan Usaha Terstruktur</span>
        <p>Kami siap membantu anda dalam mengatur laporan usaha/dagang, secara tersruktur dan efisien.</p>
      </div>
    </div>
  </div>
  <div id="hvpart3">
    <h1>Tentang</h1>
    <p>AiyCashier adalah sebuah platform kasir online digital yang menyediakan berbagai fitur, untuk membantu dan mempermudah para pedagang yang bergerak dibidang ekonomi. Dengan bergabung bersama kami, Anda dapat mencatat keluar masuk uang maupun barang yang anda perdagangkan, tanpa anda pusing mencatat secara manual dan membutuhkan waktu yang lebih lama.</p>
    <p>AiyCashier dibangun dengan dukungan sistem serba otomatis dan berbagai fitur-fitur ekslusif lain, yang akan membantu anda untuk mencatat semua kebutuhan di toko anda. Seperti pencatatan stock barang, barang yang terjual, hingga laba/keuntungan yang anda dapatkan. Anda dapat menggunakan semua fitur layanan yang telah kami sediakan sesuai dengan kebutuhan usaha anda dengan GRATIS.</p>
  </div>
  <div id="footer">
    <div id="cpright">
      <img src="logo.png">
      <p>Copyright 2022 AIYCashier. All Right reserved</p>
    </div>
    <div id="blank"></div>
    <div id="overview">
      <h3>Overview</h3>
      <p>Beranda</p>
      <p>Fitur</p>
      <p>Tentang</p>
    </div>
    <div id="followus">
      <h3>Follow Us</h3>
      <div id="csosmed">
        <img class="sosmed" src="sosmed/facebook.png">
        <img class="sosmed" src="sosmed/twitter.png">
        <img class="sosmed" src="sosmed/linkedin.png">
        <img class="sosmed" src="sosmed/instagram.png">
        <img class="sosmed" src="sosmed/telegram.png">
      </div>
    </div>
  </div>
</template>

<style scoped>
  #atas {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 6vw;
    padding-right: 3vw;
    z-index: 100;
    gap: 2vw;
  }
  .tombol {
    padding: 0.6vw 2vw;
    width: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5vw;
    border-radius: 1vw;
  }
  #log {
    background: var(--hitam);
    color: var(--putih);
  }
  #sign {
    background: var(--putih);
    color: var(--hitam);
  }
  #hvpart1 {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -6vw;
  }
  #pt1clear {
    width: 100vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    background: var(--putih);
  }
  #pt1clear h1 {
    font-weight: bold;
    font-size: 2.7em;
    line-height: 1.3em;
    cursor: default;
  }
  #pt1clear p {
    width: 41vw;
    font-size: 16px;
    margin: 1vw 0;
    cursor: default;
  }
  #btoko {
    background: var(--hitam);
    color: var(--putih);
    width: 12vw;
    padding: 1vw 2vw;
    border-radius: 7px;
  }
  #hvpart2 {
    height: 100vh;
    background: var(--hijau-gelap);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
  }
  #putihtengah {
    background: var(--putih);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 25vh;
    width: 60vw;
    border-radius: 2vw;
    position: absolute;
    top: -12.5vh;
    left: 20vw;
  }
  #putihtengah div {
    width: 12vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    text-decoration: underline;
  }
  #putihtengah div p {
    font-weight: bold;
  }
  #putihtengah div span {
    color: #26E169;
    font-weight: bold;
    text-decoration: underline #26e169;
  }
  #baris {
    display: flex;
    gap: 2em;
  }
  .kputih {
    background: var(--putih);
    width: 25vw;
    border-radius: 1em;
    padding: 2em;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    text-align: justify;
    font-size: 1.1em;
  }
  #hvpart2 h1 {
    color: var(--putih);
    font-weight: bold;
  }
  .judul {
    font-weight: bold;
    text-align: center;
  }
  #cards {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    justify-content: center;
  }
  .ccard {
    object-fit: contain;
    height: 7vh;
  }
  #hvpart3 {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    padding: 0 15vw;
    font-size: 1.1em;
  }
  #hvpart3 h1 {
    font-weight: bold;
  }
  #hvpart3 p {
    font-weight: 600;
    text-align: justify;
  }
  #footer {
    background: var(--hitam);
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--putih);
    height: 30vh;
  }
  #cpright img {
    object-fit: contain;
    height: 9vh;
  }
  #overview h3 {
    margin-bottom: 1em;
  }
  .sosmed {
    object-fit: contain;
    width: 2vw;
    margin: 0 0.2em;
  }
</style>
