<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">
            <div class="mb-4">
                <label for="keywords" class="text-80 leading-tight block mb-2">Contact Link</label>
                <input
                    type="text"
                    id="keywords"
                    class="w-full form-control form-input form-input-bordered"
                    :class="errorClasses"
                    placeholder="Keywords"
                    v-model="field.value.contact_link"
                >
            </div>

            <div class="mb-4">
                <label for="not_sold_individually">
                    <input
                        type="checkbox"
                        id="not_sold_individually"
                        :class="errorClasses"
                        placeholder="Not Sold Individually"
                        v-model="field.value.not_sold_individually"
                    >
                    Show Manufacturer Name
                </label>
            </div>

            <div class="mb-4">
                <label for="header_color" class="text-80 leading-tight block mb-2">Header Text Color</label>

                <select
                    id="header_color"
                    class="w-full form-control form-input form-input-bordered"
                    :class="errorClasses"
                    v-model="field.value.header_color"
                >
                    <option value="black">black</option>
                    <option value="grey-darkest">grey-darkest</option>
                    <option value="grey-darker">grey-darker</option>
                    <option value="grey-dark">grey-dark</option>
                    <option value="grey">grey</option>
                    <option value="grey-light">grey-light</option>
                    <option value="grey-lighter">grey-lighter</option>
                    <option value="grey-lightest">grey-lightest</option>
                    <option value="white">white</option>
                    <option value="cherry">cherry</option>
                    <option value="yellow-darkest">yellow-darkest</option>
                    <option value="yellow-darker">yellow-darker</option>
                    <option value="yellow-dark">yellow-dark</option>
                    <option value="yellow">yellow</option>
                    <option value="yellow-light">yellow-light</option>
                    <option value="yellow-lighter">yellow-lighter</option>
                    <option value="yellow-lightest">yellow-lightest</option>
                    <option value="red-darkest">red-darkest</option>
                    <option value="red-darker">red-darker</option>
                    <option value="red-dark">red-dark</option>
                    <option value="red">red</option>
                    <option value="red-light">red-light</option>
                    <option value="red-lighter">red-lighter</option>
                    <option value="red-lightest">red-lightest</option>
                    <option value="orange-darkest">orange-darkest</option>
                    <option value="orange-darker">orange-darker</option>
                    <option value="orange-dark">orange-dark</option>
                    <option value="orange">orange</option>
                    <option value="orange-light">orange-light</option>
                    <option value="orange-lighter">orange-lighter</option>
                    <option value="orange-lightest">orange-lightest</option>
                    <option value="green-darkest">green-darkest</option>
                    <option value="green-darker">green-darker</option>
                    <option value="green-dark">green-dark</option>
                    <option value="green">green</option>
                    <option value="green-light">green-light</option>
                    <option value="green-lighter">green-lighter</option>
                    <option value="green-lightest">green-lightest</option>
                    <option value="teal-darkest">teal-darkest</option>
                    <option value="teal-darker">teal-darker</option>
                    <option value="teal-dark">teal-dark</option>
                    <option value="teal">teal</option>
                    <option value="teal-light">teal-light</option>
                    <option value="teal-lighter">teal-lighter</option>
                    <option value="teal-lightest">teal-lightest</option>
                    <option value="blue-darkest">blue-darkest</option>
                    <option value="blue-darker">blue-darker</option>
                    <option value="blue-dark">blue-dark</option>
                    <option value="blue">blue</option>
                    <option value="blue-light">blue-light</option>
                    <option value="blue-lighter">blue-lighter</option>
                    <option value="blue-lightest">blue-lightest</option>
                    <option value="indigo-darkest">indigo-darkest</option>
                    <option value="indigo-darker">indigo-darker</option>
                    <option value="indigo-dark">indigo-dark</option>
                    <option value="indigo">indigo</option>
                    <option value="indigo-light">indigo-light</option>
                    <option value="indigo-lighter">indigo-lighter</option>
                    <option value="indigo-lightest">indigo-lightest</option>
                    <option value="purple-darkest">purple-darkest</option>
                    <option value="purple-darker">purple-darker</option>
                    <option value="purple-dark">purple-dark</option>
                    <option value="purple">purple</option>
                    <option value="purple-light">purple-light</option>
                    <option value="purple-lighter">purple-lighter</option>
                    <option value="purple-lightest">purple-lightest</option>
                </select>
            </div>

            <div class="mb-4">
                <label
                    for="footer_text_color"
                    class="text-80 leading-tight block mb-2"
                >Footer Text Color</label>
                <select
                    id="footer_text_color"
                    class="w-full form-control form-input form-input-bordered"
                    :class="errorClasses"
                    v-model="field.value.footer_text_color"
                >
                    <option value="black">black</option>
                    <option value="grey-darkest">grey-darkest</option>
                    <option value="grey-darker">grey-darker</option>
                    <option value="grey-dark">grey-dark</option>
                    <option value="grey">grey</option>
                    <option value="grey-light">grey-light</option>
                    <option value="grey-lighter">grey-lighter</option>
                    <option value="grey-lightest">grey-lightest</option>
                    <option value="white">white</option>
                    <option value="cherry">cherry</option>
                    <option value="yellow-darkest">yellow-darkest</option>
                    <option value="yellow-darker">yellow-darker</option>
                    <option value="yellow-dark">yellow-dark</option>
                    <option value="yellow">yellow</option>
                    <option value="yellow-light">yellow-light</option>
                    <option value="yellow-lighter">yellow-lighter</option>
                    <option value="yellow-lightest">yellow-lightest</option>
                    <option value="red-darkest">red-darkest</option>
                    <option value="red-darker">red-darker</option>
                    <option value="red-dark">red-dark</option>
                    <option value="red">red</option>
                    <option value="red-light">red-light</option>
                    <option value="red-lighter">red-lighter</option>
                    <option value="red-lightest">red-lightest</option>
                    <option value="orange-darkest">orange-darkest</option>
                    <option value="orange-darker">orange-darker</option>
                    <option value="orange-dark">orange-dark</option>
                    <option value="orange">orange</option>
                    <option value="orange-light">orange-light</option>
                    <option value="orange-lighter">orange-lighter</option>
                    <option value="orange-lightest">orange-lightest</option>
                    <option value="green-darkest">green-darkest</option>
                    <option value="green-darker">green-darker</option>
                    <option value="green-dark">green-dark</option>
                    <option value="green">green</option>
                    <option value="green-light">green-light</option>
                    <option value="green-lighter">green-lighter</option>
                    <option value="green-lightest">green-lightest</option>
                    <option value="teal-darkest">teal-darkest</option>
                    <option value="teal-darker">teal-darker</option>
                    <option value="teal-dark">teal-dark</option>
                    <option value="teal">teal</option>
                    <option value="teal-light">teal-light</option>
                    <option value="teal-lighter">teal-lighter</option>
                    <option value="teal-lightest">teal-lightest</option>
                    <option value="blue-darkest">blue-darkest</option>
                    <option value="blue-darker">blue-darker</option>
                    <option value="blue-dark">blue-dark</option>
                    <option value="blue">blue</option>
                    <option value="blue-light">blue-light</option>
                    <option value="blue-lighter">blue-lighter</option>
                    <option value="blue-lightest">blue-lightest</option>
                    <option value="indigo-darkest">indigo-darkest</option>
                    <option value="indigo-darker">indigo-darker</option>
                    <option value="indigo-dark">indigo-dark</option>
                    <option value="indigo">indigo</option>
                    <option value="indigo-light">indigo-light</option>
                    <option value="indigo-lighter">indigo-lighter</option>
                    <option value="indigo-lightest">indigo-lightest</option>
                    <option value="purple-darkest">purple-darkest</option>
                    <option value="purple-darker">purple-darker</option>
                    <option value="purple-dark">purple-dark</option>
                    <option value="purple">purple</option>
                    <option value="purple-light">purple-light</option>
                    <option value="purple-lighter">purple-lighter</option>
                    <option value="purple-lightest">purple-lightest</option>
                </select>
            </div>
        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from "laravel-nova";

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ["resourceName", "resourceId", "field"],

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            if (_.isEmpty(this.field.value)) {
                this.value = JSON.stringify({});
                this.field.value = {};
            } else {
                this.value = JSON.stringify(this.field.value);
            }
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || "");
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value;
        }
    },

    watch: {
        field: {
            handler() {
                this.value = JSON.stringify(this.field.value);
            },
            deep: true
        }
    }
};
</script>
