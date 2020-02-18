/** Global Components Declarations */
Vue.component('Greeter', {
    props: {
        lastName: String,
        firstName: String,
        dateOfBirth: String,
        age: Number,
        degree: Object
    },
    template: `
    <div id="greeter-component">
        <h4>Hello {{ lastName }}, {{ firstName }}!!</h4>
        <p>Your birthday is {{ dateOfBirth }}</p>
        <p>Your age is {{ age }}</p>
        <p>Your are studied & graduated in {{ degree.university }}</p>
        <p>Date graduated {{ degree.date_graduated }}</p>
    </div>
     `
});



