let studentListComponent = {
    props: {
        studentList: Array
    },
    template: '#student-list-template'
}

let studentContactComponent = {
    template: '#student-contact-template',
    components: {
        studentList: studentListComponent
    },
    data: function() {
        return {
            studentList: [
                { student_id: '20070141343', student_name: 'Canale, Rochelle Y.', student_course: 'BSIT' },
                { student_id: '20074756541', student_name: 'Baclili, Mary Jewell', student_course: 'BSED' },
                { student_id: '20015896541', student_name: 'Cantoria, Rolly', student_course: 'BSEC' },
            ]
        }
    }
}