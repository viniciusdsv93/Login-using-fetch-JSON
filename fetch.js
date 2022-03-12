document.querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    let loginContent = document.querySelector('#input-login').value;
    let pwContent = document.querySelector('#input-pw').value;
    tryLogin(loginContent, pwContent);
})

function tryLogin(login, password) {
    let loginFound = false;
    debugger
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                debugger
                if (login === element.login) {
                    loginFound = true;
                    if (password === element.password) {
                        alert('access granted');
                        clearInputs();
                    }
                    else {
                        alert('password incorrect. access denied');
                        clearInputs();
                    }
                }
            });
            if (!loginFound) {
                alert('login not registered');
                clearInputs();
            }
        }
        )
}

function clearInputs() {
    document.querySelector('#input-login').value = '';
    document.querySelector('#input-pw').value = '';
}