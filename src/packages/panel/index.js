import AIpanel from "./src/panel";

AIpanel.install = function(Vue) {
  Vue.component(AIpanel.name, AIpanel);
};

export default AIpanel;
