import AIButton from "./packages/button/index";
import AIinput from "./packages/input/index";

const components = [AIButton, AIinput];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  AIButton,
  AIinput
};
