if (localStorage.getItem('propose')) {

    if ((window.location.pathname == '/propose/index.html') || window.location.pathname == '/propose/') {
        window.location.href = "/propose/proposal.html";
    }
}

else {

    if ((window.location.pathname == '/propose/proposal.html') || window.location.pathname == '/propose/yes.html') {
        window.location.href = "/propose/index.html";
    }

    document.getElementById('btn').addEventListener('click', function () {
        if (document.getElementById('password').value == "Propose Now") {
            localStorage.setItem('propose', "I'm ready to propose")
            window.location.href = "/propose/proposal.html";
        }
        else {
            document.getElementById('password').value == 'asdasd'
        }

    })

}


function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    let x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth - 84);
    let y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight - 48);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}