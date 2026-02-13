<template>
  <div>
    <h1>{{ t('home.title') }}</h1>
    <blockquote>
      <strong>{{ t('home.subtitle') }}</strong><br>
      {{ t('home.tagline') }}
    </blockquote>

    <hr>

    <h2>{{ t('home.philosophy') }}</h2>
    <p>{{ t('home.desc1') }}</p>
    <p>{{ t('home.whatYouWillLearn') }}</p>
    <ul>
      <li>{{ t('home.learn1') }}</li>
      <li>{{ t('home.learn2') }}</li>
      <li>{{ t('home.learn3') }}</li>
      <li>{{ t('home.learn4') }}</li>
    </ul>

    <!-- 首頁分子展示 -->
    <MoleculeGallery
      :title="t('home.moleculeGalleryTitle')"
      :molecules="keyMolecules"
    />

    <hr>

    <h2>{{ t('home.courseStructure') }}</h2>

    <h3>{{ t('home.part1') }}</h3>
    <div class="card">
      <router-link to="/chapter/1" class="chapter-link">{{ t('home.ch1Title') }}</router-link>
      <ul>
        <li>{{ t('home.ch1_1') }}</li>
        <li>{{ t('home.ch1_2') }}</li>
        <li>{{ t('home.ch1_3') }}</li>
        <li>{{ t('home.ch1_4') }}</li>
        <li>{{ t('home.ch1_5') }}</li>
      </ul>
    </div>
    <div class="card">
      <router-link to="/chapter/2" class="chapter-link">{{ t('home.ch2Title') }}</router-link>
      <ul>
        <li>{{ t('home.ch2_1') }}</li>
        <li>{{ t('home.ch2_2') }}</li>
        <li>{{ t('home.ch2_3') }}</li>
        <li>{{ t('home.ch2_4') }}</li>
        <li>{{ t('home.ch2_5') }}</li>
      </ul>
    </div>

    <h3>{{ t('home.part2') }}</h3>
    <div class="card">
      <router-link to="/chapter/3" class="chapter-link">{{ t('home.ch3Title') }}</router-link>
      <ul>
        <li>{{ t('home.ch3_1') }}</li>
        <li>{{ t('home.ch3_2') }}</li>
        <li>{{ t('home.ch3_3') }}</li>
        <li>{{ t('home.ch3_4') }}</li>
        <li>{{ t('home.ch3_5') }}</li>
      </ul>
    </div>
    <div class="card">
      <router-link to="/chapter/4" class="chapter-link">{{ t('home.ch4Title') }}</router-link>
      <ul>
        <li>{{ t('home.ch4_1') }}</li>
        <li>{{ t('home.ch4_2') }}</li>
        <li>{{ t('home.ch4_3') }}</li>
        <li>{{ t('home.ch4_4') }}</li>
        <li>{{ t('home.ch4_5') }}</li>
      </ul>
    </div>

    <h3>{{ t('home.part3') }}</h3>
    <div class="card">
      <router-link to="/chapter/5" class="chapter-link">{{ t('home.ch5Title') }}</router-link>
      <ul>
        <li>{{ t('home.ch5_1') }}</li>
        <li>{{ t('home.ch5_2') }}</li>
        <li>{{ t('home.ch5_3') }}</li>
        <li>{{ t('home.ch5_4') }}</li>
        <li>{{ t('home.ch5_5') }}</li>
      </ul>
    </div>
    <div class="card">
      <router-link to="/chapter/6" class="chapter-link">{{ t('home.ch6Title') }}</router-link>
      <ul>
        <li>{{ t('home.ch6_1') }}</li>
        <li>{{ t('home.ch6_2') }}</li>
        <li>{{ t('home.ch6_3') }}</li>
        <li>{{ t('home.ch6_4') }}</li>
        <li>{{ t('home.ch6_5') }}</li>
      </ul>
    </div>

    <h3>{{ t('home.part4') }}</h3>
    <div class="card">
      <router-link to="/chapter/7" class="chapter-link">{{ t('home.ch7Title') }}</router-link>
      <ul>
        <li>{{ t('home.ch7_1') }}</li>
        <li>{{ t('home.ch7_2') }}</li>
        <li>{{ t('home.ch7_3') }}</li>
        <li>{{ t('home.ch7_4') }}</li>
        <li>{{ t('home.ch7_5') }}</li>
      </ul>
    </div>
    <div class="card">
      <router-link to="/chapter/8" class="chapter-link">{{ t('home.ch8Title') }}</router-link>
      <ul>
        <li>{{ t('home.ch8_1') }}</li>
        <li>{{ t('home.ch8_2') }}</li>
        <li>{{ t('home.ch8_3') }}</li>
        <li>{{ t('home.ch8_4') }}</li>
      </ul>
    </div>

    <h3>{{ t('home.part5') }}</h3>
    <div class="card">
      <router-link to="/chapter/9" class="chapter-link">{{ t('home.ch9Title') }}</router-link>
      <p>{{ t('home.ch9Desc') }}</p>
    </div>
    <div class="card">
      <router-link to="/chapter/10" class="chapter-link">{{ t('home.ch10Title') }}</router-link>
      <p>{{ t('home.ch10Desc') }}</p>
    </div>

    <hr>

    <p>{{ t('home.getStarted') }}</p>
    <p>
      👉 <router-link to="/chapter/1"><strong>{{ t('home.startCh1') }}</strong></router-link>
    </p>
    <p>{{ t('home.orJump') }}</p>

    <hr>
    <p><em>{{ t('home.updated') }}</em></p>
    <p><em>{{ t('home.author') }}</em></p>
  </div>
</template>

<script>
import { computed } from 'vue'
import MoleculeGallery from '../components/MoleculeGallery.vue'
import { HOME_MOLECULES } from '../data/molecules.js'
import { useLanguage } from '../composables/useLanguage.js'

export default {
  name: 'HomeView',
  components: { MoleculeGallery },
  setup() {
    const { isZh, isEn, getLabel, t } = useLanguage()
    
    // Adapt molecule names based on current language
    const keyMolecules = computed(() => HOME_MOLECULES.map(mol => ({
      ...mol,
      name: isZh.value ? mol.name : mol.nameEn
    })))
    
    return { isZh, isEn, getLabel, t, keyMolecules }
  }
}
</script>
