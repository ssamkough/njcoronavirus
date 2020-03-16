<template>
  <v-container>
    <v-row>
      <v-col>
        <blockquote class="custom-blockquote">
          <p>
            The following symptoms may appear
            <span
              class="font-weight-bold"
            >2-14 days after exposure:</span>
          </p>
        </blockquote>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card flat tile class="d-flex">
          <v-img :src="fever" aspect-ratio="2" class="symptom-pic" alt="Fever">
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-card>
      </v-col>
      <v-col>
        <v-card flat tile class="d-flex">
          <v-img :src="cough" aspect-ratio="2" class="symptom-pic" alt="Cough">
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-card>
      </v-col>
      <v-col>
        <v-card flat tile class="d-flex">
          <v-img :src="breathe" aspect-ratio="2" class="symptom-pic" alt="Shortness of Breathe">
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <blockquote class="custom-blockquote">
          <span class="font-weight-bold">
            If you develop emergency warning signs for COVID-19 get medical
            attention immediately. Emergency warning signs include:
          </span>
          <ul class="symptom-list">
            <li>Difficulty breathing or shortness of breath</li>
            <li class="every-other-li">Persistent pain or pressure in the chest</li>
            <li>New confusion or inability to arouse</li>
            <li class="every-other-li">Bluish lips or face</li>
          </ul>
          <br />
          <span class="subtitle-1">
            *This list is not all inclusive. Please consult your medical
            provider for any other symptoms that are severe or concerning.
          </span>
        </blockquote>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Symptoms",
  data() {
    return {
      fever: require("./../assets/symptoms/covid-fever.jpg"),
      cough: require("./../assets/symptoms/covid-cough.jpg"),
      breathe: require("./../assets/symptoms/covid-shortness-of-breathe.jpg")
    };
  }
};
</script>

<style scoped>
@media (max-width: 425.98px) {
  .symptom-pic {
  }
}
</style>