Vue.component('BlogMedia', {
    props: {
        blogImage: String,
        blogDescription: String
    },
    template: '<img :src="blogImage" :alt="blogDescription" />'
});