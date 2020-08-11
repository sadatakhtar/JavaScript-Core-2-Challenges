let charLimit = 100;

//SELECTORS
let submitButton = document.getElementById('submitBtn');
let tweetOutput = document.querySelector('.tweetOutput');
let textArea = document.getElementById('myTextArea');
let counterDiv = document.querySelector('.counter');



//EVENT LISTENERS
submitButton.addEventListener('click', function(e){
    e.preventDefault();
    let newParagraphTag = document.createElement('p');
    let imgTag = document.createElement('img');
    newParagraphTag.id="tweetP";
    imgTag.id="icon";
    imgTag.src = "./images/delete.svg";

    if(textArea.value.length <= charLimit){
        newParagraphTag.innerText = textArea.value;
        tweetOutput.appendChild(newParagraphTag);
        newParagraphTag.appendChild(imgTag);
       
    }else{
        document.getElementById('cc').style.color="red";
    }
    textArea.value = "";
    setTimeout(resetCharCounter, 1000);
});
//RESET COUNTER 
function resetCharCounter(){
    document.getElementById('newCCParagraph').innerHTML = `0 characters`;
    document.getElementById('newCCParagraph').style.color="black";
};
//CHECK CHARACTER LIMIT AND HIGHLIGHT COLOR
function cc(obj){
    if(obj.value.length > 100){
        document.getElementById('newCCParagraph').innerHTML = obj.value.length+ ' characters';
        document.getElementById('newCCParagraph').style.color = "red";
    }else {
        document.getElementById('newCCParagraph').innerHTML = obj.value.length+ ' characters';
        document.getElementById('newCCParagraph').style.color = "green";
    }
    
}




