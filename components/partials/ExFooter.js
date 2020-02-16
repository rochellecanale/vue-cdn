Vue.component('ExFooter', {
    data: function() {
        return {
            footer_title: `Created at ${ new Date() }`
        }
    },
    template: '<footer><p>{{ footer_title }}</p></footer>'
})