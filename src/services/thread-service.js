

const baseURL = "http://localhost:3000"
export const getThread = async (userId) => {
    const response = await fetch(`${baseURL}/api/thread`)
    const results = await response.json();
    return results.data
}

export const createThread = async (data) => {
    const response = await fetch( `${baseURL}/api/thread`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const results = await response.json();
    return results
}

export const addComment = async (data) => {
    const response = await fetch( `${baseURL}/api/thread/comment/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const results = await response.json();
    return results.data
}

export const deleteThread = async (data) => {
    const response = await fetch( `${baseURL}/api/thread/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const results = await response.json();
    return results.data
}