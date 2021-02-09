import "./src/styles/global.css"
export const onInitialClientRender = () => {
    setTimeout(function() {
        document.getElementById("___loader").style.display = "none"
    }, 100)
}