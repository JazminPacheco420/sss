<template>
  <div class="register">
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  components: {
    RegisterForm,
  },
};
</script>

<style scoped>
.register {
  padding: 2rem;
  text-align: center;
}
</style>
