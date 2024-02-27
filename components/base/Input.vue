<script setup lang="ts">
const emit = defineEmits( ['update:modelValue'] )
const props = defineProps( {
  modelValue: {
    type: String,
    default: null
  },
  name: {
    type: String,
    default: null
  },
  rules: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: "Enter Name"
  }
} )

const { value, errorMessage, validate } = useField( props.name, props.rules )


const inputModelValue = computed( {
  get () {
    return props.modelValue
  },
  set ( val ) {
    value.value = val
    emit( 'update:modelValue', value.value )
  }
} )

</script>
    
<template>
  <div>
    <el-input v-bind="$attrs" v-model="inputModelValue" @blur="() => validate()">
    <template v-for="(slot, i) in Object.keys($slots)" :key="i" #[slot]="slotProps">
      <slot :key="i" :name="slot" v-bind="slotProps" />
    </template>
  </el-input>
  <span v-if="errorMessage" class="text-red-600 text-xs">{{ errorMessage }}</span>
  </div>
</template>

