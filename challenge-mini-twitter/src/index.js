let charLimit = 10;

//SELECTORS
let submitButton = document.getElementById('submitBtn');
let tweetOutput = document.querySelector('.tweetOutput');
let textArea = document.getElementById('myTextArea');
let counterDiv = document.querySelector('.counter');


//EVENT LISTENERS
submitButton.addEventListener('click', function(e){
    e.preventDefault();
    let newParagraphTag = document.createElement('p');
    if(textArea.value.length <= charLimit){
        newParagraphTag.innerText = textArea.value;
        tweetOutput.appendChild(newParagraphTag);
    }else{
        document.getElementById('cc').style.color="red";
       // alert(`character limit of ${charLimit} exceeded!!!`);
    }
    textArea.value = "";
    setTimeout(resetCharCounter, 1000);
});

//textArea.addEventListener('change', characterChecker);

// function characterChecker(){
//     let numOfChars = document.getElementById('myTextArea').value.length; //gets the number of charaters
//     //CHANGE COLOR OF TEXT IF EXCEED CHARACTER LIMIT
//     if(numOfChars > 280){
//         document.getElementById('characterCounter').innerHTML = `Character count: ${numOfChars}`;
//         document.getElementById('characterCounter').style.color="red";
//     }else{
//         document.getElementById('characterCounter').innerHTML = `Character count: ${numOfChars}`;
//         document.getElementById('characterCounter').style.color="green";
//     }
// };

function resetCharCounter(){
    document.getElementById('newCCParagraph').innerHTML = `0 characters`;
    document.getElementById('newCCParagraph').style.color="black";

};




function cc(obj){
    if(obj.value.length > 10){
        
        document.getElementById('newCCParagraph').innerHTML = obj.value.length+ ' characters';
        document.getElementById('newCCParagraph').style.color = "red";
    }else {
        document.getElementById('newCCParagraph').innerHTML = obj.value.length+ ' characters';
        document.getElementById('newCCParagraph').style.color = "green";
    }
    
}




