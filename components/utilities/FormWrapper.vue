<template>
  <div v-validation>
    <slot name="content" :errors="errors"></slot>
  </div>
</template>

<script setup lang="ts">
import { validationRegex } from "@/models/vValidation";
defineExpose({
  validateForm,
});

// inputs that face a regex error will be shown here with the identifier of vname
let errors = ref([]);
// inputs that must go through validation will go here
let filteredElements = ref<any>([]);
// inputs that must go through validation will go here
let inValidInputs = ref<any>([]);
// this will register the library
let vValidation = {
  mounted: (el: HTMLElement) => {
    // find inputs
    let result: any = [];
    result = el.querySelectorAll("input");
    result.forEach((el: HTMLElement) => {
      if (!el.attributes.getNamedItem("exclude")) {
        filteredElements.value.push(el);
      }
    });
  },
};
const emits = defineEmits(["validated"]);
function validateForm(): Boolean {
  filteredElements.value.forEach((item: HTMLInputElement) => {
    let idx = inValidInputs.value.findIndex(
      (e: HTMLInputElement) => e === item
    );
    if (!isValidInput(item)) {
      if (idx === -1) inValidInputs.value.push(item);
    } else {
      if (idx > -1) {
        inValidInputs.value.splice(idx, 1);
        errors.value.splice(idx, 1);
      }
    }
  });
  if (inValidInputs.value.length > 0) {
    inValidInputs.value[0].scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
    throwErrorMessages();
    return false;
  } else {
    emits("validated");
    return true;
  }
}

function isValidInput(node: HTMLInputElement): boolean {
  let isValid = true;
  if (
    validationRegex[node.attributes["type"].nodeValue] &&
    !validationRegex[node.attributes["type"].nodeValue].exec(node.value)
  ) {
    isValid = false;
  }
  return isValid;
}

function throwErrorMessages(): void {
  inValidInputs.value.forEach((item: HTMLInputElement) => {
    let idx = errors.value.findIndex(
      (e) => e === item.attributes["vname"].nodeValue
    );
    if (idx === -1) {
      errors.value.push(item.attributes["vname"].nodeValue);
    }
  });
}
</script>

<style scoped></style>
