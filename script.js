const countvalue = document.getElementById('counter')


function increment() {
    //ge the value from UI
    let value = parseInt(countvalue.innerText);
    //perform the operation on value
    value = value + 1;
    // set the value onto the UI
    countvalue.innerText = value;
}

function decrement(){
    //get the value from UI
    let value = parseInt(countvalue.innerText);
    //perform the operation
    value = value -1;
    //set the value onto the UI
    countvalue.innerText = value;
}