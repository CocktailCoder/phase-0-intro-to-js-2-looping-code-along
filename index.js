debugger;
function writeCards(stringNames="", eventName){
    for(let i = 0; i < stringNames.length; i++){
        let x = (`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`);
        myNewArray.push(x);
    }
    return myNewArray;
}
const myNewArray = new Array;
function countDown(number){
    for (let i = number; i >= 0; i--){
        console.log(i);
    }

}

//console.log(countDown());
//myNewArray();