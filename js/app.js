const languageBlock = document.getElementById('languageBlock')
const langChangeCheckmark = document.getElementById('langChangeCheckmark')
const langChange = document.getElementById('langChange')
const langChangeCheckmarkBlock = document.getElementById('langChangeCheckmarkBlock')
const headerStyckerStory = document.getElementById('headerStyckerStory')
const styckerStoryLink = document.getElementById('styckerStoryLink')
const styckerStoryBar = document.querySelectorAll('.bar')

function languageBlockAddClass() {
    langChange.classList.add("lang-change-hover")
    langChangeCheckmark.classList.add("change-checkmark-color")
    langChangeCheckmarkBlock.classList.add("lang-change-checkmark-block")
}

function languageBlockRemoveClass() {
    langChange.classList.remove("lang-change-hover")
    langChangeCheckmark.classList.remove("change-checkmark-color")
    langChangeCheckmarkBlock.classList.remove("lang-change-checkmark-block")
}

languageBlock.addEventListener("mouseover", languageBlockAddClass)
languageBlock.addEventListener("mouseout", languageBlockRemoveClass)



function headerStyckerStoryAddClass() {
    styckerStoryLink.classList.add("change-color-stycker-story-link")
    styckerStoryBar.forEach(barChange => {
        barChange.classList.add("change-backgound-stycker-story-bar")
    });
}

function headerStyckerStoryRemoveClass() {
    styckerStoryLink.classList.remove("change-color-stycker-story-link")
    styckerStoryBar.forEach(barChange => {
        barChange.classList.remove("change-backgound-stycker-story-bar")
    });
}

headerStyckerStory.addEventListener("mouseover", headerStyckerStoryAddClass)
headerStyckerStory.addEventListener("mouseout", headerStyckerStoryRemoveClass)

console.log(styckerStoryBar)