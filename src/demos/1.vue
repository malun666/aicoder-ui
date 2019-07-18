<template>
  <div>
    <Button type="is-success" ButtonTitle="成功" />
    <Input clearable placeholder="asfd " />
    <Input showSearch @AI-search="searchdemo" />
    <Input disabled />
    <Input v-model="gh" />
    <AIcollapse>
      <Panel PanelTitle="1">
        ASDFAS FAS FASFGHGSJKDGHHDFJKHKDHGKHHasasdas
        ASDFAS FAS FASFGHGSJKDGHHDFJKHKDHGKHH
        </Panel>
      <Panel PanelTitle="2"></Panel>
      <Panel PanelTitle="3"></Panel>
      <!-- <AIpanel></AIpanel> -->
    </AIcollapse>

  </div>
</template>

<script>
import { truncate } from "fs";
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
    }
  }
};
</script>

<style>
</style>
