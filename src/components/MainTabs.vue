<template lang="pug">
.container.is-fluid
    .columns.is-multiline.is-mobile
        .column.is-full
            .tabs
                ul
                    li(:class="getActive('code')" v-show="isTabItemVisible('code')")
                        a(@click="toggle('code')") Code
                    li(:class="getActive('test')" v-show="isTabItemVisible('test')")
                        a(@click="toggle('test')") Test
        .column.is-full(v-show="getShow('code')")
            slot(name="code")
        .column.is-full(v-show="getShow('test')")
            slot(name="test")
</template>
<script>
export default {
  props: ["options"],
  name: "mainTabs",
  data() {
    return {
      tab: "code"
    };
  },
  methods: {
    isTabItemVisible(name) {
      return this.options.visibility[name] !== undefined
        ? this.options.visibility[name]
        : true;
    },
    toggle(name) {
      this.tab = name;
      this.$emit("refresh");
    },
    getShow(name) {
      return this.tab === name ? true : false;
    },
    getActive(name) {
      return this.tab === name ? `is-active` : "";
    }
  }
};
</script>
<style lang="scss" scoped>
</style>