function updateItem (id) {
    const title = document.getElementById("title").value;

    fetch(`http://localhost:3000/update/${id}`, {
        method: "POST",
        body: JSON.stringify({title: title}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => {
        if (res.statusCode === "success") {
            document.getElementById("success-alert").style.display = "block";

            setTimeout(() => {
                document.getElementById("success-alert").style.display = "none";
            }, 2000)
        } else if (res.statusCode === "fail") {
            document.getElementById("danger-alert").style.display = "block";

            setTimeout(() => {
                document.getElementById("danger-alert").style.display = "none";
            }, 2000)
        }
    })
    .catch(err => console.log(err))
}

function deleteItem (e, id) {
    if (confirm("Are you sure?")) {
        fetch(`http://localhost:3000/delete/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            if (res.isDeleted) {
                e.parentNode.parentNode.remove();

                document.getElementById("delete-success-alert").style.display = "block";

                setTimeout(() => {
                    document.getElementById("delete-success-alert").style.display = "none";
                }, 2000);
            }
        })
        .catch(err => console.log(err))
    }
}

function storeItem () {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    fetch(`http://localhost:3000/store`, {
        method: "POST",
        body: JSON.stringify({title: title, description: description}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => {
        if (res.storeStatus) {
            document.getElementById("title").value = "";
            document.getElementById("description").value = "";

            document.getElementById("success-alert").style.display = "block";

            setTimeout(() => {
                document.getElementById("success-alert").style.display = "none";
            }, 2000)
        }
    })
    .catch(err => console.log(err))
}