let charLimit = 10;
let user = "@John";
let imgTag;
let aTag;

//SELECTORS
let submitButton = document.getElementById('submitBtn');
let tweetOutput = document.querySelector('.tweetOutput');
let textArea = document.getElementById('myTextArea');
let counterDiv = document.querySelector('.counter');

//EVENT LISTENERS
submitButton.addEventListener('click', function(e){
    e.preventDefault();
    let newParagraphTag = document.createElement('p');
    imgTag = document.createElement('img');
    aTag = document.createElement('a');
    aTag.id="myA";
    aTag.href="#";
    aTag.innerText = "@User";
    newParagraphTag.id="tweetP";
    imgTag.id="icon";
    imgTag.src = "./images/delete.svg";

    if(textArea.value.length <= charLimit){
        newParagraphTag.innerText = `${user}- ${textArea.value}`;
        tweetOutput.appendChild(newParagraphTag);
        newParagraphTag.appendChild(imgTag);
    
    }else{
        document.getElementById('cc').style.color="red";
    }
    textArea.value = "";
    setTimeout(resetCharCounter, 1000);

    //EVENT LISTENER FOR DELETE ICON
    imgTag.onclick = () =>{
        newParagraphTag.innerText = "";
    }
});
//RESET COUNTER 
function resetCharCounter(){
    document.getElementById('newCCParagraph').innerHTML = `0 characters`;
    document.getElementById('newCCParagraph').style.color="black";
};
//CHECK CHARACTER LIMIT AND HIGHLIGHT COLOR
function cc(obj){
    if(obj.value.length > charLimit){
        document.getElementById('newCCParagraph').innerHTML = obj.value.length+ ' characters';
        document.getElementById('newCCParagraph').style.color = "red";
    }else {
        document.getElementById('newCCParagraph').innerHTML = obj.value.length+ ' characters';
        document.getElementById('newCCParagraph').style.color = "green";
    }
    
}




