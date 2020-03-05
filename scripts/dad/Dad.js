export const Dad = (dadObjects) => {
    return`
        <ul class="dadJokeContainer">
            <li class="joke__list"><h4>${dadObjects.id}</h4></li>
            <li class="joke__list">${dadObjects.question}</li>
            <li class="joke__answer joke__list">${dadObjects.answer}</li>
        </ul>
    `
}