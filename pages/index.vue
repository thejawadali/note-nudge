<script setup lang="ts">
const { validate } = useForm()

const password = ref( "" )
const confirmPassword = ref( "" )
const email = ref( "" )

async function signup () {
  const { valid } = await validate()
  console.log( valid )
}

</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <form @submit.prevent="signup" class="w-full max-w-md p-4 bg-white rounded shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Sign Up</h2>
      <div class="mb-4">
        <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Email</label>
        <BaseInput placeholder="Enter Email" name="email" v-model="email" rules="required|email" />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password</label>
        <BaseInput placeholder="Enter Email" v-model="password" type="password" name="password" rules="required"/>
      </div>
      <div class="mb-4">
        <label for="confirmPassword" class="block text-gray-600 text-sm font-medium mb-2">Confirm Password</label>
        <BaseInput v-model="confirmPassword" type="password" id="confirmPassword" name="confirmPassword" rules="required"/>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded">Sign Up</button>
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">or</p>
        <button class="mt-2 bg-red-500 text-white py-2 rounded"><Icon name="f7:logo-google"></Icon>Sign In with Google</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>