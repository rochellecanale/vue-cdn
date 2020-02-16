Vue.component('ExHeader', {
    data: function() {
        return {
            title: 'My Page Title'
        }
    },
    template: '<header>{{ title }}</header>'
});