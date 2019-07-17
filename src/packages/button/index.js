import AIButton from "./src/button";

AIButton.install = function(Vue) {
  Vue.component(AIButton.name, AIButton);
};

export default AIButton;
