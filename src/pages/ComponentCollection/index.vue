<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <div class="item-wrapper">
          <h4 class="hero">Alert</h4>
          <Alert/>
        </div>
      </b-col>
      <b-col>
        <div class="item-wrapper">
          <h4 class="hero">Calender</h4>
          <Calender/>
        </div>
      </b-col>
      <b-col>
        <div class="item-wrapper">
          <h4 class="hero">Spinner</h4>
          <Spinner/>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Alert from '../../components/Collections/Alert'
import Calender from '../../components/Collections/Calender'
import Spinner from '../../components/Spinner'

export default {
  components: {
    Spinner,
    Calender,
    Alert,
  },
}
</script>

<style lang="scss">
.item-wrapper {
  padding: 1rem;
  border: 1px dashed red;
  border-radius: 0.5rem;
  .hero {

  }
}
</style>
