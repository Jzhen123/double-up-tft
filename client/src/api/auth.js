export async function login({ email, password }) {
    return await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error("HTTP status " + response.status);
        }
    }).catch((err) => {
        console.log(err);
    });
}