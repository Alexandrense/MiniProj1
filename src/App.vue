<template>
  <app-header />
  <router-view/>
  <app-footer />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader, AppFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  display: flex;
  border-bottom: 1px dotted #ccc;
  padding: .5rem 1rem;

  p {
    padding-left: 1rem;
    margin-top:0px;
    margin-bottom:0px;
  }
}

footer {
  position: absolute;
  border-top: 1px solid #ccc;
  background-color: #37423d;
  bottom: 0;
  width: 100%;
  height: 65px;

  ul {
    list-style: none;
  }

  ul li {
    display: inline-flex;
    margin-left: 1rem;
  }
  p {
    margin-left: 1rem;
  }
  img {
    height:20px;
  }
}

nav {
  margin-left: auto;

  ul {
    list-style: none;
  }

  ul li {
    display: inline-flex;
    margin-left: 1rem;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.about, .work, .hobbies {
  p {
    text-align: justify;
  }
  p, h2, h3 {
    margin-left:20px;
    margin-right:20px;
  }
}
</style>
