<template>


  <v-app id="inspire">
    <v-layout v-layout align-space-around justify-space-between column fill-height>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-subheader>Trimmer</v-subheader>
          <v-container fluid grid-list-sm>

            <v-layout align-center justify-start column fill-height>
              <v-flex v-for="i in 6" :key="i" xs4>

                    <v-img
                        class="white--text"
                        height="200px"
                        src="https://ineosteamgb.s3.amazonaws.com/images/m5312_crop999331_600x400_1549891237AE5E.jpg"
                    >
                        <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                            <span class="headline">Trimmer</span>
                            </v-flex>
                        </v-layout>
                        </v-container>
                    </v-img>

                    <v-card-title>
                        <div>
                        <span class="grey--text">Number 10</span><br>
                        <span>Whitehaven Beach</span><br>
                        <span>Whitsunday Island, Whitsunday Islands</span>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn flat color="black">Share</v-btn>
                        <v-btn flat color="black">Explore</v-btn>
                    </v-card-actions>
                </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>

</template>

<script>
export default {};
</script>
<style>
</style>
