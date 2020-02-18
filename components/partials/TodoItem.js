Vue.component('TodoItem', {
    props: {
        task_name: String,
        task_description: String,
        task_status: Boolean
    },
    data: function() {
        return {
            todoItemList: [
                {
                    task_name: 'Eat',
                    task_description: 'Eat breakfast',
                    task_status: true
                },
                {
                    task_name: 'Work',
                    task_description: 'Go to office',
                    task_status: false
                },
                {
                    task_name: 'Sleep',
                    task_description: 'Sleep well',
                    task_status: false
                },
            ]
        }
    },
    template: '#todo-item-list'
})