<script>

</script>

<template>
  <img class="logoatas" src="logo.png">
  <div id="dfclear">
    <form>
      <h1>Buat Akun Baru</h1>
      <label for="username">Username</label><br>
      <input type="text" name="username"><br>
      <label for="password">Password</label><br>
      <input type="password" name="password"><br>
      <label for="password2">Confirm Password</label><br>
      <input type="password" name="password2"><br>
      <input type="submit" name="submit" id="submit" value="Lanjut" class="ttombol">
    </form>
    <p>Sudah memiliki akun ? <RouterLink to="/login"><span>Masuk</span></RouterLink></p>
  </div>
</template>

<style scoped>
  #dfclear {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  h1 {
    font-size: 1.5em;
    margin-bottom: 1em;
    font-weight: bold;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    background: #ccc;
    padding: 1em 2em 1em 2em;
    border-radius: 20px;
    box-shadow: 1px 1px 2px #999;
    margin-bottom: 1em;
  }
  label {
    margin-left: 0.5em;
  }
  input {
    margin-bottom: 0.4em;
  }
  span {
    font-weight: bold;
  }
</style>
