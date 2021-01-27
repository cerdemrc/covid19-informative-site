<template>
  <div class="contagion">
    <h1>Covid-19</h1>
    <h2>Contagion</h2>
    <p>
      Corona viruses are a type of virus. There are many different kinds, and
      some cause disease. A newly identified type
    </p>
    <div class="content">
      <div class="content1">
        <img src="../../images/element1.svg" alt="Element" />
        <h1>Air Transmission</h1>
        <p>
          Objectively evolve tactical expertise before extensible initiatives.
          Efficiently simplify
        </p>
      </div>
      <div class="content2">
        <img src="../../images/element2.svg" alt="Element" />
        <h1>Human Contacts</h1>
        <p>Washing your hands is one of thesimplest ways you can protect</p>
      </div>
      <div class="content3">
        <img src="../../images/element3.svg" alt="Element" />
        <h1>Containted Objects</h1>
        <p>
          Use the tissue while sneezing,In this way, you can protect your
          droplets.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../style/shared.scss";

@mixin text {
  font-weight: bold;
  line-height: 124%;
}
.contagion {
  text-align: center;
  animation: fadeInTop 800ms cubic-bezier(0.22, 0.32, 0, 1.54) 400ms;

  & h1 {
    @include text;
    font-size: 29px;
    color: $red;
  }
  & h2 {
    @include text;
    font-size: 50px;
    color: $green;
  }
  & p {
    font-weight: normal;
    font-size: 18px;
    line-height: 215%;
    color: $black;
  }

  & .content {
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;

    & img {
      width: 270px;
      height: 250px;
    }

    & .content1,
    .content2,
    .content3 {
      &:hover {
        box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.59);
      }

      & p {
        width: 355px;
        font-size: 15px;
        line-height: 185%;
        margin: 20px;
      }
    }
  }
}
@media screen and (max-width: 450px) {
  .contagion {
    margin-top: 50px;
    & h1 {
      font-size: 20px;
    }
    & h2 {
      font-size: 30px;
    }
    & p {
      font-size: 13px;
      width: 380px;
      margin-top: 10px;
      padding: 0 30px;
    }

    & .content {
      flex-flow: column;
      & img {
        height: 200px;
      }
    }
  }
}
</style>