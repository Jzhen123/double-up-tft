export async function login({ email, password }) {
    return await fetch("/api/auth/login", {
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

export async function searchArtworks({ keyword }) {
    return await fetch(`/api/homepage/getArtworks/${keyword}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }

        return response.json();
    }).catch((err) => {
        console.log(err);
    });
}

export async function createChampion({ name, cost }) {
    return await fetch(`/api/champion/createChampion`, {
        method: "POST",
        body: JSON.stringify({ name, cost }),
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
        console.log(response);
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error("HTTP status " + response.status);
        }
    }).catch((err) => {
        console.log(err);
    });
}