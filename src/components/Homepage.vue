<template>
  <div class="home">
    <div class="left">
      <h1>COVID-19 Alert</h1>
      <h2>Stay at Home Quarantine To Stop Corona Virus</h2>
      <p>
        There is no specific medicine to prevent or treat coronavirus disease
        (COVID-19). People may need supportive care to .
      </p>
    </div>
    <div class="right">
      <img src="../../images/Illustration1.svg" alt="Element" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../style/shared.scss";

.home {
  display: flex;

  & .left {
    display: flex;
    flex-flow: column;
    justify-content: center;
    animation: fadeInLeft 800ms cubic-bezier(0.22, 0.32, 0, 1.54) 400ms;
    h1 {
      color: $red;
      font-weight: bold;
      font-size: 52px;
      line-height: 122%;
    }
    h2 {
      color: $green;
      font-weight: bold;
      font-size: 32px;
      margin-top: 10px;
      line-height: 122%;
    }
    p {
      font-weight: normal;
      font-size: 20px;
      line-height: 190%;
      color: $black;
      width: 500px;
    }
  }
  & .right {
    animation: fadeInRight 800ms cubic-bezier(0.22, 0.32, 0, 1.54) 400ms;
    img {
      width: 800px;
    }
  }
}

@media screen and (max-width: 450px) {
  .home {
    margin-top: 50px;
    display: flex;
    flex-flow: column;
    text-align: center;

    & .left {
      align-items: center;
      h1 {
        font-size: 30px;
      }

      h2 {
        font-size: 20px;
        margin-top: 10px;
      }

      p {
        font-size: 13px;
        margin-top: 10px;
        width: 300px;
      }
    }
    & .right img {
      width: 400px;
      height: 300px;
      margin-top: 20px;
    }
  }
}

@media screen and (min-width: 500px) {
  .home {
    padding-left: 100px;
  }
}
</style>