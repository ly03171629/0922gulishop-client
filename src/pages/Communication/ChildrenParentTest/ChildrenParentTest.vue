<template>
  <div>
    <h2>BABA有存款: {{money}}</h2>
    <button>找小明借钱100</button><br>
    <button>找小红借钱150</button><br>
    <button>找所有孩子借钱200</button><br>
    
    <br>
    <Son />

    <br>
    <Daughter />
  </div>
</template>

<script>
import Son from './Son'
import Daughter from './Daughter'

export default {
  name: 'ChildrenParentTest',
  data () {
    return {
      money: 1000
    }
  },

  methods: {
    
  },

  components: {
    Son,
    Daughter
  }
}
</script>

<style>

</style>
