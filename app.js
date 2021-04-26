const app = Vue.createApp({
    data() {
        return {
            url: "www.google.com",
            showBooks: true,
            books : [
                { title: 'name of the wind', author : 'Bergony Bandeira', img : 'assets/1.jpg'},
                { title: 'wind of the name', author : 'Jessica Bandeira', img : 'assets/2.jpg'},
                { title: 'The Final the wind', author : 'Jessica Bandeira', img : 'assets/3.jpg'},
        
            ]
        }
    },
    methods: {
        togleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if (data){
                console.log(data)
            }
        },
        handlemousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY

        }
    }
})

app.mount('#app')