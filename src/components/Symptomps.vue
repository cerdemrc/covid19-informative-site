<template>
  <div class="symptomps">
    <h1>Covid-19</h1>
    <h2>Symptomps</h2>
    <p>
      Corona viruses are a type of virus. There are many different kinds, and
      some cause disease. A newly identified type has caused a recent outbreak
      of respiratory
    </p>
    <div class="element">
      <img src="../../images/symptomps.svg" alt="Element" />
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

.symptomps {
  text-align: center;
  animation: fadeInBottom 800ms cubic-bezier(0.22, 0.32, 0, 1.54) 400ms;

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
    margin-top: 10px;
  }

  & .element img {
    height: 480px;
  }
}
@media screen and (max-width: 450px) {
  .symptomps {
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
    & .element img {
      height: 250px;
    }
  }
}
</style>