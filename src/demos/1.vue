<template>
  <div>
    <AIbutton type="is-success" ButtonTitle="成功" />
    <AIinput clearable placeholder="asfd " />
    <AIinput  showSearch @AI-search="searchdemo" />
    <AIinput disabled />
    <AIinput showPassword />
  </div>
</template>

<script>
export default {
  data() {
    return {
      gh: "sad"
    };
  },
  methods: {
    searchdemo() {
      console.log("SearchDemo");
    }
  }
};
</script>

<style>
</style>
