Vue.component('ExMain', {
    data: function() {
        return {
            sample_content_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel varius diam. In eget nisl velit. Suspendisse ultricies lobortis tellus sed facilisis. Ut a mattis mauris. Nunc imperdiet arcu eget dolor accumsan vulputate. Quisque pretium ante nisi, nec lacinia neque porta nec. Suspendisse vel volutpat lacus, sed fringilla risus. Suspendisse ac venenatis lectus, non porttitor erat. Vivamus dignissim vehicula egestas. Nullam eget auctor nibh, vel sodales lorem. Vivamus in condimentum leo. In imperdiet mattis nisi vitae pretium. Donec sodales felis sit amet sollicitudin vestibulum.',
            sample_content_2: 'Aliquam eros enim, dictum non auctor tincidunt, cursus eu eros. Praesent sed egestas lorem, a vulputate risus. Maecenas vitae tincidunt urna. Quisque quis tristique odio. Quisque pellentesque a orci non tempus. Praesent feugiat tortor tellus, et cursus risus maximus aliquet. Morbi venenatis ultrices euismod. Maecenas urna risus, semper vitae tortor non, tempus sodales felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In posuere sem tincidunt nisl iaculis dignissim. Sed pretium luctus lacinia. Vivamus lacinia vitae dui ut pretium. Vivamus rhoncus auctor mauris vel porttitor. Phasellus ligula metus, tristique non justo eu, ullamcorper facilisis nunc.'
        }
    },
    template: `
        <div id="sample-content-container">
            <p>{{ sample_content_1 }}</p>
            <p>{{ sample_content_2 }}</p>
        </div>
    `
})