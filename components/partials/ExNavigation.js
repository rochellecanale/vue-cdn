Vue.component('ExNavigation', {
    data: function() {
        return {
            navigation_list: [
                { title: 'Menu 1', link: 'https://google.com' },
                { title: 'Menu 2', link: 'https://google.com' },
                { title: 'Menu 3', link: 'https://google.com' },
                { title: 'Menu 4', link: 'https://google.com' },
                { title: 'Menu 5', link: 'https://google.com' }
            ]
        }
    },
    template: `
        <ul>
            <li v-for="(nav, index) in navigation_list">
                <a :href="nav.link">{{ nav.title }}</a>
            </li>
        </ul>
    `
});