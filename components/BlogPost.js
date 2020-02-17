Vue.component('BlogPost', {
    props: ['postTitle'],
    data: function() {
        return {
            username: ''
        }
    },
    template: '<h3>{{ postTitle }}</h3>'
});