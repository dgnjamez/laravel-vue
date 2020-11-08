<template>
    <modal :name="id">
      This is my first modal
    </modal>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>