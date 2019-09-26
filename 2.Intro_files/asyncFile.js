const explainProblem = () =>{
    console.log("Help, my phone is broken and doesn't turn on");
}

const personalInfo = {
    name:"Stefania",
    lastName: "Barabas",
    phoneNumber: "1234556678",
}

function helpDesk(personalInfo,explainProblem) {
    console.log("What's your personal info?");
    console.log(personalInfo);

    setTimeout(function(){
        explainProblem();
    }, 3000)
}

// helpDesk(personalInfo, explainProblem);

new Promise(function(resolve, reject){
    try{
        setTimeout(function(){
            resolve("I resolved this after 4 seconds");
        }, 4000);
    }catch(error){
        reject(error);
    }
}).then(function(message){
    //console.log(message);
});

// Redux: passing onSuccess, onFailure


function myPromise() {
    return new Promise(function(resolve, reject){ 
        try{
            setTimeout(()=>{
                resolve("I have resolved this after 5 seconds")
            },5000)
        }catch(error){
            reject(error)
        }
    })
}

// async await functions
async function myAsynchronousFunction(){
    // myPromise().then(message => {
    //     console.log(message);
    // })
    const message = await myPromise();
    console.log("This is the message:", message)
}

myAsynchronousFunction();