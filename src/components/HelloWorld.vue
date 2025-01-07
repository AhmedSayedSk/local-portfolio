<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            Home
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            About
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="contact_mail" />
          </q-item-section>
          <q-item-section>
            Contact
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page>
        Content will go here
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { QLayout, QHeader, QDrawer, QPageContainer, QPage, QToolbar, QBtn, QToolbarTitle, QList, QItem, QItemSection, QIcon } from 'quasar'

export default {
  name: 'HelloWorld',
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QBtn,
    QToolbarTitle,
    QList,
    QItem,
    QItemSection,
    QIcon
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>

<style>
div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
