<template>
  <div AICODER_UI>
    <div PanelList>
      <div class="titlePanel" @click="showMneuSwitch">
        <i class="icon iconfont PanelFont" :class="showMenu ? 'icon-jiantouxia' :'icon-jiantouyou'"></i>
        {{PanelTitle}}
      </div>
      <transition name="bounce">
        <div v-show="showMenu" class="PanelMenu">
          <div class="MenuText">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: ["PanelTitle"],
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    showMneuSwitch() {
      if (this.showMenu === false) {
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
    }
  }
};
</script>

