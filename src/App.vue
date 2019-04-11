<template>
  <v-app>
    <v-toolbar dark dense class="success">
        <v-toolbar-side-icon
            @click.stop="sideNav = !sideNav"
            class="hidden-md-and-up ">
        </v-toolbar-side-icon>
        <v-toolbar-title>
            <router-link to="/" tag="span" style="cursor: pointer">PortocaroDos</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-xs-only">
            <v-btn
            flat
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link">

            <v-icon left dark>{{ item.icon }}</v-icon>
            {{ item.title }}
            </v-btn>

            <v-btn
            v-if="userIsAuthenticated"
            flat
            @click="onLogout">
            <v-icon left dark>exit_to_app</v-icon>
            Sair
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer temporary absolute v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-if="userIsAuthenticated"
          @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Sair</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <main>
      <router-view></router-view>
    </main>

    <portocaro-footer class="custon-footer"></portocaro-footer>
    <!-- <v-footer class="pa-5">
        <v-spacer></v-spacer>
        <div>xani - &copy; {{ new Date().getFullYear() }}</div>
    </v-footer> -->

  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "face", title: "Registar-se", link: "/signup" },
        { icon: "lock_open", title: "Entrar", link: "/signin" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          {
            icon: "supervisor_account",
            title: "Ver Regatas",
            link: "/meetups"
          },
          { icon: "room", title: "Organizar Evento", link: "/meetup/new" },
          { icon: "person", title: "Utilizador", link: "/profile" },
          { icon: "calendar_today", title: "Calendario", link: "/calendar" },
          {
            icon: "fas fa-tachometer-alt",
            title: "Marinheiros",
            link: "/sailor"
          }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="stylus">
@import './stylus/main';
</style>
