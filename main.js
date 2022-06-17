
// let userone= {
//     name: "Sara",
//     last: "likaount",
//     age: 3
// }
 
// let usertwo= {
//     name: "shlomo",
//     last: "haylo",
//     age: 29
// }
// let myarray= [];
// myarray.push(userone);
// myarray.push(usertwo);
// console.log(myarray);

// function printobjects(myarray){

// myarray.forEach(userob => {
//     if(userob.age>18){
//         document.getElementById("mydiv").innerHTML+= " "+userob.name
//     }
//     else{
//         document.getElementById("mydiv").innerHTML+=" "+userob.last
//     }
// });
// }


// 1:
// printobjects(myarray);

// let mycolec= document.getElementsByClassName("myclass");
// for (let col of mycolec){
//     console.log(col);
// }

// 2:
// function changcolor(){
// let myclasscol= document.getElementsByClassName("myclass1");
// for (let clasitem of myclasscol){
//     clasitem.style.color= "blue";
    
// }
// }
// function changcolor2(){
//     let myclasscol= document.getElementsByClassName("myclass1");
//     for (let clasitem of myclasscol){
//         clasitem.innerText= "hello";
        
//     }
// }
//  3:
// const newobj= {
//     name:"s",
//     last:"l",
//     age:"30",
//     email: "skdk@gmail.com"
// };
// for(let key in newobj){
//     console.log(key+" "+newobj[key]);
// };

// 4:

// const newobj= {
//     name:"s",
//     last:"l",
//     age:"30",
//     email: "skdk@gmail.com"
// };
// for(let key in newobj){
//     document.getElementById("mydiv").innerHTML+= `<h3>${key} : ${newobj[key]}</h3>`
// };


// 5:
// const myobject= {
//     name:"",
//     last:"",
//     age:""
// };


// function enterkey(){
//    let myDiv= document.getElementById("mydiv"); 
     
//     for(let mykey in myobject){
//     myobject[mykey]= document.getElementById("myinput").value;     
//     myobject[mykey]= document.getElementById("myinput2").value;  
//     myobject[mykey]= document.getElementById("myinput3").value; 
//     myDiv.innerHTML+= `<h1>${mykey} : ${myobject[mykey]}</h1>`;  
// } 
// }

// 6:
// let myobjarray= [{
//     name:"s",
//     last:"l",
//     age:"30",
//     email: "skdk@gmail.com"
// }, newobj= {
//     name:"a",
//     last:"v",
//     age:"40",
//     email: "skdk@gmail.com"
// }, newobj= {
//     name:"syu",
//     last:"k",
//     age:"20",
//     email: "skdk@gmail.com"
// }, newobj= {
//     name:"sfd",
//     last:"ffl",
//     age:"20",
//     email: "skdk@gmail.com"
// }];

// myobjarray.forEach(element => {
//     for (let key in element) {
//         document.getElementById("mydiv").innerHTML+=` ${key}:${element[key]}`;
//     }
//     document.getElementById("mydiv").innerHTML+=`<br>`
// }
// );


