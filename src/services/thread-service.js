

const baseURL = "http://localhost:3000"
export const getThread = async (userId) => {
    const response = await fetch(`${baseURL}/api/thread?id=${userId}`)
    const results = await response.json();
    // console.log("get?",  results, typeof results)
    // console.log("get?",  results.data, typeof [...results.data])

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