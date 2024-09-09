<template>
  <div class="container">
    <div class="side" v-auto-animate>
      <div class="fixed">
        <div class="sort">
          <div
            class="sort-button"
            v-auto-animate
            @click="
              sort.angle = !sort.angle;
              request();
            "
          >
            <svg
              v-if="sort.angle"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20V10"
                stroke="#F5F5F5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 20V4"
                stroke="#F5F5F5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 20V16"
                stroke="#F5F5F5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              v-if="!sort.angle"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20V10"
                stroke="#F5F5F5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 20V4"
                stroke="#F5F5F5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 20V16"
                stroke="#F5F5F5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="pulse" />
          </div>
          <div class="select-bar">
            <select v-model="sort.selected" @change="request">
              <option
                v-for="(item, index) in sort.list"
                :key="item"
                :selected="sort.selected == index ? 'selected' : null"
                :value="index"
              >
                {{ item }}
              </option>
            </select>
          </div>
        </div>
        <div class="input-checkbox">
          <input
            type="checkbox"
            v-model="filters.isSmallBusines"
            id="dateUseRange"
            @change="request"
          />
          <label for="dateUseRange"></label>
          <label for="dateUseRange"></label>
          закупки для малого бизнеса?
        </div>
        <div class="playground">
          <select v-model="filters.playground.selected" @change="request">
            <option
              v-for="(item, index) in filters.playground.list"
              :key="item"
              :selected="
                filters.playground.selected == index ? 'selected' : null
              "
              :value="index"
            >
              {{ item }}
            </option>
          </select>
        </div>
        <div class="region">
          <select v-model="filters.region.selected" @change="request">
            <option
              v-for="(item, index) in filters.region.list"
              :key="item"
              :selected="filters.region.selected == index ? 'selected' : null"
              :value="index"
            >
              {{ item }}
            </option>
          </select>
        </div>
        <div class="okpd2">
          <select v-model="filters.okpd2.selected" @change="request">
            <option
              v-for="(item, index) in filters.okpd2.list"
              :key="item"
              :selected="filters.okpd2.selected == index ? 'selected' : null"
              :value="index"
            >
              {{ item }}
            </option>
          </select>
        </div>
        <div class="fz">
          <select v-model="filters.fz.selected" @change="request">
            <option
              v-for="(item, index) in filters.fz.list"
              :key="item"
              :selected="filters.fz.selected == index ? 'selected' : null"
              :value="index"
            >
              {{ item }}
            </option>
          </select>
        </div>
        <div class="price">
          <input
            type="number"
            v-model="filters.price.from"
            placeholder="Цена с"
            @keyup="request"
            @keyup.enter="request"
          />
          <input
            type="number"
            v-model="filters.price.to"
            placeholder="Цена до"
            @keyup="request"
            @keyup.enter="request"
          />
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="card" v-for="item in data" :key="item" v-auto-animate>
        <div class="rlt" v-if="item.isRLT"><i />#РосЭлТорг</div>
        <div class="info">
          <p>{{ item.title }}</p>
          <p>{{ item.price }}</p>
          <p v-if="item.isWinning">Поставщик определен<i /></p>
          <p v-else>Поставщик не определен<i /></p>
        </div>
        <div class="advanced-info">
          <p>{{ item.date }}</p>
          <p>{{ item.region }}</p>
        </div>
        <!-- <ul>
          <li>имя</li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      timer: 0,
      search: "",
      code: "",
      hint: ["подсказочка"],
      data: [],
      filters: {
        isSmallBusines: false,
        date: {
          useRange: false,
          from: null,
          to: null,
        },
        playground: {
          selected: 0,
          list: ["выбрать площадку", "РосЭлТорг", "другие"],
        },
        isSupplierDefined: false,
        region: {
          selected: 0,
          list: ["выбрать регион"],
        },
        okpd2: {
          selected: 0,
          list: ["выбрать ОКПД2"],
        },
        fz: {
          selected: 0,
          list: ["44ФЗ"],
        },
        price: {
          from: null,
          to: null,
        },
      },
      sort: {
        selected: 0,
        angle: true,
        list: [
          "сортировка",
          "по дате",
          "по стоимости",
          "по кол-ву поставщиков",
        ],
      },
    };
  },
  mounted() {},
  methods: {
    request() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        console.log(this.search);
      }, 700);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 78px;
  padding-bottom: 24px;
  display: grid;
  grid-template-columns: 364px 1fr;
  gap: 24px;
  position: relative;
  .side {
    position: relative;
    .fixed {
      width: 364px;
      position: fixed;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(22px);
      border-radius: 24px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
  }
  .wrapper {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(22px);
    border-radius: 24px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    .card {
      overflow: hidden;
      padding: 24px 12px;
      border-radius: 20px;
      background: #f5f5f5;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 12px;
      cursor: pointer;
      .rlt {
        position: absolute;
        top: 8px;
        color: #a20df6;
        i {
          position: absolute;
          top: 0;
          left: 0;
          filter: blur(20px);
          background: rgba(161, 13, 246, 0.8);
          border-radius: 100%;
          transform: translate(-50%, -50%);
          height: 40px;
          aspect-ratio: 1/1;
        }
      }
      .info {
        display: flex;
        align-items: center;
        gap: 12px;
        position: relative;
        p:nth-child(2) {
          margin-right: auto;
        }
        i {
          position: absolute;
          top: 50%;
          right: -80px;
          filter: blur(20px);
          background: rgba(0, 197, 115, 0.8);
          transform: translate(-50%, -50%);
          border-radius: 100%;
          height: 100px;
          aspect-ratio: 1/1;
        }
      }
      .advanced-info {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      ul {
        display: flex;
        flex-direction: column;
        li {
          border-top: 1px solid rgba(0, 3, 18, 0.05);
          padding: 12px;
          &:last-child {
            padding-bottom: 0;
          }
        }
      }
    }
  }
}
.search {
  background: #f5f5f5;
  border-radius: 20px;
  overflow: hidden;
  .search-bar {
    display: flex;
    position: relative;
    input {
      background: #f5f5f5;
      color: #000312;
      border-radius: 100px;
      width: 100%;
      padding: 0 16px 0 36px;
    }
    input:focus ~ svg {
      stroke: #00c572;
    }
    svg {
      position: absolute;
      top: 50%;
      left: 8px;
      transform: translate(0, -50%);
      stroke: #a20df6;
      transition: stroke 0.2s;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    padding: 13px 16px 13px 12px;
    cursor: pointer;
    color: rgba(0, 3, 18, 0.5);
    &:hover {
      background: rgba(0, 3, 18, 0.1);
    }
  }
}
.sort {
  display: flex;
  gap: 12px;
  align-items: center;
  .sort-button {
    position: relative;
    height: 24px;
    width: 24px;
    max-height: 24px;
    max-width: 24px;
    cursor: pointer;
    &:hover .pulse {
      animation: ease-in-out infinite pulse 2s;
    }
    svg {
      z-index: 1;
    }
    .pulse {
      position: absolute;
      pointer-events: none;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 197, 115, 0.5);
      aspect-ratio: 1/1;
      height: 1px;
      border-radius: 100%;
      z-index: 0;
    }
  }
  .select-bar {
    padding: 0 16px;
    background: #f5f5f5;
    border-radius: 100px;
    select {
      background: #f5f5f5;
      color: #000312;
      border-radius: 100px;
      padding: 0;
    }
  }
}
.input-checkbox {
  color: #f5f5f5;
}
.date {
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    background: #f5f5f5;
    border-radius: 20px;
    padding: 0 16px;
  }
  input {
    background: #f5f5f5;
    color: #000312;
    border-radius: 100px;
    padding: 0;
  }
}
.playground,
.region,
.fz,
.okpd2 {
  background: #f5f5f5;
  border-radius: 20px;
  padding: 0 16px;
  select {
    background: #f5f5f5;
    color: #000312;
    border-radius: 100px;
    padding: 0;
    width: 100%;
  }
}
.price {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  input {
    min-width: 0;
    width: 100%;
    background: #f5f5f5;
    color: #000312;
    border-radius: 20px;
  }
}
@keyframes pulse {
  0% {
    height: 1px;
    opacity: 1;
  }

  100% {
    height: 48px;
    opacity: 0;
  }
}

input[type="date"] {
  position: relative;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  color: transparent;
  background: transparent;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-clear-button {
  z-index: -10;
}

input[type="date"]::-webkit-input-placeholder {
  z-index: 99;
}

input[type="date"]:placeholder {
  z-index: 99;
}
input[type="date"]:not(.has-value):before {
  content: attr(placeholder);
  width: 100%;
}

input[type="date"] {
  padding: 12px 20px;
}
</style>
