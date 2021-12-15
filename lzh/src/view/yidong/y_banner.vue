<template>
  <div id="ss">
    <div class="wd" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li>
          <img
            :style="{ width: imgWidth + 'px' }"
            :src="sliders[sliders.length - 1].img"
            alt=""
          />
        </li>
        <li v-for="(item, index) in sliders" :key="index">
          <img :style="{ width: imgWidth + 'px' }" :src="item.img" alt="" />
        </li>
        <li>
          <img
            :style="{ width: imgWidth + 'px' }"
            :src="sliders[0].img"
            alt=""
          />
        </li>
      </ul>
      <ul class="direction">
        <li class="dleft" @click="move(425, 1, speed)">
          <svg
            class="icon"
            width="10px"
            height="10.00px"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"
            />
          </svg>
        </li>
        <li class="dright" @click="move(425, -1, speed)">
          <svg
            class="icon"
            width="10px"
            height="10.00px"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"
            />
          </svg>
        </li>
      </ul>
      <ul class="dots">
        <li
          v-for="(dot, i) in sliders"
          :key="i"
          :class="{ dotted: i === currentIndex - 1 }"
          @click="jump(i + 1)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ss",
  props: {
    initialSpeed: {
      type: Number,
      default: 40,
    },
    initialInterval: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      sliders: [
        {
          img: require("@/assets/images/part5.jpg"),
        },
        {
          img: require("@/assets/images/part2.jpg"),
        },
        {
          img: require("@/assets/images/part3.jpg"),
        },
      ],
      imgWidth: 425,
      currentIndex: 1,
      distance: -425,
      transitionEnd: true,
      speed: this.initialSpeed,
    };
  },
  computed: {
    containerStyle() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`,
      };
    },
    interval() {
      return this.initialInterval * 425;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.play();
      window.onblur = function () {
        this.stop();
      }.bind(this);
      window.onfocus = function () {
        this.play();
      }.bind(this);
    },
    move(offset, direction, speed) {
      console.log(speed);
      if (!this.transitionEnd) return;
      this.transitionEnd = false;
      direction === -1
        ? (this.currentIndex += offset / 425)
        : (this.currentIndex -= offset / 425);
      if (this.currentIndex > 3) this.currentIndex = 1;
      if (this.currentIndex < 1) this.currentIndex = 3;
      const destination = this.distance + offset * direction;
      this.animate(destination, direction, speed);
    },
    animate(des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null;
      }
      this.temp = window.setInterval(() => {
        if (
          (direc === -1 && des < this.distance) ||
          (direc === 1 && des > this.distance)
        ) {
          this.distance += speed * direc;
        } else {
          this.transitionEnd = true;
          window.clearInterval(this.temp);
          this.distance = des;
          if (des < -1275) this.distance = -425;
          if (des > -425) this.distance = -1275;
        }
      }, 20);
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(index - this.currentIndex) * 1150;
      const jumpSpeed =
        Math.abs(index - this.currentIndex) === 0
          ? this.speed
          : Math.abs(index - this.currentIndex) * this.speed;
      this.move(offset, direction, jumpSpeed);
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = window.setInterval(() => {
        this.move(425, -1, this.speed);
      }, this.interval);
    },
    stop() {
      window.clearInterval(this.timer);
      this.timer = null;
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#ss .window ul li {
  margin: 0;
  padding: 0;
}
li,
ul {
  list-style: none;
}
#ss {
  text-align: center;
}
.wd {
  position: relative;
  width: 425px;
  height: 151px;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 10px;
}
.wd ul li img {
  border-radius: 0;
}
.container {
  display: flex;
  position: absolute;
}
.dleft,
.dright {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  cursor: pointer;
  line-height: 50%;
}
.dleft svg,
.dright svg {
  height: 15px;
  width: 15px;
  text-align: center;
}
.dleft {
  left: 5%;
  padding-left: 6px;
  padding-top: 3px;
}
.dright {
  right: 6%;
  padding-right: 12px;
  padding-top: 3px;
}
img {
  user-select: none;
}
.dots {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}
.dots li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 3px;
  border: 1px solid white;
  background-color: #333;
  cursor: pointer;
}
.dots .dotted {
  background-color: orange;
}
</style>
