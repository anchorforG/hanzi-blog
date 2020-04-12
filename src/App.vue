<template>
  <div id="app">
    <header class="fixed-top navbar shadow-sm p-3 w-auto bg-white rounded">
      <div class="container">
        <div>
          <router-link to="/">首页</router-link>  | 
          <router-link to="/about">关于</router-link>
        </div>
        <div class="font-weight-lighter">      
          <h6>
            <ruby> 你 <rt>ní</rt> </ruby>
            &nbsp;
            <ruby> 好 <rt>hǎo</rt> </ruby>
          </h6>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 5rem
</style>
