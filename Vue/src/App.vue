<template>
  <div id="app">
    <h1>Calculator</h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from './assets/components/Calculator'

export default {
  components: { Calculator }
}
</script>

<style>
  @font-face {
  font-family: 'RobotoMono';
  src: url(./assets/fonts/RobotoMono-Thin.ttf);
  }

  * {
    font-family: 'RobotoMono';
  }

  body {
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    color: #fff;

    background: linear-gradient(to right, #1F1C2C, #928DAB);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>