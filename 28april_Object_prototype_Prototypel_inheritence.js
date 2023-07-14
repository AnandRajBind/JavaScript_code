// Object

const user={username:"Anand",
email:"anandrajbind35@gmail.com"
}

// object destructing
const {username,email}=user

// ArrayObject

const myArray=[
   {username:"Anand",
   email:"anand@gmail.com"
},

{username:"Anurag",
email:"anurag@gmail.com"
},

{username:"Aman",
email:"amamn@gmail.com"
},
]
//  myArray.forEach((ele)=>{
//     console.log(ele.username);
//  }
//  )
 myArray.forEach((ele)=>{
    console.log(ele.username);
 }
 )

 Array.prototype.heyHitesh=function(){
   console.log(`array prototype`);
 }

//  object inside function 
const pwCourse={
courseName: "DSA",
Price:1200,

// function
getCourseDetails:function(){
   console.log(` The course Name is ${this.courseName} and price is ${this.Price} $`);
}
}
 pwCourse.getCourseDetails();

// prototype
Object.prototype.anand=function(){
   console.log("I am prototype ");
}

pwCourse.anand();
user.anand();
myArray.anand();


const stringName="Anand";
stringName.anand();

// protypel inheritence


// pwCourse.heyHitesh(); //not access 
myArray.heyHitesh();  // access 
// stringName.heyHitesh(); // not access 

// protypel inheritence Example 2***********************************
const user1={
   courseName: "DSA",
   Price:1200,

}
const user2={
   username:"Anand",
   email:"anand@gmail.com"
}
const user3={
    isloggedin:true,
}
const user4={
   support:"js course",
   //  user1 ki value ko user4 me access karna hai. iske liye js provide three metho/way. 

   // method1
__proto__:user1
}

  // method2
  user4.__proto__=user1;

// method3. user4 me user1 ki vasue ko access kar raha hai. 
Object.getPrototypeOf=(user4, user1)

console.log(user4.courseName);