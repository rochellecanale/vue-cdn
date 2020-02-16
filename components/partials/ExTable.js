Vue.component('ExTable', {
    data: function() {
        return {
            inventory_list: [
                { id: 1, product_name: 'apple', price: 2.00 },
                { id: 2, product_name: 'banana', price: 8.00 },
                { id: 3, product_name: 'orange', price: 4.00 },
                { id: 4, product_name: 'pineapple', price: 25.00 },
                { id: 5, product_name: 'strawberry', price: 10.00 },
            ]
        }
    },
    template: `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody v-for="(product, index) in inventory_list">
                <tr>
                    <td>{{ product.id }}</td>
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.price }}</td>
                </tr>
            </tbody>
        </table>
    `
});