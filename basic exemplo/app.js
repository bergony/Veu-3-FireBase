const app = Vue.createApp({
    data() {
        return {
            url: "www.google.com",
            showBooks: true,
            books : [
                { title: 'name of the wind', author : 'Bergony Bandeira', img : 'assets/1.jpg', isFav: true},
                { title: 'wind of the name', author : 'Jessica Bandeira', img : 'assets/2.jpeg', isFav: false},
                { title: 'The Final the wind', author : 'Jessica Bandeira', img : 'assets/3.jpg', isFav: true},
        
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

        },
        togleSetFav(book){
            console.log(this.isFav)
            book.isFav = !book.isFav

        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')