export async function createChampion({ cost, name }) {
    return await fetch(`/api/champion/createChampion`, {
        method: "POST",
        body: JSON.stringify({ cost, name }),
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

export async function updateChampion(champion) {
    return await fetch(`/api/champion/updateChampion`, {
        method: "POST",
        body: JSON.stringify(champion),
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