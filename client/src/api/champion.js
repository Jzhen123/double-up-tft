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