<template>
  <div class="about">
    <div class="left">
      <img src="../../images/about.svg" alt="About" />
    </div>
    <div class="right">
      <h1>What Is Covid-19?</h1>
      <h2>Corona Virus</h2>
      <p>
        Corona viruses are a type of virus. There are many different kinds, and
        some cause disease. A newly identified type has caused a recent outbreak
        of respiratory illness now called COVID-19.Lauren Sauer, M.S., the
        director of operations with the Johns Hopkins Office of Critical Event
        Preparedness and Response
      </p>
      <a href="https://covid19.who.int/" target="_blank">Learn More</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../style/shared.scss";

.about {
  display: flex;
  justify-content: center;
  align-items: center;

  & .right {
    animation: fadeInRight 800ms cubic-bezier(0.22, 0.32, 0, 1.54) 400ms;
    & h1 {
      font-weight: bold;
      line-height: 124%;
      font-size: 29px;
      color: $red;
    }

    & h2 {
      font-weight: bold;
      line-height: 124%;
      font-size: 50px;
      color: $green;
    }

    & p {
      font-weight: normal;
      font-size: 18px;
      line-height: 215%;
      color: $black;
      width: 550px;
    }

    & a {
      position: relative;
      top: 50px;
      background-color: $red;
      color: white;
      border-radius: 65px;
      text-align: center;
      font-size: 20px;
      line-height: 24px;
      text-decoration: none;
      padding: 20px;

      &:hover {
        box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.59);
      }
    }
  }
  & .left {
    animation: fadeInLeft 800ms cubic-bezier(0.22, 0.32, 0, 1.54) 400ms;

    img {
      width: 781.86px;
      height: 635.72px;
    }
  }
}

@media screen and (max-width: 450px) {
  .about {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    & .right {
      text-align: center;
      & h1 {
        font-size: 20px;
      }

      & h2 {
        font-size: 30px;
      }

      & p {
        font-size: 13px;
        width: 300px;
        margin-top: 10px;
      }

      & a {
        font-size: 15px;
      }
    }
    & .left img {
      height: 250px;
    }
  }
}
</style>