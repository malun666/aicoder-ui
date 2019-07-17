<template>
  <div AICODER_UI>
    <div InputList>
      <template v-if="clearable === true">
        <div class="ClearInput">
          <i
            class="icon iconfont icon-shanchu clearBtn"
            @click="ClearInputVal"
            :class="showClearBtn ?'showClearInput' :'' "
          ></i>
          <input
            type="text"
            :placeholder="placeholder"
            v-model="InputData"
            :disabled="disabled"
            class="AllInputStyle"
          />
        </div>
      </template>
      <template v-else-if="showPassword === true">
        <div class="PasswordInput">
          <i
            :class="passwordSwitch ? 'icon-Xtubiao-chakan' : 'icon-Xtubiao-guanbichakan'"
            class="icon iconfont icon-Xtubiao-chakan passwordBtn"
            @click="PassSwitch"
          ></i>
          <input :disabled="disabled" :type="typeSwitch" class="AllInputStyle" />
        </div>
      </template>
      <template v-else-if="showSearch === true">
        <div class="SearchInput">
          <input
            type="text"
            :placeholder="placeholder"
            value="1"
            :disabled="disabled"
            class="AllInputStyle searchinput"
          />
          <span class="SearchBtn" @click="SearchTextData">
            <i class="icon iconfont icon-sousuo SearchBtnFont"></i>
          </span>
        </div>
      </template>
      <template v-else>
        <input type="text" :placeholder="placeholder" :disabled="disabled" class="AllInputStyle" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "AIinput",
  data() {
    return {
      InputData: "", // input的数据
      showClearBtn: false, // 按钮显示状态
      passwordSwitch: false, //密码显示切换
      typeSwitch: "password" // 密码框类型切换
    };
  },
  props: {
    disabled: {
      //是否可用
      type: Boolean,
      required: false,
      default: false
    },
    showSearch: {
      //是否是搜索框
      type: Boolean,
      required: false,
      default: false
    },
    clearable: {
      //是否有可清除按钮
      type: Boolean,
      required: false,
      default: false
    },
    showPassword: {
      // 是否是密码框
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: "" // 默认的关键字
  },
  watch: {
    // 监听数据变化切换清除按钮显示状态
    InputData() {
      if (this.InputData !== "") {
        this.showClearBtn = true;
      } else {
        this.showClearBtn = false;
      }
    },
    // 监听是否是密码框处理
    showPassword() {
      if (this.showPassword == true) {
        this.passwordSwitch = true;
      } else {
        this.passwordSwitch = false;
      }
    }
  },
  methods: {
    // 清除按钮的清除数据方法
    ClearInputVal() {
      this.InputData = "";
    },
    // 密码框点击密码显示切换
    PassSwitch() {
      if (this.passwordSwitch == false) {
        let TextType = "text";
        this.typeSwitch = TextType;
        this.passwordSwitch = true;
      } else if ((this.passwordSwitch = true)) {
        this.passwordSwitch = false;
        let PasswordType = "password";
        this.typeSwitch = PasswordType;
      } else {
        return;
      }
    },
    // 搜索框点击事件
    SearchTextData(event) {
      this.$emit("AI-search", event);
    }
  }
};
</script>

