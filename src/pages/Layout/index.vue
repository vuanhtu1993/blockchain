<template>
  <div class="container">
    <ul class="navigation">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.navigation {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;

  list-style: none;
  margin: 0;
  background: deepskyblue;
}

.navigation a {
  text-decoration: none;
  display: block;
  padding: 1em;
  color: white;
}

.navigation a:hover {
  background: #1565C0;
}

@include table {
  .navigation {
    justify-content: space-around;
  }
}

@include mobile {
  .navigation {
    flex-flow: column wrap;
    padding: 0;
  }
  .navigation a {
    text-align: center;
    padding: 10px;
    border-top: 1px solid rgba(255, 255, 255,0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .navigation li:last-of-type a {
    border-bottom: none;
  }
}
</style>
