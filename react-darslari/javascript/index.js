///////////////////--ES6 dan oldingi class--///////////////////

// function Polygon(hight, width){
//     this.name = 'Polygon'
//     this.hight = hight
//     this.width =width
// }

// // method -(prototype)

// Polygon.prototype.sayName = function(){
//     console.log('hi my name is', this.name);
// }

// Polygon.prototype.calcArea = function(){
//     console.log('turtburchakning yuzasi quyidagiga teng ',this.width*this.hight);
// }

// Polygon.prototype.calcPerimeter = function(){
//     console.log(`To'rtburchakning perimetri ${2 *(this.width + this.hight)}`);
// }

// // shu tepadagi classni "instance"(holat) hosil qilish

// let polygon = new Polygon(300, 300)

// let polygon1 = new Polygon(200, 800)


// polygon.calcPerimeter()

//// ----------------------praktika classes-------------------//

// function Info(yosh){
//     this.ism = "Aloshukur"
//     this.yosh = yosh
//     this.tyil = (2022 - yosh)
// }

// Info.prototype.sayName = function(){
//     console.log(this.ism);
// }

// Info.prototype.birthYear = function(){
//     console.log(this.tyil);
// }

// let info = new Info(23)

// info.sayName()
// info.birthYear()

// class Info{
//     constructor(yil){
//         this.name = "Bahodir"
//         this.yil = yil
//         this.birthPlace = 'Samarkand'
//         this.kasb = "student"
//     }

//     infoBahodir(){
//         console.log(`My name is ${this.name}, I was born in 
//         ${this.yil}, in ${this.birthPlace} and now I am a ${this.kasb} 
//         at NUUz`)
//     }

//     sayName(){
//         console.log(this.name);
//     }
// }

// let info = new Info(2000)

// info.infoBahodir()
// info.sayName()


////----------------------practice classes--------------//

// class Parallelepiped {
//     constructor(a,b,c){
//         this.a = a
//         this.b = b
//         this.c = c
//     }

//     calcValue(){
//         console.log('The value of this body is ', this.a * this.b * this.c);
//     }

//     calcArea(){
//         console.log('The full area of this body is ', 2*(this.a * this.b + this.a *this.c + this.b * this.c));
//     }

//     caclPer(){
//         console.log("The perimeter of this body is ", 4*(this.a + this.b + this.c));
//     }
// }

// let paral1 = new Parallelepiped(13, 12, 11)

// paral1.calcValue()
// paral1.caclPer()
// paral1.calcArea()


////-----------------practice inheritance-------------//

// class Kub extends Parallelepiped{
//     constructor(l){
//         super(l, l, l);
//         this.name = 'Kub';
//     }

//     calcArea(){
//         console.log('The full area of this body is ', 2*(this.a * this.b + this.a *this.c + this.b * this.c));
//     }
// }

// let kub1 = new Kub(6)

// kub1.calcArea()



// //---------------------practice class as a component ----------------//
// //  1 - declaration
// function Component (value){
//     this.value = value
// }

// Component.prototype.render = function(){
//     return `Hello ${this.value}`
// }

// // 2 - initiallization

// let comp = new Component("Aloshukur")

// console.log(comp.render());



// //--------------class as a component (ES6)----------------//

// class Component {
//     constructor(value){
//         this.value = value;
//     }

//     render(){
//         return `Hello ${this.value}`;
//     }
// }

// let comp = new Component('Aloshukur')

// console.log(comp.render());


// //-----------------arrow functions---------------//

// function sum(a,b){
//    return a+b;
// }
// console.log(sum(2,5));

// let mul = function(a,b){
//     return a * b;
// }
// console.log(mul(2,258));

// let div = (a,b)=>{
//     return a / b;
// }
// console.log(div(1563,19));

// let sub = (a,b) => a-b;
// console.log(sub(58, 89));


// //-----------Destructuring(buzilish)-------------//

// // objects
// let user = {
//     id: 1234,
//     fname: 'Steve',
//     lname: 'Smith'
// }

// // destructuring
// const {f_name = 'no name'} = user;
// console.log(f_name);

// // arrays

// let coord = [43.86555444, -79.5786565]
// let lat = coord[0]
// let lng = coord[1]
// console.log(lat, lng);

//  // destructuring

// let [lt, lg,] = coord;
// console.log(lt, lg);


// let user = {
//     id: 1234,
//     fname: 'Steve',
//     lname: 'Smith'
// }

// // function display(user){
// //     // const id = user.id
// //     // const fname = user.fname
// //     // const lname = user.lname

// //     const {id, fname, lname} = user;
// //     return (`${id} ${fname} ${lname}`);   
// // }

// function display({id, fname, lname}){
//     return (`${id} ${fname} ${lname}`);
// }

// console.log(display(user));


// //--------------immutable(o'zgarmas) data and cloning----------------//

// // objects
// let avto = {
//     model: 'malibu',
//     rang: 'qora',
//     karobka: 'avtomat'
// }

// avto.karobka = 'mexanik'
// let copy = {...avto}
// console.log(copy);

// // arrays

// let list = [12, 23, 23, 23424]
// let copy = [87, 5438909,...list]
// console.log(copy)
