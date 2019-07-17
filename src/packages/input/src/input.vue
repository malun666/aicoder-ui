<template>
<div AICODER_UI>
  <div InputList>
    <template v-if="clearable === true">
      <div class="serachInput">
        <i class="icon iconfont icon-shanchu"></i>
        <input type="text" :disabled="disabled" class="AllInputStyle" />
      </div>
    </template>
    <template v-else>
      <input type="text" value="123" :disabled="disabled" class="AllInputStyle" />
    </template>
  </div>
</div>
</template>

<script>
export default {
  name: "AIinput",
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    clearable: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

