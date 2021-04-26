<template>
    <div class="form__group">
        <label class="block text-sm font-medium text-gray-700">{{textLabel}}</label>
        <input class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"  :type="inputType" :v-model="inputModel" :name="inputModel"/>
    </div>
</template>

<script>
    export default {
        name: "FormGroup",
        props: {
            textLabel: String,
            // inputType: !String,
            inputType: {
                type: String,
                required: true
            },
            inputModel: String,
        }
    }
</script>

<style scoped>
   .form__group {
       margin: 40px 0px;
   }
</style>