<template>
  <div class="container">
    <div class="alert alert-danger" v-show="flag" role="alert" >
      未收录此汉字信息，已初始化汉字
    </div>
    <div class="row w-50 m-auto"> 
      <!-- 查询 -->
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text bg-white">字</span>
        </div>
        <input type="text" class="form-control" placeholder="请输入要查询的汉字" aria-label="请输入要查询的汉字" aria-describedby="button-addon" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))" @keyup.enter="searchData" maxlength="1" size="1" v-model="character">
        <div class="input-group-append">
          <button class="btn btn-outline-success" type="button" id="button-addon" @click="searchData">查询</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <!-- 汉字 -->
        <div class="w-100">
          <div class="m-auto" id="character-target-div">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" id="character-div" ref="charRef">
              <line x1="0" y1="0" x2="200" y2="200" stroke="#DDD"></line>
              <line x1="200" y1="0" x2="0" y2="200" stroke="#DDD"></line>
              <line x1="100" y1="0" x2="100" y2="200" stroke="#DDD"></line>
              <line x1="0" y1="100" x2="200" y2="100" stroke="#DDD"></line>
            </svg>
          </div>
        </div>
        <!-- 拼音 -->
        <template v-for="item in itemArr">
          <div class="alert align-self-center" :key="item">
            <div>{{item}}</div>
          </div>
        </template>
        <p><del>tts is not work, so delete it.</del></p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <!-- 字帖 -->
        <div ref="strokeRef" class="d-flex flex-wrap justify-content-start border m-2" id="target">
        </div>
        <!-- 手写区 -->
        <div class="d-flex flex-column mb-4">
          <div class="m-auto p-2">
            <div id="character-target-test" ref="writeRef"></div>
          </div>
          <button type="button" class="btn btn-primary m-auto w-25" @click="animatefunWrite">重写</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const HanziWriter = require("hanzi-writer");
const PinyinConverter = require("../assets/js/PinyinConverter");
const hanzi = require("hanzi");
hanzi.start();
// import Speech from 'speak-tts' 
// const speech = new Speech()

export default {
  data() {
    return {
      character: "我",
      itemArr: [],
      flag: false
    };
  },
  methods: {
    // 手写
    animatefunWrite() {
      this.writeTest.quiz();
    },

    // 字帖
    renderFanningStrokes(target, strokes) {
      let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.style.width = '75px';
      svg.style.height = '75px';
      svg.style.border = '1px solid #EEE'
      svg.style.marginRight = '3px'
      target.appendChild(svg);
      let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

      // set the transform property on the g element so the character renders at 75x75
      let transformData = HanziWriter.getScalingTransform(75, 75);
      group.setAttributeNS(null, 'transform', transformData.transform);
      svg.appendChild(group);

      strokes.forEach(function(strokePath) {
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttributeNS(null, 'd', strokePath);
        // style the character paths
        path.style.fill = '#555';
        group.appendChild(path);
      });
    },
    
    // 检测声音支持
    // checkSpeak(){
    //   if (speech.hasBrowserSupport()) { // returns a boolean
    //     speech.init({
    //       'lang': 'zh-CN'
    //     }).then((data) => {
    //       // The "data" object contains the list of available voices and the voice synthesis params
    //       console.log("Speech is ready, voices are available", data);
    //       let voices = data.voices.filter(v => {return v.lang === 'zh-CN'});
    //       if (voices.length) {
    //         let voice = voices[0];
    //         speech.setVoice(voice.name);
    //         console.log('Set voice to '+voice.name);
    //       } else {
    //         console.log('No voices found for zh-CN');
    //       }
    //     }).catch(e => {
    //       console.error("An error occured while initializing Speech: ", e);
    //     })
    //   }
    // },

    // 汉字
    initData(char){
      let _this = this;
      this.text = HanziWriter.create("character-div", char, {
        width: 200,
        height: 200,
        padding: 20,
        strokeColor: "#000000", // 字体颜色
        radicalColor: "#168F16", // 偏旁颜色
        showOutline: true, //是否显示轮廓
        strokeAnimationSpeed: 3, // 绘制每个笔画的速度(默认1)
        delayBetweenStrokes: 600, // 动画时每个笔划之间的时间(毫秒,默认1000)
        delayBetweenLoops: 300,//循环动画
        onLoadCharDataSuccess: function() {
          _this.flag = false
          // 字帖
          _this.strokesData(char);
          // 手写
          _this.writeData(char);
          // 拼音
          _this.pinyinData(char);
        },
        onLoadCharDataError: function() {
          _this.flag = true
        }
      });
      this.text.loopCharacterAnimation();
    },

    // 字帖
    strokesData(char){
      const _this = this;
      HanziWriter.loadCharacterData(char).then(function(charData) {
        var target = document.getElementById('target');
        for (var i = 0; i < charData.strokes.length; i++) {
          var strokesPortion = charData.strokes.slice(0, i + 1);
          _this.renderFanningStrokes(target, strokesPortion);
        }
      });
    },

    // 手写
    writeData(char){
      this.writeTest = HanziWriter.create("character-target-test", char, {
        width: 200,
        height: 200,
        padding: 20,
        showCharacter: true,
      });
      this.animatefunWrite();
    },

    // 拼音
    pinyinData(char){
      let hData = hanzi.getCharacterFrequency(char, "only");
      let tempArr = hData.pinyin.split("/");
      this.itemArr = tempArr.map(item =>{
        return PinyinConverter.convert(item)
      })
    },

    // 发音
    // getSpeak(){
    //   speech.speak({ text: '我' }).catch(console.error);
    // }

    searchData(){
      let inputVal = this.character;
      const pattern = new RegExp("[\u4E00-\u9FA5]+");
      if(inputVal && pattern.test(inputVal)){
        this.itemArr = [];
        this.$refs.charRef.innerHTML="";
        this.$refs.strokeRef.innerHTML="";
        this.$refs.writeRef.innerHTML="";
        this.initData(inputVal);
      }
    },

  },
  // created() { 
  //   this.checkSpeak();
  // },
  mounted() {
    let char = this.character || "我";
    // init
    this.initData(char)
  }
};
</script>

<style scoped>
*[id^="character-target-"] {
  border: 1px solid #ccc;
  width: 202px;
  height: 202px;
  flex-shrink: 0;
} 
.form-control:focus {
  box-shadow: none;
}
</style>
