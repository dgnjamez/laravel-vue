<template>
  <div class="layout">
    <div class="navbar px-0">
      <div class="nav-content pl-0">
        <div class="nav-item hide-desktop hide-tablet" @click="navAuthAction">
          <more-vertical-icon v-if="sidebar" size="1.5x" class="icon"></more-vertical-icon>
        </div>
        <router-link tag="a" :to="{name: 'dashboard'}" class="nav-logo" :class="{'border-0': !sidebar}">
          laravel-vue
        </router-link>
        <div class="nav-item" @click="sidebarAction">
          <list-icon v-if="sidebar" size="1.5x" class="icon"></list-icon>
        </div>
      </div>
      <div id="navbar-auth" class="navbar-auth" @click="() => this.$modal.show('login-modal')">
        <div class="nav-item">
          Login
        </div>
      </div>
    </div>
    <div id="sidebar" class="sidebar" :class="{'no-sidebar' : !sidebar}">

    </div>
    <div id="content" class="content" :class="{'no-sidebar' : !sidebar}">
      <slot name="content"></slot>
    </div>
    <login-modal
      id="login-modal"
    />
  </div>
</template>

<script>
import $ from 'jquery';
import LoginModal from '../components/LoginModal'
import { handleSideBar } from '../helper.js'
import {
  ListIcon,
  MoreVerticalIcon
} from 'vue-feather-icons'

export default {
  props: {
    sidebar: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ListIcon,
    MoreVerticalIcon,
    LoginModal
  },
  mounted () {
    handleSideBar($('#app').width() > 768)
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    sidebarAction () {
      handleSideBar($('#sidebar').hasClass('isclose'))
    },

    navAuthAction () {
      if ($('#navbar-auth').hasClass('open-drop')) {
        $('#navbar-auth').removeClass('open-drop')
      } else {
        $('#navbar-auth').addClass('open-drop')
      }
    },

    openModal () {
      this.isOpen = true
    },

    modalClose (e) {
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
  .layout {
    width: 100%;
    height: 100vh;
  }

  .navbar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    background-color: #629662;
    color: white;
    width: 100%;
    height: 3.5em;
  }

  .nav-content,
  .navbar-auth {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    padding: .2em 0;
  }

  .nav-logo {
    width: 8em;
    font-weight: 900;
    font-size: 1.85em;
    border-right: 1px solid white;
  }

  .nav-item {
    min-width: 2.5em;
    font-weight: bold;
    padding: 0 .5em;
    cursor: pointer;
  }

  .nav-item:hover {
    color: #f5f58e;
  }

  .nav-logo, .nav-logo:active,
  .nav-item, .nav-item:active {
    color: white;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }

  .sidebar.no-sidebar {
    display: none !important;
  }

  .sidebar {
    position: absolute;
    top: 3.5em;
    left: 0;
    width: 14.8em;
    height: calc(100vh - 3.5em);
    transition: width 1s;
    background-color: #89b989;
  }

  .sidebar.isclose {
    width: 4em;
  }

  .content.no-sidebar {
    width: 100% !important;
  }

  .content {
    position: absolute;
    top: 3.5em;
    right: 0;
    width: calc(100% - 14.8em);
    max-height: calc(100vh - 3.5em);
    height: calc(100vh - 3.5em);
    overflow: auto;
    padding: .5em;
    transition: width 1s;
  }

  .content.handle-sideclose {
    width: calc(100% - 4em);
  }

@media (max-width: 450px) {
  .navbar {
    justify-content: center
  }

  .nav-content {
    width: 100vw;
    flex-direction: row-reverse;
  }

  .nav-logo {
    width: auto;
    border: 0;
  }

  .navbar-auth {
    overflow: hidden;
    position: absolute;
    top: 3.5em;
    left: 0;
    width: 100vw;
    max-height: 0em;
    padding: 0;
    z-index: 1000;
    transition: max-height .5s;
    background-color: #629662;
  }

  .navbar-auth.open-drop {
    max-height: 2em;
    padding: .2em 0;
  }

  .navbar-auth .nav-item {
    width: 100vw;
    height: 2em;
    border-top: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content,
  .sidebar.isclose {
    width: 0em;
    padding: 0;
    overflow: hidden;
  }

  .sidebar,
  .content.handle-sideclose {
    width: 100vw;
    overflow: hidden;
  }

  .content.handle-sideclose {
    padding: .5em;
  }

  .nav-logo {
    width: calc(100% - 2em);
  }
}
</style>