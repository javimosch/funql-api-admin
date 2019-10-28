<template lang="pug">
    codemirror(ref="myCm" :value="value" :options="cmOptions" @input="onCmCodeChange"
          style="position:relative;")
</template>
<script>
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/base16-dark.css";
export default {
  props: ["value"],
  name: "JSONEditor",
  data() {
    return {
      cmOptions: {
        lineWrapping: true,
        tabSize: 1,
        mode: "application/ld+json",
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
    }
  }
};
</script>
<style lang="scss" >
</style>