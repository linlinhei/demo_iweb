<template>
  <b-breadcrumb :items="items" class="bg-transparent"></b-breadcrumb>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      bread: "校区",
      items: [
        {
          text: "首页",
          to: { name: "home" }
        },
        {
          text: this.bread,
          active: true
        }
      ]
    };
  },
  mounted() {
    console.log(this.$route);

    if (this.$route.path == "/address") {
      this.bread = "校区";
      console.log(this.bread);
    }
  }
};
</script>

<style>
.breadcrumb-item + .breadcrumb-item::before {
  content: ">" !important;
}
</style>