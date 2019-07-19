<template>
  <div AICODER_UI>
    <div Switcher>
      <div @click="ChangeSwitch" class="SwitchModal" :class="SwitchData ? 'changeColor' :'' ">
        <div :class="SwitchData ? 'excessive' : ''" class="SwitchBtn"></div>
        <div class="slotStyle">
          <slot name="open"></slot>
          <slot name="close"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Switcher",
  data() {
    return {
      SwitchData: true
    };
  },
  props: {

  },
  methods: {
    ChangeSwitch() {
      if (this.SwitchData === true) {
        this.SwitchData = false;
      } else {
        this.SwitchData = true;
      }
    }
  }
};
</script>

<style>
</style>
