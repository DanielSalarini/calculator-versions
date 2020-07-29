<template>
  <div class="calculator">
        <Display value="100"/>
        <Button label="AC" double signal />
        <Button label="+/-" signal />
        <Button label="/" operation />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" operation />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" operation />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" operation />
        <Button label="0" triple />
        <Button label="=" operation />
  </div>
</template>

<script>
import Display from './Display'
import Button from './Button'

export default {
    components: { Display, Button }
}
</script>

<style>
    .calculator {
        height: 320px;
        width: 242px;

        border-radius: 5px;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr repeat(5, 50px);

        overflow: hidden;
    }
</style>