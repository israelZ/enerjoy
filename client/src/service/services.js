export async function postData(data = {}) {

    const response = await fetch('/api-post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}
export async function getClock() {

    const response = await fetch("/api").then((res) => res.json())
    return response;
}