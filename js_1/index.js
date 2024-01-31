console.log("Toh chaliye shuru karte hai!!!")

// let rectangle = {
//     length:1,
//     bredth:2
// }


//factory function
function createRectangle(len,bre){
    return rectangle = {
        length : len,
        breadth : bre,
        draw(){
            console.log("drawing");
            console.log("how to make sure that what ever we are doing is correct in our opinion!!!")
        }
    };
}

let rectangleObj1 = createRectangle(5,6);

//constructor function
function Rectangle(len,bre){
     this.length = len;
     this.breadth = bre;
     this.draw = function(){
        console.log("drawing rectangle!");
        
     }
}
 
let rectangleObject = new Rectangle(4,6);