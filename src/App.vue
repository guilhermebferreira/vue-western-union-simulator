<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <div>
        <v-carousel-transition
        >
          <font-awesome-icon
            key="icon"
            :icon="icon"
          />
        </v-carousel-transition>
      </div>

      <v-spacer />

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <v-col>
            <WesternUnion :taxa=68.6478 />
          </v-col>
          <v-col />
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import WesternUnion from './components/WesternUnion'

export default {
  name: 'App',

  components: {
    WesternUnion
  },

  data: () => ({
    icon: 'pound-sign',
    iconSet: [
      'euro-sign',
      'dollar-sign',
      'rupee-sign',
      'hand-holding-usd'
    ]
  }),

  mounted () {
    setInterval(() => {
      this.pollIcons()
    }, 5000)
  },

  methods: {
    pollIcons () {
      console.log(Math.floor(Math.random() * this.iconSet.length))
      console.log(this.iconSet[Math.floor(Math.random() * this.iconSet.length)])
      this.icon = this.iconSet[Math.floor(Math.random() * this.iconSet.length)]
      // this.icon = this.iconSet[Math.floor(Math.random() * this.iconSet.length)]
    }
  }
}
</script>
