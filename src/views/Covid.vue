<template>
  <v-container>
    <v-row>
      <v-col>
        <blockquote class="custom-blockquote">
          There has been an outbreak of a respiratory disease caused by a
          novel (new) coronavirus that was first detected in China and which
          has now been detected in more than 100 locations internationally,
          including in the United States. The virus has been named
          “SARS-CoV-2” and the disease it causes has been named “coronavirus
          disease 2019” (abbreviated “COVID-19”).
        </blockquote>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-tabs background-color="gray light-2" centered fixed-tabs show-arrows>
          <v-tab>Symptoms</v-tab>
          <v-tab-item>
            <Symptoms />
          </v-tab-item>
          <v-tab>Prevention</v-tab>
          <v-tab-item>
            <Prevention />
          </v-tab-item>
          <v-tab>If You're Sick</v-tab>
          <v-tab-item>
            <IfSick />
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <blockquote class="subtitle-1">
          *For more information regarding the Coronavirus, please visit the
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >Centers for Disease Control and Prevention</a>.
        </blockquote>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Symptoms from "./../components/Symptoms";
import Prevention from "./../components/Prevention";
import IfSick from "./../components/IfSick";

export default {
  name: "Covid",
  components: {
    Symptoms,
    Prevention,
    IfSick
  }
};
</script>

<style>
.custom-blockquote {
  font-size: 18px;
}

.symptom-list {
  list-style-type: none;
}

.every-other-li {
  color: #7b95ad;
}

.left-image {
  display: inline-block;
  vertical-align: top;
}

.right-text {
  display: inline-block;
  margin-top: 50px;
  max-width: 30%;
}

@media (max-width: 575.98px) {
  .left-image {
    margin: 0px auto;
    margin-top: 10px;
  }

  .right-text {
    display: block;
    margin-top: 0px;
    max-width: 100%;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .left-image {
    margin: 0px auto;
    margin-top: 10px;
  }

  .right-text {
    display: block;
    margin-top: 0px;
    max-width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1024.98px) {
  .left-image {
    margin: 0px auto;
    margin-top: 10px;
  }

  .right-text {
    display: block;
    margin-top: 0px;
    max-width: 100%;
  }
}
</style>
