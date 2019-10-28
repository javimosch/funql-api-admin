<template lang="pug">
    .select.is-multiple
        select.is-radiusless(@change="onChange" multiple :size="options.length")
            option(v-for="option in options" :value="option" v-html="option") 
</template>
<script>
import { funql } from "../utils";
export default {
  props: ["value"],
  name: "MethodSelect",
  data() {
    return {
      options: []
    };
  },
  async created() {
    this.options = await funql("getMethodNames");
  },
  methods: {
    onChange(e) {
      this.$emit("input", e.target.value);
      this.$emit("change", e.target.value);
    }
  }
};
</script>
<style lang="scss" scoped>
.select {
  width: -webkit-fill-available;
}
select {
  width: 100%;
}
</style>