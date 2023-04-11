

const baseURL = "http://localhost:3000"
export const getThread = async (userId) => {
    const response = await fetch(`${baseURL}/api/thread`)
    const results = await response.json();
    return results.data
}

export const getThreadById = async (userId) => {
    const response = await fetch(`${baseURL}/api/thread?userId=${userId}`)
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

export const deleteComment = async (data) => {
    const response = await fetch( `${baseURL}/api/thread/comment`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const results = await response.json();
    return results.data
}

export const updateThread = async (data) => {
    const response = await fetch( `${baseURL}/api/thread`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const results = await response.json();
    return results.data
}

export const updateComment = async (data) => {
    const response = await fetch( `${baseURL}/api/thread/comment`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const results = await response.json();
    return results.data
}


export const updateLike = async (data) => {
    const response = await fetch( `${baseURL}/api/thread/like`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const results = await response.json();
    return results.data
}

export const updateFlag = async (data) => {
    const response = await fetch( `${baseURL}/api/thread/flag`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const results = await response.json();
    return results.data
}


export const updateCommentLike = async (data) => {
    const response = await fetch( `${baseURL}/api/thread/comment/like`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const results = await response.json();
    return results.data
}
