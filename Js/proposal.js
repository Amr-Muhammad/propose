// lazm el repo yb2a esmha propose

if (localStorage.getItem('propose')) {

    if ((window.location.pathname == '/propose/index.html') || (window.location.pathname == '/propose/') || (window.location.pathname == '/propose/index')) {
        window.location.href = "/propose/proposal.html";
    }
}

else {

    if ((window.location.pathname == '/propose/proposal.html') || (window.location.pathname == '/propose/proposal') || (window.location.pathname == '/propose/yes.html') || (window.location.pathname == '/propose/yes')) {
        window.location.href = "/propose/index.html";
    }

    document.getElementById('btn').addEventListener('click', function () {
        if (document.getElementById('password').value == "Propose Now") {
            genereateToken()

            window.location.href = "/propose/proposal.html";
        }
        else {
            document.getElementById('password').value == 'asdasd'
        }

    })

}




// if (localStorage.getItem('proposeToken')) {

//     if ((window.location.pathname == '/index.html') || (window.location.pathname == '/') || (window.location.pathname == '/index')) {
//         window.location.href = "/proposal.html";
//     }
// }

// else {

//     if ((window.location.pathname == '/proposal.html') || (window.location.pathname == '/proposal') || (window.location.pathname == '/yes.html') || (window.location.pathname == '/yes')) {
//         window.location.href = "/index.html";
//     }

//     document.getElementById('btn').addEventListener('click', function () {
//         if (document.getElementById('password').value == "Propose Now") {
//             genereateToken()
//             window.location.href = "/proposal.html";
//         }
//         else {
//             document.getElementById('password').value == 'asdasd'
//         }

//     })

// }


function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    let x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth - 84);
    let y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight - 48);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}

function genereateToken() {
    alpha = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let token = ''
    for (let i = 0; i < alpha.length; i++) {
        token = token + alpha.charAt((Math.floor(Math.random() * alpha.length)))
    }
    localStorage.setItem('proposeToken', token)
}