<template>
  <div ref="preloader" class="preloader">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "preloader",
  data() {
    return {
      text: "закипаю.",
    };
  },
  mounted() {
    this.open();
    const interval = setInterval(() => {
      if (this.text == "закипаю...") {
        this.text = "закипаю.";
      } else if (this.text == "закипаю..") {
        this.text = "закипаю...";
      } else {
        this.text = "закипаю..";
      }
    }, 300);
    setTimeout(() => {
      this.close();
      clearInterval(interval);
    }, 6000);
    // }, 100);
  },
  methods: {
    open() {},
    close() {
      this.$refs.preloader.classList.toggle("closed", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 999999;
  background: var(--color-main);
  transition: opacity 0.3s;
  transition-delay: 0.6s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  &.closed {
    opacity: 0;
    pointer-events: none;

    img:nth-of-type(1) {
      transform: translateX(-100%);
    }

    img:nth-of-type(2) {
      transform: translateX(100%);
    }

    img:nth-of-type(3) {
      transform: translateX(-100%);
    }
  }
}
</style>
