<template>
  <div AICODER_UI>
    <div v-if=" ConciseMode === true">
       <div FanCollapse>
        <slot></slot>
      </div>
    </div>
    <div v-else>
      <div Collapse>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  props: {
    ConciseMode: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

