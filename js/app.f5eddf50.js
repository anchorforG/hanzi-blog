(function(e){function t(t){for(var a,o,s=t[0],u=t[1],c=t[2],l=0,g=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&g.push(i[o][0]),i[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);h&&h(t);while(g.length)g.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4386cea0"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=a);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(e);var c=new Error;r=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,n[1](c)}i[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var h=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"25eb":function(e,t,n){"use strict";n("b366")},"28d1":function(e,t,n){},"400d":function(e,t,n){"use strict";n("28d1")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("header",{staticClass:"fixed-top navbar shadow-sm p-3 w-auto bg-white rounded"},[t("div",{staticClass:"container"},[t("div",[t("router-link",{attrs:{to:"/"}},[e._v("首页")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("关于")])],1),e._m(0)])]),t("router-view")],1)},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"font-weight-lighter"},[t("h6",[t("ruby",[e._v(" 你 "),t("rt",[e._v("ní")])]),e._v("   "),t("ruby",[e._v(" 好 "),t("rt",[e._v("hǎo")])])])])}],o=(n("25eb"),n("2877")),s={},u=Object(o["a"])(s,i,r,!1,null,null,null),c=u.exports,l=n("8c4f"),h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("Hanzi")],1)},g=[],d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}],staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" 未收录此汉字信息，已初始化汉字 ")]),t("div",{staticClass:"row w-50 m-auto"},[t("div",{staticClass:"input-group mb-3"},[e._m(0),t("input",{directives:[{name:"model",rawName:"v-model",value:e.character,expression:"character"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入要查询的汉字","aria-label":"请输入要查询的汉字","aria-describedby":"button-addon",onkeyup:"this.value=this.value.replace(/[^\\u4e00-\\u9fa5]/g,'')",onbeforepaste:"clipboardData.setData('text',clipboardData.getData('text').replace(/[^\\u4E00-\\u9FA5]/g,''))",maxlength:"1",size:"1"},domProps:{value:e.character},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchData.apply(null,arguments)},input:function(t){t.target.composing||(e.character=t.target.value)}}}),t("div",{staticClass:"input-group-append"},[t("button",{staticClass:"btn btn-outline-success",attrs:{type:"button",id:"button-addon"},on:{click:e.searchData}},[e._v("查询")])])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm"},[t("div",{staticClass:"w-100"},[t("div",{staticClass:"m-auto",attrs:{id:"character-target-div"}},[t("svg",{ref:"charRef",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",id:"character-div"}},[t("line",{attrs:{x1:"0",y1:"0",x2:"200",y2:"200",stroke:"#DDD"}}),t("line",{attrs:{x1:"200",y1:"0",x2:"0",y2:"200",stroke:"#DDD"}}),t("line",{attrs:{x1:"100",y1:"0",x2:"100",y2:"200",stroke:"#DDD"}}),t("line",{attrs:{x1:"0",y1:"100",x2:"200",y2:"100",stroke:"#DDD"}})])])]),t("div",{staticClass:"d-flex flex-row justify-content-center"},[e._l(e.itemArr,(function(n){return[t("div",{key:n,staticClass:"alert align-self-center"},[t("div",[e._v(e._s(n))])])]}))],2),e._m(1)])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm"},[t("div",{ref:"strokeRef",staticClass:"d-flex flex-wrap justify-content-start border m-2",attrs:{id:"target"}}),t("div",{staticClass:"d-flex flex-column mb-4"},[t("div",{staticClass:"m-auto p-2"},[t("div",{ref:"writeRef",attrs:{id:"character-target-test"}})]),t("button",{staticClass:"btn btn-primary m-auto w-25",attrs:{type:"button"},on:{click:e.animatefunWrite}},[e._v("重写")])])])])])},p=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text bg-white"},[e._v("字")])])},function(){var e=this,t=e._self._c;return t("p",[t("del",[e._v("tts is not work, so delete it.")])])}];const f=n("7508"),v=n("df53"),m=n("de89");m.start();var b={data(){return{character:"我",itemArr:[],flag:!1}},methods:{animatefunWrite(){this.writeTest.quiz()},renderFanningStrokes(e,t){let n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.style.width="75px",n.style.height="75px",n.style.border="1px solid #EEE",n.style.marginRight="3px",e.appendChild(n);let a=document.createElementNS("http://www.w3.org/2000/svg","g"),i=f.getScalingTransform(75,75);a.setAttributeNS(null,"transform",i.transform),n.appendChild(a),t.forEach((function(e){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttributeNS(null,"d",e),t.style.fill="#555",a.appendChild(t)}))},initData(e){let t=this;this.text=f.create("character-div",e,{width:200,height:200,padding:20,strokeColor:"#000000",radicalColor:"#168F16",showOutline:!0,strokeAnimationSpeed:3,delayBetweenStrokes:600,delayBetweenLoops:300,onLoadCharDataSuccess:function(){t.flag=!1,t.strokesData(e),t.writeData(e),t.pinyinData(e)},onLoadCharDataError:function(){t.flag=!0}}),this.text.loopCharacterAnimation()},strokesData(e){const t=this;f.loadCharacterData(e).then((function(e){for(var n=document.getElementById("target"),a=0;a<e.strokes.length;a++){var i=e.strokes.slice(0,a+1);t.renderFanningStrokes(n,i)}}))},writeData(e){this.writeTest=f.create("character-target-test",e,{width:200,height:200,padding:20,showCharacter:!0}),this.animatefunWrite()},pinyinData(e){let t=m.getCharacterFrequency(e,"only"),n=t.pinyin.split("/");this.itemArr=n.map(e=>v.convert(e))},searchData(){let e=this.character;const t=new RegExp("[一-龥]+");e&&t.test(e)&&(this.itemArr=[],this.$refs.charRef.innerHTML="",this.$refs.strokeRef.innerHTML="",this.$refs.writeRef.innerHTML="",this.initData(e))}},mounted(){let e=this.character||"我";this.initData(e)}},w=b,y=(n("400d"),Object(o["a"])(w,d,p,!1,null,"67d953a2",null)),x=y.exports,k={name:"Home",components:{Hanzi:x}},z=k,C=(n("bbb3"),Object(o["a"])(z,h,g,!1,null,"e6914922",null)),_=C.exports;a["a"].use(l["a"]);const j=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))}],D=new l["a"]({base:"",routes:j});var O=D,A=n("2f62");a["a"].use(A["a"]);var E=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=n("9483");Object(S["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});n("df25");a["a"].config.productionTip=!1,new a["a"]({router:O,store:E,render:e=>e(c)}).$mount("#app")},"78b3":function(e,t,n){},b366:function(e,t,n){},bbb3:function(e,t,n){"use strict";n("78b3")},df25:function(e,t,n){},df53:function(e,t,n){(function(){var t;t={pinyinRegex:/(shuang|chuang|zhuang|xiang|qiong|shuai|niang|guang|sheng|kuang|shang|jiong|huang|jiang|shuan|xiong|zhang|zheng|zhong|zhuai|zhuan|qiang|chang|liang|chuan|cheng|chong|chuai|hang|peng|chuo|piao|pian|chua|ping|yang|pang|chui|chun|chen|chan|chou|chao|chai|zhun|mang|meng|weng|shai|shei|miao|zhui|mian|yong|ming|wang|zhuo|zhua|shao|yuan|bing|zhen|fang|feng|zhan|zhou|zhao|zhei|zhai|rang|suan|reng|song|seng|dang|deng|dong|xuan|sang|rong|duan|cuan|cong|ceng|cang|diao|ruan|dian|ding|shou|xing|zuan|jiao|zong|zeng|zang|jian|tang|teng|tong|bian|biao|shan|tuan|huan|xian|huai|tiao|tian|hong|xiao|heng|ying|jing|shen|beng|kuan|kuai|nang|neng|nong|juan|kong|nuan|keng|kang|shua|niao|guan|nian|ting|shuo|guai|ning|quan|qiao|shui|gong|geng|gang|qian|bang|lang|leng|long|qing|ling|luan|shun|lian|liao|zhi|lia|liu|qin|lun|lin|luo|lan|lou|qiu|gai|gei|gao|gou|gan|gen|lao|lei|lai|que|gua|guo|nin|gui|niu|nie|gun|qie|qia|jun|kai|kei|kao|kou|kan|ken|qun|nun|nuo|xia|kua|kuo|nen|kui|nan|nou|kun|jue|nao|nei|hai|hei|hao|hou|han|hen|nai|rou|xiu|jin|hua|huo|tie|hui|tun|tui|hun|tuo|tan|jiu|zai|zei|zao|zou|zan|zen|eng|tou|tao|tei|tai|zuo|zui|xin|zun|jie|jia|run|diu|cai|cao|cou|can|cen|die|dia|xue|rui|cuo|cui|dun|cun|cin|ruo|rua|dui|sai|sao|sou|san|sen|duo|den|dan|dou|suo|sui|dao|sun|dei|zha|zhe|dai|xun|ang|ong|wai|fen|fan|fou|fei|zhu|wei|wan|min|miu|mie|wen|men|lie|chi|cha|che|man|mou|mao|mei|mai|yao|you|yan|chu|pin|pie|yin|pen|pan|pou|pao|shi|sha|she|pei|pai|yue|bin|bie|yun|nüe|lve|shu|ben|ban|bao|bei|bai|lüe|nve|ren|ran|rao|xie|re|ri|si|su|se|ru|sa|cu|ce|ca|ji|ci|zi|zu|ze|za|hu|he|ha|ju|ku|ke|qi|ka|gu|ge|ga|li|lu|le|qu|la|ni|xi|nu|ne|na|ti|tu|te|ta|xu|di|du|de|bo|lv|ba|ai|ei|ao|ou|an|en|er|da|wu|wa|wo|fu|fo|fa|nv|mi|mu|yi|ya|ye|me|mo|ma|pi|pu|po|yu|pa|bi|nü|bu|lü|e|o|a)r?[1-5]/gi,vowels:{"a*":"0","e*":"1","i*":"2","o*":"3","u*":"4","ü*":"5","A*":"6","E*":"7","I*":"8","O*":"9","U*":"10","Ü*":"11"},pinyin:{1:["ā","ē","ī","ō","ū","ǖ","Ā","Ē","Ī","Ō","Ū","Ǖ"],2:["á","é","í","ó","ú","ǘ","Á","É","Í","Ó","Ú","Ǘ"],3:["ǎ","ě","ǐ","ǒ","ǔ","ǚ","Ǎ","Ě","Ǐ","Ǒ","Ǔ","Ǚ"],4:["à","è","ì","ò","ù","ǜ","À","È","Ì","Ò","Ù","Ǜ"],5:["a","e","i","o","u","ü","A","E","I","O","U","Ü"]},convert:function(e){var t,n,a,i,r;if(i=e.match(this.pinyinRegex),!i)return e;for(t=0,n=i.length;t<n;t++)a=i[t],r=this.getReplacement(a),e=e.replace(a,r);return e},getReplacement:function(e){var t,n,a,i,r,o,s,u,c;for(a in t=this.getAccentMap(),r=e.slice(-1),c=e.slice(0,-1).replace("v","ü").replace("V","Ü"),t)if(o=t[a],c.indexOf(a)>=0)return s=o.match(/.\*/)[0],u=this.vowels[s],n=this.pinyin[r.toString()][u],i=c.replace(a,o).replace(s,n),i;return e},getAccentMap:function(){var e,t,n,a,i,r,o,s;if(!this.accentMap)for(o="a*i a*o e*i ia* ia*o ie* io* iu* A*I A*O E*I IA* IA*O IE* IO* IU* o*u ua* ua*i ue* ui* uo* üe* O*U UA* UA*I UE* UI* UO* ÜE* A* E* I* O* U* Ü* a* e* i* o* u* ü*",i=o.replace(/\*/g,""),s=o.split(" "),this.accentMap={},r=i.split(" "),t=n=0,a=r.length;n<a;t=++n)e=r[t],this.accentMap[e]=s[t];return this.accentMap}},function(t,n){e.exports=n()}(0,(function(){return t}))}).call(this)}});