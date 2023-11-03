// const myArray = [["Blessing","Akeem","Bola","Roqeeb"], ["Tide","Adeshina","Dapo","Saheed",] ]
// console.log(myArray); 

// const myObj = {
//     southsouth:"Akwa Ibom,Bayesal,Cross River,Delta,Edo,River",
//     southeast:"Abia, Anambra, Imo, Enugu, Ebonyi",
//     southwest:"Ekiti, Oyo, Osun, Ondo, Ogun, Lagos, Kwara",
//     northwest:"Kaduna, Kastina, Kebbi, Jigawa, Sokoto, Zamfara, Kano",
//     northeast:"Adamawa, Bauchi, Borno, Gombe, Taraba, Yobe",
//     northcentre:"Kogi, Kwara, Nassarawa, Benue, Niger",
// }
// console.log(myObj);

// const wahala = [myArray,myObj]
// console.log(wahala);



// function square (x){
//     console.log(x*x);
// }
// square (10)

// function Triangle(b,h){
// console.log(b*h/2);

// }

// Triangle(6,3)


// let x = 4;
// function sum(){
//     let x = 20;
//     function add(x){
//         console.log()
//     }
//     add(20)
// }
// sum(4,20);


// const dom = document.getElementById('dom')
// dom.textContent="DOM MANIPULATION"

// const name = document.querySelector(".name")
// name.textContent="My name is Blessing"
// dom.classList.add('ddd')

// name.classList.add('bless')

// const grandma = document.querySelector('.grandma')
// grandma.classList.add('mother')

// const son1 = document.querySelector(`.son1`)
// son1.classList.add('firstson')

// const son2 = document.getElementsByClassName('son2')
// son1.classList.add('secondson')

// const user = document.getElementById('user')
// const pass = document.getElementById('pass')
// const sub = document.getElementById('sub')
// const form = document.getElementById('form')
// const text = document.getElementById('text')

// let totalFee = 100000
// let cleared = false
// let partialPayment = false
// let fullPament = false
// let probation = false
// let paid = document.getElementById ('payment')
// let pay = document.getElementById ('pay') 
// const studentStatus = (paid)=>{
//     if(paid === totalFee){
//         cleared=true
//         fullPament=true
//     } 
// if (paid.value)
 
// }
 
const form = document.getElementById('myform')
const input = document.getElementById('payment')
let totalFee = "100000"
const studentStatus = document.getElementById('pay')
const student = document.getElementById('name')
const studentMatric = document.getElementById('matric')


const allStudents = [
    {
    name: "Olusade Adewale",
    matric: 'OIC001'
},
{
    name: "Adetolani Adewale",
    matric: 'OIC002'
},
{
    name: "Adebola Israel",
    matric: 'OIC003'
},
{
    name: "Oluwadare Tolulope",
    matric: 'OIC004'
},
{
    name: "Ayoola Blessing",
    matric: 'OIC005'
},
]

const validateStudent =()=> allStudents.filter((students)=> students.name.toLowerCase()=== student.value.toLowerCase() && students.matric.toLowerCase() === studentMatric.value.toLowerCase()
)
function valid (e){
    e.preventDefault()
    const check =validateStudent()
    // console.log(check)
    // console.log(check.length)
    if(check.length===1){

    
    if (input.value===totalFee){
        studentStatus.innerHTML = "Congrats! your payment is completed, you can now print your exam clearance"
    }
    else if (input.value >= 50000 && input.value < 100000){
        studentStatus.innerHTML = "Half Payment Received! Please complete your payment to print your exam clearance"
    }
    else if(input.value > 0 && input.value < 50000)
    studentStatus.innerHTML= "Pay half of payment fee to qualify "
else{
    studentStatus.innerHTMLt = "Sorry you are not a bonifide student"
}
    }
    else{
        studentStatus.innerHTML ="Name or matric number is incorrect"
    }
}


form.addEventListener('submit', valid)
studentStatus.classList.add('color')


