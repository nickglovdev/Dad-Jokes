import { Dad } from "./Dad.js"
import { useJokes } from "./DadDataProvider.js"

const contentTarget = document.querySelector(".dadContainer")

export const DadList = () => {
    const arrayOfDadObjects = useJokes()

    for (const dadObject of arrayOfDadObjects) {

        const htmlDad = Dad(dadObject)

        contentTarget.innerHTML += htmlDad

    }
}
