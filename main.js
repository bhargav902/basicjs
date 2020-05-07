/*console.log('hai');
console.error('this is an error');
console.warn('this an warning');*/
//var, let, const
/*let age=20;
age=90;
console.log(age);*/
/*const age=20;
age=90;
console.log(age);*/
//const score=60;
//score=60;
//console.log(score);
//string, numbers, boolean, null, undefined

/*const name='bhargav';
const age=80;
const isCool=true;
const rating=9.8;
const x=null;
const y=undefined;
let z;

console.log(typeof null);*/
/*const name='bhargav';
const age=80;
console.log('my name is '+ name + ' and iam ' + age);

const helo='My name is ${name} and iam ${age}';

console.log(helo);*/
//const s='technology, computer, it';
//console.log(s.substring(0,5).toUpperCase());
//console.log(s.split(', '));

//Arrays

//const numbers = new Array(1,2,3,43,4,5,6);
//console.log(numbers);

/*const fruts=['apple', 'orenges', 'pears'];
fruts[3]='mangos';

fruts.push('grapes');
fruts.unshift('ragu');
fruts.pop();
console.log(Array.isArray('hello'));
console.log(fruts);*/

/*const person={
    firstname:'bhargav',
    lastname:'busem',
    age:25,
    hobbies:['music', 'movies', 'sports'],
    address:{
        street:'50 main st',
        City:'vizag',
        state:'ap'
    }
}
console.log(person.firstname, person.lastname);
console.log(person.address.City);

const {firstname, lastname, age, address:{city}}=person;
console.log(age);
person.email ='bhargav902@gmail.com';
console.log(person);*/
/*const todos=[
    {
        id:1,
        text:'bhargav is a king',
        isComplete: true
    },
    {
        id:8,
        text:'jyothish is a king',
        isComplete: true
    },
    {
        id:9,
        text:'bhargav is a king',
        isComplete: true
    }
];*/

/*const todoJSON= JSON.stringify(todos);

console.log(todoJSON);*/
/*for(let i=0; i<10; i++){
    console.log(i);
}

//while
let i=0;
while(i<20{
console.log(i);
i++;
})*/
/*for(let i=0; i<todos.length; i++){
    console.log(todos[i].text)
}
//foe 
for(let todo of todos){
    console.log(todo.text);
}*/
/*const todoText=todos.filter(function(todo){
   return todo.isComplete === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoText);*/
/*const x=10;
const coloe=x>10?'red': 'vlue';
console.log(coloe);*/
/*const addNum=(num1=4, num2=5)=>{
    return(num1+num2);
}
console.log(addNum(9,8));*/
/*function Person(firstname, lastname, dob){
    this.firstname=firstname;
    this.lastname=lastname;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
}
const person1=new Person('bhargav','busem','4-2-1998');

 console.log(person1) ;*/

 /*class Person{
     constructor(firstname, lastname, dob){
        this.firstname=firstname;
        this.lastname=lastname;
        this.dob = new Date(dob);
        
        }
        getBirthYear(){
           return this.dob.getFullYear();

        }
    }*/
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));

//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));
/*const items=document.querySelectorAll('.item');

items.forEach((item) => console.log(item));*/
const ul=document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
/*ul.firstElementChild.textContent='Hello';
ul.children[1].innerText='bhargav';
ul.lastElementChild.innerHTML=  '<h1>bhargav143</h1>';

const btn = document.querySelector('.btn');
btn.style.background ='red';*/

/*const btn = document.querySelector('.btn');

btn.addEventListener('click',(e) =>{
    e.preventDefault();
    document.querySelector('#my-form')
    .style.background= '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML ='<h1>Hello</h1>';
});*/
 const myform = document.querySelector('#my-form');
 const nameInput = document.querySelector('#name');
 const emailInput = document.querySelector('#email');
 const userList = document.querySelector('#users');
 const msg=document.querySelector('.msg');

 myform.addEventListener('submit', onsubmit);


 /*function onsubmit(e){
     e.preventDefault();
     console.log(nameInput.value);
 }*/
 if(nameInput.value === '' || emailInput === '' ){
     msg.classList.add('error');
     msg.innerHTML='please enter all fields';

     setTimeout(() =>msg.remove(),3000);
 }else {
     const li=document.createElement('li');
     li.appendChild(document.createTextNode('${nameInput.value}: ${emailInput.value}'));

userList.appendChild(li);


 
nameInput.value='';
emailInput.value='';

 