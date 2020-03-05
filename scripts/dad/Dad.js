export const Dad = (dadObjects) => {
    return`
        <ul class="dadJokeContainer">
            <li class="joke__list"><h4>Joke Number: ${dadObjects.id}</h4></li>
            <li class="joke__list">${dadObjects.question}</li>
            <li>
                <button class="jokeButton" id="button--${dadObjects.id}">Answer</button>
                <dialog class="dialog--joke" id="details--${dadObjects.id}">
                    <div>${dadObjects.answer} </div>
                    <button class="button--close">Close Dialog</button>
                </dialog>
            </li>
        </ul>
    `
}