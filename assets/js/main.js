const app = new Vue({

    el:'#app',

    data:{
        counter: 0,
        circle: "red",
        images:[
            "./assets/img/983332.jpg",
            "./assets/img/1185171.png",
            "./assets/img/asta-demon.jpg",
            "./assets/img/asta.jpg",
            "./assets/img/black-clover.png",
            "./assets/img/demon.png",
            "./assets/img/sword.jpg"
        ],

    },

    methods:{
        prev(){
            if(this.counter === 0){
                return this.counter = this.images.length -1
        
            }
            return this.counter -= 1
        },
        next(){
            if(this.counter === this.images.length -1){
                return this.counter = 0
            }
            return this.counter += 1
        },


    },
    
    mounted(){
        document.addEventListener('keyup', (event) => {
            console.log(event.key);
            if(event.key === 'ArrowRight'){
                this.next()
            }else if(event.key === 'ArrowLeft'){
                this.prev()
            }

        })

        setInterval(this.next, 4000)
    }
    
    
})


