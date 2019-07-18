<template>
  <div AICODER_UI>
    <div ButtonList>
      <input
        :class="type ?  type + ' CommonClass': 'Btn-defaultStyle' + ' CommonClass'"
        type="button"
        :value="ButtonTitle"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AIbutton",
  data() {
    return {};
  },
  // ButtonTitle 按钮の文字
  // type        按钮の样式
  props: ["ButtonTitle", "type"],
};
</script>


 