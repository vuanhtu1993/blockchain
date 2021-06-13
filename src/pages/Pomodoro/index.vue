<template>
  <div :class="`${actualStepClass}`">
    <main class="page__main">
      <h2 class="main__step-title">{{ actualStep.title }}</h2>
      <vue-doro-timer
        :timer="actualStep.time"
        :isPlaying="isPlaying"
        @timeFinished="setNextStep"
      />
      <span class="main__rounds">
        {{ actualRound }}/{{ rounds }} rounds
      </span>
      <vue-doro-actions
        @setAdjustments="setAdjustments"
        @toggleIsPlaying="setIsPlaying"
        @skipStep="setNextStep"
      />
    </main>
  </div>
</template>

<script>
import VueDoroTimer from '@/components/Pomodoro/VueDoroTimer'
import VueDoroActions from '@/components/Pomodoro/VueDoroActions'
import timer from '@/enums/timer'

const {
  FOCUS,
  SHORT,
  LONG,
  ROUNDS,
} = timer

export default {
  name: 'VueDoro',
  components: {
    VueDoroTimer,
    VueDoroActions,
  },
  data() {
    return {
      actualRound: 1,
      rounds: ROUNDS,
      isPlaying: false,
      actualStep: null,
      steps: {
        focus: {
          time: FOCUS.TIME,
          title: FOCUS.LABEL,
        },
        shortBreak: {
          time: SHORT.TIME,
          title: SHORT.LABEL,
        },
        longBreak: {
          time: LONG.TIME,
          title: LONG.LABEL,
        },
      },
    }
  },
  created() {
    this.setActualStep(this.steps.focus)
  },
  computed: {
    actualStepClass() {
      if (!this.actualStep) return ''
      const step = {
        [FOCUS.LABEL]: 'focus',
        [SHORT.LABEL]: 'short',
        [LONG.LABEL]: 'long',
      }
      return `page--${step[this.actualStep.title]}`
    },
  },
  methods: {
    setNextStep() {
      const { title } = this.actualStep
      if (title === LONG.LABEL) {
        this.setActualRound(1)
        this.setActualStep(this.steps.focus)
      } else if (title === FOCUS.LABEL && this.actualRound === this.rounds) {
        this.setActualStep(this.steps.longBreak)
      } else if (title === FOCUS.LABEL && this.actualRound !== this.rounds) {
        this.setActualStep(this.steps.shortBreak)
      } else if (title === SHORT.LABEL && this.actualRound !== this.rounds) {
        this.setActualStep(this.steps.focus)
        this.setActualRound(this.actualRound + 1)
      }
    },
    setIsPlaying(value) {
      this.isPlaying = value
    },
    setActualStep(step) {
      this.actualStep = step
    },
    setActualRound(value) {
      this.actualRound = value
    },
    setAdjustments(steps) {
      Object.entries(steps).forEach(([key, value]) => {
        if (key === 'rounds') {
          this.rounds = +value
        } else {
          this.steps[key].time = value
        }
        this.setActualRound(1)
        this.setActualStep(this.steps.focus)
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
  pageStatusGradient(endColor)
    initial = #FFFFFF
    background linear-gradient(180deg, initial -8%, rgba(initial, 0) 100%), endColor

  .page
    display flex
    height 100vh
    padding 0 1.3rem
    justify-content center
    align-items center

  .page--focus
    @extends .page
    pageStatusGradient($cosmos)

  .page--short
    @extends .page
    pageStatusGradient($pattens-blue)

  .page--long
    @extends .page
    pageStatusGradient($tana)

  .page__main
    display flex
    flex-direction column
    align-items center
    justify-content space-around
    @media screen and (max-width $mobile)
      grid-row-gap 0.5rem
      grid-template-rows 12% 50% 15% 20%

.main__step-title
  font-size 2.1rem
  font-weight 400
  @media screen and (max-width $mobile)
    font-size 1.7rem

.main__rounds
  letter-spacing .1rem

</style>
