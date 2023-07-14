// Event Loop 
const userone=()=>{
    console.log("Hello One")
};
const userTwo=()=>{
    setTimeout(() => {
        console.log("Hello I am SetTimeout")
    },2000);
};
const userThree=()=>{
    console.log("Hello Three")
};
userThree();
userTwo();
userone();
