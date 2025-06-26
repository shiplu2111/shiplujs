
const API_BASE = process.env.NEXT_PUBLIC_API_URL;


export async function getExperiences() {
    try {
        const res = await fetch(`${API_BASE}/experiences`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch experiences");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching experiences:", err);
        return null;
    }
}

export async function getEducation() {
    try {
        const res = await fetch(`${API_BASE}/education`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch education");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching education:", err);
        return null;
    }
}

export async function getTrainings() {
    try {
        const res = await fetch(`${API_BASE}/trainings`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch trainings");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching trainings:", err);
        return null;
    }
}


export async function getCertificates() {
    try {
        const res = await fetch(`${API_BASE}/certificates`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch certificates");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching certificates:", err);
        return null;
    }
}


export async function getCaseStudies() {
    try {
        const res = await fetch(`${API_BASE}/case-studies`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch case-studies");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching case-studies:", err);
        return null;
    }
}