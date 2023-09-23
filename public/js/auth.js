const login = () => {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirm = document.getElementById('confirm').value

    fetch(`http://localhost:2001/register`, {
        method: 'POST',
        body: JSON.stringify({ name, email, password, confirm }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            // if (res.storeStatus) {
            //     document.getElementById('title').value = ''
            //     document.getElementById('description').value = ''

            //     document.getElementById('success-alert').style.display = 'block'

            //     setTimeout(() => {
            //         document.getElementById('success-alert').style.display =
            //             'none'
            //     }, 2000)
            // }
        })
        .catch((err) => console.log(err))
}
