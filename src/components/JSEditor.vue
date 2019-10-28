<template lang="pug">
    codemirror(ref="myCm" :value="value" :options="cmOptions" @input="onCmCodeChange"
          style="position:relative;")
</template>
<script>
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/base16-dark.css";
export default {
  props: ["value"],
  name: "JSEditor",
  data() {
    return {
      cmOptions: {
        lineWrapping: true,
        tabSize: 1,
        mode: "text/javascript",
        theme: "base16-dark",
        lineNumbers: true,
        line: true
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    };
  },
  methods: {
    onCmCodeChange(newCode) {
      this.$emit("input", newCode);
    },
    refresh() {
      this.$refs.myCm.refresh();
      this.$emit("refresh");
    }
  },
  mounted() {
    //this.$refs.myCm.cminstance.setValue(this.value, -1);
    //this.$refs.myCm.refresh();
  }
};
</script>
<style lang="scss" >
</style>