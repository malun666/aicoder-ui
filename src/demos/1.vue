<template>
  <div>
    <Button type="is-danger" ButtonTitle="成功" />
    <Input clearable placeholder="asfd " />
    <Input showSearch @AI-search="searchdemo" />
    <Input showSearch @AI-search="searchdemo" />
    <Input showPassword />
    <Input v-model="gh" />
    <Collapse ConciseMode>
      <Panel PanelTitle="1">这是一段简单文本</Panel>
      <Panel PanelTitle="2"></Panel>
      <Panel PanelTitle="3"></Panel>
    </Collapse>

    <Switcher>
      <span slot="open">开</span>
      <span slot="close">关</span>
    </Switcher>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gh: "sadasd",
      show: false
    };
  },
  methods: {
    searchdemo() {
      console.log("SearchDemo");
    },
    sdas() {
      this.show = true;
    }
  }
};
</script>

<style>
</style>
