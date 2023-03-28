const baseURL = "http://localhost:3000"
export const getProfile = async (userId) => {
    const response = await fetch(`${baseURL}/api/profile?id=${userId}`)
    const results = await response.json();
    return results.data
}

export const createProfile = async (data) => {
    const response = await fetch( `${baseURL}/api/profile`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const results = await response.json();
    return results
}

export const updateProfile = async (data) => {
    const response = await fetch( `${baseURL}/api/profile`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const results = await response.json();
    return results
}