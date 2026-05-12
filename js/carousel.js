

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(image,title,url){
        this.image = image;
        this.title = title;
        this.url = url;
    }
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;

                
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
       let item = carouselArr[Carousel._sequence]; 

       //troca imagem 
        document.getElementById("carousel").style.backgroundImage =
            `url('img/${item.image}')`;

        //troca texto
        document.getElementById("carousel-title").innerHTML =
            `<a href="${item.url}">${item.title}</a>`;
            //incrementa
        Carousel._sequence++;
        
        if(Carousel._sequence >= Carousel._size){

            Carousel._sequence = 0;
        }
    }
};
