<template lang="pug">
    .TestMethod()
        JSEditor(ref="editor" v-model="code")
        button.button.is-black(@click="execute" style="margin-top:20px;") Execute
</template>
<script>
const beautify = require("js-beautify").js;
import JSEditor from "./JSEditor";
import { funql } from "../utils";

const sample = `async function method(){
  const rawResponse = await fetch('${process.env.VUE_APP_FUNQL_ENDPOINT}/funql-api', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(__REQUEST__)
  });
  const content = await rawResponse.json();
  console.log(content);
  return content
}
`;

export default {
  props: ["methodOptions"],
  components: {
    JSEditor
  },
  name: "TestMethod",
  data() {
    return {
      code: beautify(sample, {
        indent_size: 1,
        space_in_empty_paren: true
      })
    };
  },
  methods: {
    async execute() {
      let content = () => {};
      eval(`content = ${this.code}`);
      content = await content();
      alert(JSON.stringify(content || {}));
    },
    initialize() {
      this.code = beautify(
        sample
          .split("__REQUEST__")
          .join(JSON.stringify(this.methodOptions, null, 4)),
        {
          indent_size: 1,
          space_in_empty_paren: true
        }
      );
    },
    refresh() {
      this.$refs.editor.refresh();
      this.$emit("refresh");
    }
  }
};
</script>
<style lang="scss" >
</style>