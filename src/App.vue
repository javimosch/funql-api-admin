<template lang="pug">
  #app
    .columns.is-multiline.is-mobile
      .column.is-full-mobile.is-third-quarters-tablet
        MainTabs(@refresh="refresh" :options="tabOptions")
          template(v-slot:code)
            JSEditor(v-model="methodCode")
          template(v-slot:test)
            TestMethod(ref="TestMethod" :methodOptions="methodOptions")
      .Sidebar.column.is-full-mobile.is-one-quarter-tablet()
        MethodSelect(v-model="methodName" @change="loadMethod")
</template>

<script>
import TestMethod from "./components/TestMethod";
import MainTabs from "./components/MainTabs";
import MethodSelect from "./components/MethodSelect";
import JSEditor from "./components/JSEditor";
import { funql } from "./utils";
export default {
  name: "App",
  components: {
    TestMethod,
    MainTabs,
    MethodSelect,
    JSEditor
  },
  methods: {
    refresh() {
      this.$refs.TestMethod.refresh();
    },
    async loadMethod() {
      const beautify = require("js-beautify").js;
      const code = beautify(await funql("getMethodCode", this.methodName), {
        indent_size: 1,
        space_in_empty_paren: true
      });
      this.methodCode = code;
    }
  },
  computed: {
    methodOptions() {
      return {
        name: this.methodName,
        args: [],
        transform: undefined,
        namespace: undefined
      };
    },
    tabOptions() {
      return {
        visibility: {
          test: !!this.methodName
        }
      };
    }
  },
  data() {
    return {
      methodName: "",
      methodCode: ""
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.Sidebar {
  padding-top: 77px !important;
  @media only screen and (max-width: 991px) {
  }
  @media only screen and (max-width: 767px) {
    padding-top: 0px !important;
  }
  @media only screen and (max-width: 479px) {
  }
}
.CodeMirror {
  font-family: monospace;
  font-size: 10px;
}
</style>
