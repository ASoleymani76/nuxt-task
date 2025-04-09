<script lang="ts" setup> import DatePicker from "vue3-persian-datetime-picker";

interface IProps {
  label?: string;
  disabled?: boolean;
  isSimple?: boolean;
  defaultDate?: Date | string | null;
  inputId: string;
  min?: string;
  max?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  label: "تاریخ را انتخاب کنید",
  disabled: false,
  inputId: "datePicker",
  min: "",
  max: "",
  defaultDate: null,
  isSimple:false
});
const selectedDate = defineModel<Date | null>();
// const timeUtils = useTimeUtils();
const computedSelectedDate = computed({
  get() {
    if (selectedDate.value) return new Date(selectedDate.value).toLocaleDateString();
    return null;
  }, set(value) {
    if (value) {
      selectedDate.value = new Date(value);
    }
  },
});
</script>
<template>
  <div>
    <ClientOnly>
      <teleport to="body">
        <DatePicker v-model="computedSelectedDate" :custom-input="`#${props.inputId}`" :max="props.max" :min="props.min"
                    class="custom-date-picker" clearable color="#E40E20" display-format="jYYYY/jMM/jDD" format="YYYY-MM-DD"
                    input-format="YYYY-MM-DD" :simple="props.isSimple"/>
      </teleport>
    </ClientOnly>
    <slot name="input"></slot>
  </div>
</template>