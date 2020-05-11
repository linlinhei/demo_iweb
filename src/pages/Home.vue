<template>
  <b-container fluid class="px-0">
    <Carousel></Carousel>
    <b-container>
      <home-course></home-course>
    </b-container>
  </b-container>
</template>
<script>
import Carousel from "../components/Carousel";
import HomeCourse from "../components/HomeCourse";

export default {
  name: "Home",
  components: {
    Carousel,
    HomeCourse
  }
};
</script>
<style></style>
