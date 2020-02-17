Vue.component('Greeter',  {
    props: {
        firstName: String,
        lastName: String,
        age: Number,
        isGraduated: Boolean,
        streetAddress: Object
    },
    template: `
        <div>
            <p>Hello {{ lastName }}, {{ firstName }}!!. Your age is {{ age }} and graduated {{ isGraduated }}.</p>
            <p>Your primary address is {{ streetAddress.primary }} and secondary is {{ streetAddress.secondary }}.</p>  
        </div>
    `
});