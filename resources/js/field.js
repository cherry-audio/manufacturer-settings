Nova.booting((Vue, router, store) => {
    Vue.component('index-manufacturer-settings', require('./components/IndexField'))
    Vue.component('detail-manufacturer-settings', require('./components/DetailField'))
    Vue.component('form-manufacturer-settings', require('./components/FormField'))
})
