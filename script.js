const note_for_click = document.getElementById("for_click")

function find_edit() {
    const p0 = document.getElementsByTagName('p')[0]
    console.log(p0.innerText)
    p0.innerText = 'Kovalevskaya'

    const p1 = document.getElementsByTagName('p')[1]
    console.log(p1.innerText)
    p1.innerText = 'Ksenia'

    const p2 = document.getElementsByTagName('p')[2]
    console.log(p2.innerText)
    p2.innerText = 'Alexandrovna'
}
node_for_click.addEventListener("click",find_edit)