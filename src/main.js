import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

(async () => {
  const rawResponse = await fetch(
    "https://chatty-rattlesnake-85.localtunnel.me/funql-api",
    {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        namespace: "__funql",
        name: "getMethodNames"
      })
    }
  );
  const content = await rawResponse.json();

  console.log(content);
})();

new Vue({
  render: h => h(App)
}).$mount("#app");
