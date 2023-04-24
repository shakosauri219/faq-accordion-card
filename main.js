const question = document.querySelectorAll(".question");

question.forEach((quest) => {
    quest.addEventListener("click", () => {
        const arrow = quest.querySelector(".arrow");
        const answer = quest.querySelector(".answer");
        const questionText = quest.querySelector(".question-text");

        if(answer.style.display === 'flex'){
            answer.style.display = 'none'
            arrow.style.transform = 'rotate(0deg)';
            questionText.style.color = '#4B4C5F';
            questionText.style.fontWeight = '400';
        }else{
            answer.style.display = 'flex';
            arrow.style.transform = 'rotate(180deg)';
            questionText.style.color = 'black';
            questionText.style.fontWeight = '700';
        }

    })
})




