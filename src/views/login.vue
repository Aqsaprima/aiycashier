<script>
  export default {
    data() {
      return {
        active: "gb1.png"
      }
    }
  }
</script>

<template>
  <img class="logoatas" src="logo.png">
  <div id="msclear">
    <div id="part1">
      <form id="fflex">
        <label>Username</label><br>
        <input type="text" name="username" id="username"><br>
        <label>Password</label><br>
        <input type="password" name="password" id="password"><br>
        <div id="baris">
          <label class="ccekbox">Ingat Saya
            <input type="checkbox" class="hilang">
            <span class="centang"></span>
          </label>
        </div>
        <input type="submit" value="Masuk" name="masuk" id="submit" class="ttombol">
      </form>
      <p>Belum memiliki akun ? <RouterLink to="/signup"><span>Daftar</span></RouterLink></p>
    </div>
    <div id="part2">
      <img :src="active">
      <p>Bangun Toko Impianmu</p>
      <form>
        <!--<div>value : {{active}}</div>-->
        <label class="cradio">
          <input type="radio" v-model="active" value="gb1.png" class="hilang">
          <span class="radio"></span>
        </label>
        <label class="cradio">
          <input type="radio" v-model="active" value="gb2.png" class="hilang">
          <span class="radio"></span>
        </label>
        <label class="cradio">
          <input type="radio" v-model="active" value="gb3.png" class="hilang">
          <span class="radio"></span>
        </label>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .logoatas {
    height: 3vw;
  }
  img {
    height: 35vh;
    object-fit: contain;
    border-radius: 0.5vw;
  }
  #msclear {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #part1, #part2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
  }
  #fflex {
    display: flex;
    flex-direction: column;
    background: #ccc;
    padding: 2em;
    border-radius: 20px;
    box-shadow: 1px 1px 2px #999;
    margin-bottom: 1em;
  }
  input[type=text], input[type=password] {
    margin: 0.6em 0 1em 0;
  }
  #part2 {
    background: var(--hitam);
    color: var(--putih);
    gap: 4vw;
  }
  span {
    font-weight: bold;
  }
  #submit {
    width: 100%;
    margin: 0;
  }
  #baris {
    margin: 1.5em 0 2.5em 0;
  }
  label {
    margin-left: 0.5em;
  }
  .ccekbox {
    padding-left: 3em;
  }
  .cradio:first-child .radio {
    left: -2.5vw;
  }
  .cradio:last-child .radio {
    left: 2.5vw;
  }
</style>
