//SELECTORS
let submitButton = document.getElementById('submitBtn');
let tweetOutput = document.querySelector('.tweetOutput');
let textArea = document.getElementById('myTextArea');
let counterDiv = document.querySelector('.counter');


//EVENT LISTENERS
submitButton.addEventListener('click', function(e){
    e.preventDefault();
    let newParagraphTag = document.createElement('p');
    newParagraphTag.innerText = textArea.value;
    tweetOutput.appendChild(newParagraphTag);
    textArea.value = "";

    
    
   
  
});
textArea.addEventListener('change', characterChecker)

function characterChecker(){
    let numOfChars = document.getElementById('myTextArea').value.length;
    //CHANGE COLOR OF TEXT IF EXCEED CHARACTER LIMIT
    if(numOfChars > 5){
        document.getElementById('characterCounter').innerHTML = `Character count: ${numOfChars}`;
        document.getElementById('characterCounter').style.color="red";
    }else{
        document.getElementById('characterCounter').innerHTML = `Character count: ${numOfChars}`;
    }
   
    console.log(numOfChars);
}

// textArea.onclick = () => {
//     //let counter = document.getElementById('characterCounter');
//     let newP = document.createElement('p');
//     newP.innerText = `Charachter count: ${textArea.value.length}`;
//     counterDiv.appendChild(newP);
//      //counter.innerText = textArea.value.length;

// }




