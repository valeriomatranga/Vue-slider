const app = new Vue({

    el:'#app',

    data:{
        counter: 0,
        images:[
            "./assets/img/983332.jpg",
            "./assets/img/1185171.png",
            "./assets/img/asta-demon.jpg",
            "./assets/img/asta.jpg",
            "./assets/img/black-clover.png",
            "./assets/img/demon.png",
            "./assets/img/sword.jpg"
        ]
    },

    methods:{
        prev(){
            if(this.counter === 0){
                return this.counter = this.images.lenght -1
            }
            return this.counter -= 1
        },
        next(){
            if(this.counter === this.images.lenght -1){
                return this.counter = 0
            }
            return this.counter += 1
        }

    }   
})