<template>
  <button class="button" :class="{ operation, double, triple, signal }">
      {{ label }}
  </button>
</template>

<script>
export default {
    props: {
        label: {},
        operation: { type: Boolean },
        double: { type: Boolean },
        triple: { type: Boolean },
        signal: { type: Boolean }
    }
}
</script>

<style>
.button {
    font-size: 1.4em;

    border: none;
    border-bottom: solid 1px #888 ;
    border-right: solid 1px #888;

    outline: none;
}

.button:active {
    background-color: #ccc;
}

.operation {
    background-color: #fa8231;
    color: #fff;
}

.operation:active {
    background-color: #fa823166;
}

.double {
    grid-column: span 2;
}

.triple {
    grid-column: span 3;
}

.signal {
    background-color: #658BF6;
    color: #fff;
}

.signal:active {
    background-color: #658BF666
}
</style>