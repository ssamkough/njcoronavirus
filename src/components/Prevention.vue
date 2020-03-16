<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>Know How it Spreads</h3>
        <div class="left-image-right-text">
          <div class="left-image">
            <v-card flat tile class="d-flex">
              <v-img
                :src="knowHowItSpreads"
                max-height="250"
                max-width="250"
                alt="Know how it spreads: mainly from person to person"
              >
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </template>
              </v-img>
            </v-card>
          </div>
          <div class="right-text">
            <ul class="symptom-list">
              <li
                class="every-other-li"
              >The virus is thought to spread mainly from person-to-person.</li>
              <li>
                Between people who are in close contact with one another
                (within about 6 feet).
              </li>
              <li class="every-other-li">
                Through respiratory droplets produced when an infected person
                coughs or sneezes.
              </li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Protect Yourself</h3>
        <div class="left-image-right-text">
          <div class="left-image">
            <v-img
              :src="washHands"
              max-height="250"
              max-width="250"
              alt="Protect yourself: wash your hands often with soap and avoid touching your eyes, nose, and mouth"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </div>
          <div class="right-text">
            <ul class="symptom-list">
              <li class="every-other-li">
                <span class="font-weight-bold">Wash your hands</span>
                often with soap and water for at least 20 seconds especially
                after you have been in a public place, or after blowing your
                nose, coughing, or sneezing.
              </li>
              <li>
                <span class="font-weight-bold">Avoid touching your eyes, nose, and mouth</span>
                with unwashed hands.
              </li>
              <li class="every-other-li">
                <span class="font-weight-bold">Avoid close contact</span>
                with people who are sick
              </li>
              <li>
                Put
                <span class="font-weight-bold">distance between yourself and other people</span>
                if COVID-19 is spreading in your community.
              </li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Protect Others</h3>
        <div class="left-image-right-text">
          <div class="left-image">
            <v-img
              :src="cleanAndDisinfect"
              max-height="250"
              max-width="250"
              alt="Protect others: wash your hands often with soap for at least 20 seconds"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </div>
          <div class="right-text">
            <ul class="symptom-list">
              <li>
                <span class="font-weight-bold">Wash your hands</span>
                often with soap and water for at least 20 seconds especially
                after you have been in a public place, or after blowing your
                nose, coughing, or sneezing.
              </li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Prevention",
  data() {
    return {
      knowHowItSpreads: require("./../assets/prevention/covid-know-how-it-spreads.png"),
      washHands: require("./../assets/prevention/covid-wash-hands.png"),
      cleanAndDisinfect: require("./../assets/prevention/covid-clean-and-disinfect.png")
    };
  }
};
</script>