import AIswitcher from "./src/switcher";

AIswitcher.install = function(Vue) {
  Vue.component(AIswitcher.name, AIswitcher);
};

export default AIswitcher;
