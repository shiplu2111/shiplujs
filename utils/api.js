// lib/api.js or utils/api.js
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const getApi = async (endpoint) => {
    const res = await fetch(`${API_BASE}/${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store", // optional: disable caching
    });

    if (!res.ok) throw new Error(`GET ${endpoint} failed`);
    return res.json();
};

export const postApi = async (endpoint, data) => {
    const res = await fetch(`${API_BASE}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(`POST ${endpoint} failed`);
    return res.json();
};
