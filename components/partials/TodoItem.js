Vue.component('TodoItem', {
    props: ['taskItem'],
    template: '#task-item-template'
});

Vue.component('TaskItemApp', {
    template: '#task-item-app',
    data: function() {
        return {
            plans: ['Eat', 'Work', 'Sleep'] 
        }
    }
})