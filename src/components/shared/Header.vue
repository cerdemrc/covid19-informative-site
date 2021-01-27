<template>
  <div class="wrapper">
    <div class="header">
      <div class="logo">
        <img src="../../../images/Logo.svg" alt="Logo" />
      </div>
      <nav class="nav">
        <ul class="nav-items">
          <router-link to="/" tag="li"><a>Homepage</a></router-link>
          <router-link to="/about" tag="li"><a>About</a></router-link>
          <router-link to="/contagion" tag="li"><a>Contagion</a></router-link>
          <router-link to="/symptomps" tag="li"><a>Symptoms</a></router-link>
        </ul>
      </nav>
      <a href="#" class="btn btn-red">Contact</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../style/shared.scss";

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}

.wrapper {
  max-width: 1920px;
  margin: 0 auto;
  padding: 30px 134px;

  & .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .logo {
      width: 192px;
      height: 65px;
    }

    .nav-items {
      display: flex;

      & li a {
        font-size: 18px;
        line-height: 22px;
        color: $green;
        margin: 0 20px;

        &:hover {
          color: $red;
        }
      }
    }

    .btn {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
    }

    .btn-red {
      text-align: center;
      width: 154px;
      height: 55px;
      color: $red;
      padding: 16px 45px;
      border: 1px solid $red;
      border-radius: 46px;
    }
  }
}

@media screen and (max-width: 450px) {
  .wrapper {
    padding: 10px;

    & .header {
      justify-content: center;
      & .logo {
        display: none;
      }
      & .nav-items li a {
        font-size: 12px;
        margin: 10px;
      }

      .btn {
        display: none;
      }
    }
  }
}
</style>