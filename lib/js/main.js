const title = document.getElementById("title_input");
const main = document.getElementById("main_title");
const submitButton = document.getElementById("submit_button");
const inputs = document.querySelectorAll("input");
const form = document.querySelector(".form_container");
const finalStory = document.getElementById("story_result")
const body = document.querySelector("body")
//getting all the elements
title.addEventListener("input", () => {
    main.textContent = title.value;
})
//event listener to make sure the title input value  matches the main title

submitButton.addEventListener("click",(event) =>{
    event.preventDefault();
    for (const input of inputs){
        if (input.value === ""){
            alert("Please fill in all fields");
            window.location.reload();
            return
        }
        const story = `Last night I ate a ${inputs[1].value}, and today I just had to ${inputs[2].value}. What a ${inputs[3].value}!`
        form.style.display = "none";
        finalStory.textContent = story;
        
    }
});
//event listener for submit button is added. To stop the page from freshing automaticall,
//preventDefault() is used. A for loop is used to loop through all input elements. Checked to see if any input element is empty.
//If so, it sends a alert and refreshes the page. If all inputs are filled, the story become the p elemeent of story_result.

