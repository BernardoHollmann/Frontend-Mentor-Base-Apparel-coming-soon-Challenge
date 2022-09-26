
window.onload = function(){
    const submit = document.querySelector(".submit") /*button*/
    const error = document.querySelector(".error") /*error message*/
    const form = document.querySelector("form")
    const input = document.querySelector("input") /*email*/
    const label = document.querySelector("label")

    error.style.display = "none";
    label.style.display = "none";

    form.addEventListener("submit", validate)
    submit.addEventListener("click", validate)


    function validate(e) {
        e.preventDefault()

        const inputValue = input.value.trim()

        if (!isEmail(inputValue)) {
            error.style.display = "block"
            label.style.display = "block"
        } else {
            error.style.display = "none"
            label.style.display = "none"
        }
    }

    function isEmail(input) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
    }
}