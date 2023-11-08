const node_for_click = document.getElementById("for_click")
function find_edit() {
    document.getElementsByTagName('div')[3].innerText = 'Kovalevskaya'
    document.getElementsByTagName('div')[4].innerText = 'Ksenia'
    document.getElementsByTagName('div')[5].innerText = 'Alexandrovna'
}
node_for_click.addEventListener("click",find_edit)