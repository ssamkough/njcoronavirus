<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>Stay home (except to get medical care)</h3>
        <div class="left-image-right-text">
          <div class="left-image">
            <v-card flat tile class="d-flex">
              <v-img
                :src="stayHome"
                max-height="250"
                max-width="250"
                alt="Stay home (except to get medical care): avoid public areas and public transportation"
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
              <li class="every-other-li">Stay at home during illness</li>
              <li>Avoid public areas by not going to work, school, etc.</li>
              <li class="every-other-li">Avoid public transporation (i.e. ride-sharing, taxis, etc.)</li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Separate yourself from other people and animals in your home</h3>
        <div class="left-image-right-text">
          <div class="left-image">
            <v-card flat tile class="d-flex">
              <v-img
                :src="separateYourself"
                max-height="250"
                max-width="250"
                alt="Separate yourself from other people and animals in your home: stay away from others, stay in a specific room; limit contact with pets and animals"
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
              >Stay away from others, stay in a specific room and away from other people in your home. Use a separate bathroom if available</li>
              <li>Limit contact with pets & animals. You should restrict contact with pets and other animals while you are sick with COVID-19, just like you would around other people</li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Call ahead before visiting your doctor</h3>
        <div class="left-image-right-text">
          <div class="left-image">
            <v-card flat tile class="d-flex">
              <v-img
                :src="callAhead"
                max-height="250"
                max-width="250"
                alt="Call ahead before visiting your doctor: if you have a medical appointment, let them know ahead of time"
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
              >If you have a medical appointment, call the healthcare provider and tell them that you have or may have COVID-19</li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Wear a facemask if you are sick</h3>
        <div class="left-image-right-text">
          <div class="left-image">
            <v-card flat tile class="d-flex">
              <v-img
                :src="wearFacemask"
                max-height="250"
                max-width="250"
                alt="Wear a facemask if you are sick: wear a facemask when around other people; if you're not able to wear a facemask, then people who live with the person should not enter the room without a facemask"
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
              >If you are sick you should wear a facemask when you are around other people (e.g., sharing a room or vehicle)</li>
              <li>If the person who is sick is not able to wear a facemask (for example, because it causes trouble breathing), then people who live with the person who is sick should not stay in the same room with them, or they should wear a facemask if they enter a room with the person who is sick</li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Cover your coughs and sneezes</h3>
        <div class="left-image-right-text">
          <div class="left-image">
            <v-card flat tile class="d-flex">
              <v-img
                :src="cover"
                max-height="250"
                max-width="250"
                alt="Cover your coughs and sneezes: cover your mouth and nose with a tissue, dispose in lined trash can, immediately wash your hands with soap and water for at least 20 seconds"
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
              >Cover your mouth and nose with a tissue when you cough or sneeze</li>
              <li>Throw used tissues in a lined trash can</li>
              <li
                class="every-other-li"
              >Immediately wash your hands with soap and water for at least 20 seconds or. If soap and water are not available, clean your hands with an alcohol-based hand sanitizer that contains at least 60% alcohol</li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Clean your hands often</h3>
        <div class="left-image-right-text">
          <div class="left-image">
            <v-card flat tile class="d-flex">
              <v-img
                :src="cleanHands"
                max-height="250"
                max-width="250"
                alt="Clean your hands often: wash your hands often with soap and water for at least 20 seconds; if soap and water are not available, use an alcohol-based hand sanitizer with at least 60% alcohol; avoid touching your eyes, nose and mouth with unwashed hands"
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
              >Wash your hands often with soap and water for at least 20 seconds, especially after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food</li>
              <li>If soap and water are not readily available, use an alcohol-based hand sanitizer with at least 60% alcohol, covering all surfaces of your hands and rubbing them together until they feel dry</li>
              <li
                class="every-other-li"
              >Soap and water are the best option if hands are visibly dirty</li>
              <li>Avoid touching your eyes, nose, and mouth with unwashed hands</li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Avoid sharing personal household items</h3>
        <div class="left-image-right-text">
          <div class="left-image">
            <v-card flat tile class="d-flex">
              <v-img
                :src="avoidSharing"
                max-height="250"
                max-width="250"
                alt="Avoid sharing personal household items: you should not share dishes, glasses, cups, utensils, towels, or bedding with other people or pets; after using these items, wash them thoroughly with soap and water"
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
              >You should not share dishes, drinking glasses, cups, eating utensils, towels, or bedding with other people or pets in your home</li>
              <li>After using these items, they should be washed thoroughly with soap and water</li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Clean all “high-touch” surfaces everyday</h3>
        <div class="left-image-right-text">
          <div class="left-image">
            <v-card flat tile class="d-flex">
              <v-img
                :src="cleanSurfaces"
                max-height="250"
                max-width="250"
                alt="Clean all “high-touch” surfaces everyday: clean high touch surfaces often; follow the label instructions of the household cleaning spray or wipe"
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
              <li class="every-other-li">Practice routine cleaning of high touch surfaces</li>
              <li>Clean any surfaces that may have blood, stool, or body fluids on them</li>
              <li
                class="every-other-li"
              >Use a household cleaning spray or wipe, according to the label instructions</li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Monitor your symptoms</h3>
        <div class="left-image-right-text">
          <div class="left-image">
            <v-card flat tile class="d-flex">
              <v-img
                :src="monitorSymptoms"
                max-height="250"
                max-width="250"
                alt="Monitor your symptoms: seek medical attention if illness is worsening; before seeking care, call healthcare provider; wear facemask before entering facility; ask your health department to notify local and state health department"
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
              >Seek medical attention if your illness is worsening (e.g., difficulty breathing)</li>
              <li>Before seeking care, call your healthcare provider and tell them that you have, or are being evaluated for, COVID-19</li>
              <li class="every-other-li">Put on a facemask before you enter the facility</li>
              <li>Ask your healthcare provider to call the local or state health department</li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Discontinuing home isolation</h3>
        <div class="left-image-right-text">
          <div class="left-image">
            <v-card flat tile class="d-flex">
              <v-img
                :src="homeIsolation"
                max-height="250"
                max-width="250"
                alt="Discontinuing home isolation: Patients with confirmed COVID-19 should remain under home isolation until otherwise notified in consultation with healthcare providers and state and local health departments"
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
              >Patients with confirmed COVID-19 should remain under home isolation precautions until the risk of secondary transmission to others is thought to be low</li>
              <li>The decision to discontinue home isolation precautions should be made on a case-by-case basis, in consultation with healthcare providers and state and local health departments</li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "IfSick",
  data() {
    return {
      stayHome: require("./../assets/ifSick/covid-stay-home.png"),
      separateYourself: require("./../assets/ifSick/covid-separate-yourself.png"),
      callAhead: require("./../assets/ifSick/covid-call-ahead.png"),
      wearFacemask: require("./../assets/ifSick/covid-wear-facemask.png"),
      cover: require("./../assets/ifSick/covid-cover.png"),
      cleanHands: require("./../assets/ifSick/covid-clean-hands.png"),
      avoidSharing: require("./../assets/ifSick/covid-avoid-sharing.png"),
      cleanSurfaces: require("./../assets/ifSick/covid-clean-surfaces.png"),
      monitorSymptoms: require("./../assets/ifSick/covid-monitor-symptoms.png"),
      homeIsolation: require("./../assets/ifSick/covid-home-isolation.png")
    };
  }
};
</script>
