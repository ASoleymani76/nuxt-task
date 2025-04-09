11<template>
    <div class="flex items-center justify-center gap-2 my-2 " dir="ltr">
      <div class="p-3 px-5 bg-Gray rounded ">
        <input :ref="'Input'+1" class="w-2 h-full bg-transparent focus:outline-none" maxlength="1" placeholder="-" type="text"
               @input="NextElement" @keydown.backspace="PrevElement">
      </div>
      <div class="p-3 px-5 bg-Gray rounded ">
        <input :ref="'Input'+2" class="w-2 h-full bg-transparent focus:outline-none" maxlength="1" placeholder="-" type="text"
               @input="NextElement" @keydown.backspace="PrevElement">
      </div>
      <div class="p-3 px-5 bg-Gray rounded ">
        <input :ref="'Input'+3" class="w-2 h-full bg-transparent focus:outline-none" maxlength="1" placeholder="-" type="text"
               @input="NextElement" @keydown.backspace="PrevElement">
      </div>
      <div class="p-3 px-5 bg-Gray rounded ">
        <input :ref="'Input'+4" class="w-2 h-full bg-transparent focus:outline-none" maxlength="1" placeholder="-" type="text"
               @input="NextElement" @keydown.backspace="PrevElement">
      </div>
      <div class="p-3 px-5 bg-Gray rounded ">
        <input :ref="'Input'+5" class="w-2 h-full bg-transparent focus:outline-none" maxlength="1" placeholder="-" type="text"
               @input="NextElement" @keydown.backspace="PrevElement">
      </div>
    </div>

</template>
<script>

export default {
  name: 'OtpInput',
  data() {
    return {
      OtpCount: 1,
      Result: []
    }
  },

  methods: {
    NextElement() {
      this.OtpCount++
      if (this.$refs[`Input${this.OtpCount}`]) {
        this.$refs[`Input${this.OtpCount}`].focus()
      } else {
        for (let i = 1; i < this.OtpCount; i++) {
          this.Result.push(this.$refs[`Input${i}`].value)

        }
        let NewResult = this.Result.join('')
        this.$emit('GetNumber', NewResult)

      }


    },
    PrevElement() {
      this.OtpCount--
      if (this.$refs[`Input${this.OtpCount}`]) {
        this.Result = []
        this.$refs[`Input${this.OtpCount}`].focus()
      }


    }
  }

};
</script>

<style scoped>
.single-input {
  width: 1rem;
  border-bottom: 1px solid black;
  margin: 0 0.3rem;
  background-color: transparent;
}

.edit-number-input {
  border: 1px solid rgb(0, 174, 255);
}

.otp-input::-webkit-input-placeholder {
  text-align: right;
}

.otp-input:-moz-placeholder {
  text-align: right;
}

.submit-button:disabled {
  cursor: initial;
}

.submit-button {
  transition: all 0.1s;
  width: 40%;
}

.single-input,
.single-input::-webkit-outer-spin-button,
.single-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: textfield;
}
</style>
