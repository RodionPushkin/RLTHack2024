<template>
  <div class="wrapper">
    <div class="container">
      <svg
        v-if="currentSlide == 0"
        class="logo"
        height="36"
        viewBox="0 0 648 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.672 21.776C49.52 21.776 61.296 31.12 61.296 49.296V90H47.472V50.704C47.472 40.08 41.712 34.064 32.624 34.064C23.024 34.064 14.064 40.336 14.064 52.752V90H0.240001V3.088L14.064 0.783997V32.016C14.064 32.016 18.544 21.776 34.672 21.776ZM109.93 91.92C89.706 91.92 75.37 76.304 75.37 56.976C75.37 37.648 89.706 21.904 109.93 21.904C119.53 21.904 127.594 25.616 132.202 30.224V23.824H145.898V90H131.946L132.074 83.216C127.722 87.696 120.682 91.92 109.93 91.92ZM110.954 79.632C123.242 79.632 132.97 71.312 132.97 56.848C132.97 42.512 123.242 34.192 110.954 34.192C98.538 34.192 89.194 44.304 89.194 56.848C89.194 69.392 98.538 79.632 110.954 79.632ZM198.874 91.92C174.17 91.92 161.37 76.176 161.37 56.848C161.37 37.52 176.09 21.904 197.594 21.904C205.786 21.904 215.386 24.336 221.274 29.84V44.048C221.274 44.048 213.466 34.064 197.594 34.064C184.538 34.064 174.81 44.304 174.81 56.848C174.81 70.544 184.154 79.76 198.874 79.76C214.362 79.76 222.554 72.848 222.554 72.848V85.648C216.538 90.384 205.658 91.92 198.874 91.92ZM284.216 90L257.208 56.976L251.064 62.224V90H237.24V3.088L251.064 0.783997V47.12L278.968 23.824H296.888L267.448 48.528L302.008 90H284.216ZM338.603 91.92C315.307 91.92 301.995 75.92 301.995 56.848C301.995 37.008 317.227 21.904 337.707 21.904C356.907 21.904 368.043 37.776 368.043 53.776V60.176H315.179C316.715 70.416 323.883 79.632 338.859 79.632C355.115 79.632 364.971 72.72 365.099 72.72V85.136C365.099 85.136 357.931 91.92 338.603 91.92ZM315.819 49.424H354.219C353.707 44.304 350.379 33.168 335.915 33.168C321.451 33.168 316.587 44.304 315.819 49.424ZM383.365 90V23.696H397.189V36.496C400.261 28.432 410.245 21.776 424.325 21.776V33.168C407.557 33.168 397.445 42.768 397.189 56.848V90H383.365ZM449.079 91.92C437.815 91.92 429.495 85.648 429.495 85.648V72.08C429.495 72.08 438.199 79.632 448.951 79.632C457.783 79.632 462.263 76.944 462.263 72.592C462.263 67.728 457.783 64.784 449.975 60.432C441.271 55.568 433.335 51.344 433.335 40.336C433.335 29.072 443.191 21.904 455.223 21.904C463.287 21.904 469.175 24.336 472.375 26.256V39.824C469.431 37.008 463.543 34.192 456.887 34.192C449.463 34.192 446.391 36.624 446.391 40.08C446.391 44.304 449.975 45.712 461.367 52.368C470.199 57.488 475.191 61.84 475.191 71.824C475.191 81.936 467.639 91.92 449.079 91.92Z"
          fill="#F5F5F5"
        />
        <path
          d="M549.724 91.92C533.212 91.92 519.9 79.12 519.9 63.248H534.364C534.364 71.696 540.892 78.48 549.724 78.48C558.556 78.48 565.084 71.696 565.084 63.248C565.084 54.672 558.556 47.888 549.724 47.888C546.908 47.888 544.476 48.528 542.428 49.68L535.772 46.992V3.088H578.652V15.248H549.724V34.448C553.82 34.448 557.788 35.216 561.372 36.752C572.124 41.104 579.548 51.344 579.548 63.248C579.548 79.12 566.236 91.92 549.724 91.92ZM633.006 89.872V60.944H591.15L623.534 3.088H638.51L613.294 48.912H647.982V89.872H633.006Z"
          fill="#00C572"
        />
      </svg>
      <div class="slider" v-auto-animate>
        <div class="slide slide-1" v-if="currentSlide == 0">
          <p>
            ИСАKettle<br />- Информационная система с&nbsp;автоматизированной
            сегментацией поставщиков
          </p>
        </div>
        <div class="slide slide-2" v-if="currentSlide == 1">
          <h1>Состав команды</h1>
          <ul>
            <li>
              <img src="./peeps-avatar-alpha (1).png" alt="" />
              <p>Кирилл</p>
              <small>backend</small>
            </li>
            <li>
              <img src="./peeps-avatar-alpha.png" alt="" />
              <p>Родион</p>
              <small>frontend</small>
            </li>
            <li>
              <img src="./peeps-avatar-alpha (3).png" alt="" />
              <p>Амир</p>
              <small>dba</small>
            </li>
            <li>
              <img src="./peeps-avatar-alpha (2).png" alt="" />
              <p>Иван</p>
              <small>data scientist</small>
            </li>
            <li>
              <img src="./peeps-avatar-alpha (4).png" alt="" />
              <p>Кирилл</p>
              <small>data scientist</small>
            </li>
            <li>
              <img src="./peeps-avatar-alpha (5).png" alt="" />
              <p>Чайник</p>
              <small>ai</small>
            </li>
          </ul>
        </div>
        <div class="slide slide-3" v-if="currentSlide == 2">
          ИСАKettle
          <p>
            Мы разработали информационную систему с&nbsp;автоматизированной
            сегментацией поставщиков по заданным критериям
          </p>
        </div>
        <div class="slide slide-6" v-if="currentSlide == 3">
          <img src="./image 1.png" alt="" />
        </div>
        <div class="slide slide-6" v-if="currentSlide == 4">
          <img src="./image 2.png" alt="" />
        </div>
        <div class="slide slide-4" v-if="currentSlide == 5">
          Технологии
          <ul>
            <li>
              <img src="./vue.png" alt="" />
              <p>vue.js</p>
            </li>
            <li>
              <img src="./fastapi.png" alt="" />
              <p>fastapi</p>
            </li>
            <li>
              <img src="./numpy.png" alt="" />
              <p>numpy</p>
            </li>
            <li>
              <img src="./postgres.png" alt="" />
              <p>postgres</p>
            </li>
            <li>
              <img src="./swagger.png" alt="" />
              <p>swagger</p>
            </li>
            <li>
              <img src="./ubuntu.png" alt="" />
              <p>ubuntu</p>
            </li>
            <li>
              <img src="./pandas.png" alt="" />
              <p>pandas</p>
            </li>
            <li>
              <img src="./js.png" alt="" />
              <p>javascript</p>
            </li>
            <li>
              <img src="./python.png" alt="" />
              <p>python</p>
            </li>
            <li>
              <img src="./vite.png" alt="" />
              <p>vite</p>
            </li>
          </ul>
        </div>
        <div class="slide slide-3" v-if="currentSlide == 6">
          Как можно доработать
          <p>
            Написание микросервисной архитектуры<br />Дообучение модели
            нейронной сети<br />Горизонтальное масштабирование<br />Развитие
            метрик алгоритма
          </p>
        </div>
        <div class="slide slide-5" v-if="currentSlide == 7">
          Желаете попробовать?
        </div>
        <div class="slide slide-5" v-if="currentSlide == 8">
          <router-link to="/">
            <img src="./qr.png" alt="" />
          </router-link>
        </div>
      </div>
      <div class="controls" v-auto-animate>
        <div @click="previous" v-if="currentSlide != 0">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48H48V0H24ZM10.5858 25.4142L23.3137 38.1421C24.0948 38.9232 25.3611 38.9232 26.1421 38.1421C26.9232 37.3611 26.9232 36.0948 26.1421 35.3137L16.8284 26H36C37.1046 26 38 25.1046 38 24C38 22.8954 37.1046 22 36 22H16.8284L26.1421 12.6863C26.9232 11.9052 26.9232 10.6389 26.1421 9.85786C25.3611 9.07682 24.0948 9.07682 23.3137 9.85786L10.5858 22.5858C9.80474 23.3668 9.80474 24.6332 10.5858 25.4142Z"
              fill="#F5F5F5"
            />
          </svg>
          <div class="pulse" />
        </div>
        <div @click="next" v-if="currentSlide != 8">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 9.39372e-07 24 2.09815e-06L-4.19629e-06 4.19629e-06L0 48L24 48ZM37.4142 22.5858L24.6863 9.85787C23.9052 9.07682 22.6389 9.07682 21.8579 9.85787C21.0768 10.6389 21.0768 11.9052 21.8579 12.6863L31.1716 22L12 22C10.8954 22 10 22.8954 10 24C10 25.1046 10.8954 26 12 26L31.1716 26L21.8579 35.3137C21.0768 36.0948 21.0768 37.3611 21.8579 38.1421C22.6389 38.9232 23.9052 38.9232 24.6863 38.1421L37.4142 25.4142C38.1953 24.6332 38.1953 23.3668 37.4142 22.5858Z"
              fill="#F5F5F5"
            />
          </svg>
          <div class="pulse" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "presentation",
  data() {
    return {
      currentSlide: 0,
    };
  },
  mounted() {
    window.addEventListener("keyup", this.keyarrow);
    this.$store.dispatch("SET_SHOW_HEADER", false);
    document.body.classList.toggle("presentation", true);
  },
  unmounted() {
    this.$store.dispatch("SET_SHOW_HEADER", true);
    document.body.classList.toggle("presentation", false);
  },
  methods: {
    next() {
      if (this.currentSlide == 8) return;
      else this.currentSlide++;
    },
    previous() {
      if (this.currentSlide == 0) return;
      else this.currentSlide--;
    },
    keyarrow({ key }) {
      if (key == "ArrowLeft") {
        this.previous();
        return;
      }
      if (key == "ArrowRight" || key == " ") {
        this.next();
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  * {
    user-select: none;
  }
}
.container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  font-size: 64px;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 48px;
  padding-bottom: 48px;
  .controls {
    display: flex;
    justify-content: flex-end;
    gap: 4px;
    width: 100%;
    height: 48px;
    div {
      position: relative;
      cursor: pointer;
      display: grid;
      place-content: center;
      &:hover .pulse {
        animation: ease-in-out infinite pulse 2s;
      }
      .pulse {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #00c573;
        aspect-ratio: 1/1;
        height: 1px;
        border-radius: 100%;
        z-index: -1;
      }
    }
  }
  .slider {
    padding-top: 24px;
    width: 100%;
    flex: 1 0 auto;
    .slide {
      height: 100%;
      width: 100%;
      position: relative;
      &.slide-1 {
        display: flex;
        align-items: flex-end;
      }
      &.slide-6 {
        display: grid;
        place-items: center;
        img {
          width: 80%;
        }
      }
      &.slide-2 {
        > ul {
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          width: 100%;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            img {
              width: 100%;
            }
            p {
              font-size: 36px;
              text-align: center;
            }
            small {
              font-size: 24px;
              text-align: center;
            }
          }
        }
      }
      &.slide-3 {
        p {
          font-size: 36px;
          position: absolute;
          bottom: 0;
          line-height: 46px;
        }
      }

      &.slide-4 {
        > ul {
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          width: 100%;
          gap: 20px;
          font-size: 28px;
          text-align: center;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            img {
              width: 50%;
            }
          }
        }
      }
      &.slide-5 {
        display: grid;
        place-content: center;
        font-size: 12vw;
        a {
          display: grid;
          place-content: center;
        }
        img {
          height: 50vh;
        }
      }
    }
  }
}

@keyframes pulse {
  0% {
    height: 1px;
    opacity: 1;
  }

  100% {
    height: 100px;
    opacity: 0;
  }
}
</style>
