<template>
  <div class="register">
    <div class="card">
      <div class="left">
        <h1>Socia Web</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          inventore, iusto perspiciatis cum dolores dolor illo rerum blanditiis
          minima quisquam deserunt accusamus exercitationem at autem quis
          dolorum? Aliquid, beatae voluptas?
        </p>
        <span>Do you have an account</span>
        <button @click="$router.push({ name: 'login' })">Login</button>
      </div>
      <div class="right">
        <h1>Register</h1>
        <form>
          <input
            type="text"
            placeholder="Name" />
          <input
            type="text"
            placeholder="Username" />
          <input
            type="email"
            placeholder="Email" />
          <input
            type="password"
            placeholder="Password" />
          <button>Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
  }
</script>

<style lang="scss">
  .register {
    height: 100vh;
    background-color: rgb(193, 190, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    .card {
      overflow: hidden;
      width: 50%;
      display: flex;
      flex-direction: row-reverse;
      background: white;
      border-radius: 10px;
      min-height: 600px;
      .left {
        flex: 1;
        background: linear-gradient(
            rgba(39, 11, 96, 0.5),
            rgba(39, 11, 96, 0.5)
          ),
          url('../assets/wallpapers/pexels-pixabay-531880.jpg') center;
        background-size: cover;
        padding: 50px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        color: white;
        h1 {
          font-size: 100px;
          line-height: 100px;
        }
        p {
        }
        span {
          font-size: 14px;
        }
        button {
          width: 50%;
          padding: 10px;
          border: none;
          background-color: white;
          color: #663399;
          font-weight: bold;
          cursor: pointer;
        }
      }
      .right {
        flex: 1;
        padding: 50px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 50px;
        h1 {
          color: #555;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 30px;
          input {
            border: none;
            border-bottom: 1px solid lightgray;
            padding: 20px 10px;
          }
          button {
            width: 50%;
            border: none;
            padding: 10px;
            color: white;
            background-color: #938eef;
            cursor: pointer;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
