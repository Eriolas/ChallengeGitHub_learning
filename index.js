function learnMore () {

    let learn = prompt ("Do you want to learn more about GitHub?");
    if ( learn === "yes") {
        alert("Cick on the first Github in the paragraph");
    }
    else {
        alert ("You are welcome!");
    }
}

let learningMore = document.querySelector("#goLearn");
learningMore.addEventListener("click", learnMore);

