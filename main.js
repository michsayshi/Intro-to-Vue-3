const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            // remove first occurance of id
            this.cart.splice(this.cart.indexOf(id), 1)
        }
    }
})
