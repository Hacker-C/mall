<template>
  <div id="mySwiper">
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot></slot>
    </div>

    <div class="indicator">
      <div
        class="indicatorItem"
        v-for="(item, index) in slideCount"
        :key="index"
        :class="{ active: index === currentIndex - 1 }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {},
  data: function () {
    return {
      slideCount: 0,
      interval: 3000,
      imgWidth: 0, //swiper每张图片的宽度一样
      swiperStyle: {}, //利用swiper的style对象来控制着“过渡”
      currentIndex: 1, //记录当前滑动的下标
      scrolling: false, //当用手触摸和移动时,则暂停滚动
      animalDuration: 300, //切换一张图片0.3
      showIndicator: true, //当只有一张图片时，不显示小点点
      moveRatio: 0.25,
      playTimer: null, //控制着计时器的开始与暂停
      moveRatio: 0.25
    }
  },
  methods: {
    handleDom: function () {
      let swiperEle = document.querySelector('.swiper')
      let slideEles = document.getElementsByClassName('slide')
      this.slideCount = slideEles.length
      // console.log(this.slideCount)
      if (this.slideCount > 1) {
        let cloneFirst = slideEles[0].cloneNode(true)
        let cloneLast = slideEles[this.slideCount - 1].cloneNode(true)
        swiperEle.insertBefore(cloneLast, slideEles[0])
        swiperEle.appendChild(cloneFirst)
        // console.log(slideEles)
        this.imgWidth = swiperEle.offsetWidth
        this.swiperStyle = swiperEle.style
      }
      //显示第一张图片（不是刚刚从最后面添加到前面的那张）
      this.setTransform(-this.imgWidth)
    },

    startTimer: function () {
      let that = this
      this.playTimer = setInterval(function () {
        that.currentIndex++
        that.scrollContent(-that.currentIndex * that.imgWidth) //使用过渡实现移动轮播图，效果更舒适
      }, that.interval)
    },

    setTransform: function (movePosition) {
      //控制着轮播图向左右移动
      this.swiperStyle.transform = `translateX(${movePosition}px)`
      this.swiperStyle['-webkit-transform'] = `translateX(${movePosition}px)`
      this.swiperStyle['-ms-transform'] = `translateX(${movePosition}px)`
    },

    scrollContent: function (position) {
      this.scrolling = true //滚动时不能用手滑动图片
      this.swiperStyle.transition = `transform ${this.animalDuration}ms ease`
      this.setTransform(position)
      this.checkPosition()
      this.scrolling = false
    },
    checkPosition: function () {
      //在确保“过渡”结束后再检查下标是否合理

      let that = this
      setTimeout(function () {
        that.swiperStyle.transition = '0ms'
        if (that.currentIndex >= that.slideCount + 1) {
          that.currentIndex = 1
          that.setTransform(-that.currentIndex * that.imgWidth) //当移动到最后一张，直接移动到第一张，不用过渡
        } else if (that.currentIndex <= 0) {
          that.currentIndex = that.slideCount
          that.setTransform(-that.currentIndex * that.imgWidth)
        }
      }, that.animalDuration)
    },
    touchStart: function (e) {
      //如果图片正在滚动，则不能滑动图片
      if (this.scrolling) return
      //滑动时，暂停计时器
      this.stopTimer()
      this.startX = e.touches[0].pageX //记录手指进入屏幕的距离，用于判断划痕的距离判断是否滑动图片
    },
    touchMove: function (e) {
      this.currentX = e.touches[0].pageX
      this.distance = this.currentX - this.startX
      let currentPosition = -this.currentIndex * this.imgWidth
      let moveDistance = this.distance + currentPosition
      this.setTransform(moveDistance)
    },
    touchEnd: function (e) {
      let endDistance = Math.abs(this.distance) //取绝对值
      let movePercentage = this.imgWidth * this.moveRatio //当手指滑动到这个距离，则自动跳到下一张图片
      if (this.distance === 0) {
        return
      } else if (this.distance > 0 && endDistance > movePercentage) {
        //this.distance>0 则说明手指向右滑
        this.currentIndex--
      } else {
        this.currentIndex++
      }
      this.scrollContent(-this.currentIndex * this.imgWidth)
      this.startTimer()
    },
    stopTimer: function () {
      clearInterval(this.playTimer)
    }
  },
  mounted: function () {
    //1.操作dom，在前后添加slide
    setTimeout(() => {
      this.handleDom()
      this.startTimer()
    }, 200)
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0px;
  padding: 0px;
}
#mySwiper {
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
}
.indicator {
  display: flex;
  position: absolute;
  justify-content: center;
  bottom: 12px;
  width: 100%;
}
.indicatorItem {
  width: 8px;
  height: 8px;
  margin: 5px 3px;
  border-radius: 50%;
  background-color: #fff;
}
.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>
