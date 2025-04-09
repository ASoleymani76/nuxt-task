<template>
  <div class="flex items-center gap-2 my-3">
    <input id="captcha" v-model="captcha" name="phoneNumber"
           type="text" dir="rtl"
           class="w-full bg-white p-2 border border-grey-300 rounded-lg text-gray-600 placeholder-gray-500 dark:border-white/10 dark:bg-white/10 focus:border-grey-300 dark:text-white"
           placeholder="کد مقابل را وارد کنید"/>
    <img :src="image" alt="کد ریکپچا" class="cursor-pointer w-40 h-20" title="کد ریکپچا" @click="generateRecaptcha">

  </div>
</template>

<script lang="ts" setup>
const secretKey = ref<string>('')
const image = ref<string>('')
const captcha = ref<string>('')
const emits = defineEmits<{
  (e: 'validated', bool: boolean): void
}>()

async function generateRecaptcha() {
  try {
    const {data} = await useAsyncData(
        async () => (useApi.generateRecaptcha.setParams({
          language: 'Persian'
        })), {server: false})
    secretKey.value = data.value.data.secretKey
    image.value = data.value.data.image
  } catch (e) {
    console.log(e)
  } finally {
  }
}

defineExpose({
  validateRecaptcha,
  generateRecaptcha
})

async function validateRecaptcha() {
  try {
    useOverlay.show()
    const {data} = await useAsyncData(
        async () => (await useApi.verifyRecaptcha.setParams({
          input: captcha.value,
          key: secretKey.value
        })), {server: false})

    if (data.value.isSuccess) {
      captcha.value = ''
      validated()
    } else {
      captcha.value = ''
      useToast().toastError(data.value.errorMessage)
    }
    await generateRecaptcha()
  } catch (e) {
    console.log(e)
  } finally {
    useOverlay.close()
  }
}

function validated() {
  emits('validated', true)
}
</script>

<style scoped>

</style>
