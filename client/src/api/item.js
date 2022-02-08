export async function getAllItems() {
    return await fetch(`/api/items/getAllItems`, {
        method: "GET",
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