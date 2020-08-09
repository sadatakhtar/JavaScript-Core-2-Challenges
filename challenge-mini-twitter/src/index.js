//SELECTORS
let submitButton = document.getElementById('submitBtn');
let tweetOutput = document.querySelector('.tweetOutput');
let textArea = document.getElementById('myTextArea');


//EVENT LISTENERS
submitButton.addEventListener('click', function(e){
    e.preventDefault();
    let newParagraphTag = document.createElement('p');
    newParagraphTag.innerText = textArea.value;
    tweetOutput.appendChild(newParagraphTag);
    textArea.value = "";
  
});


