<template>
  <ul>
    <li v-for="(item, index) in data" :key="index">{{item.text}}</li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    data: Array
  }
}
</script>