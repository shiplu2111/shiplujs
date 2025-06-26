const API_BASE = process.env.NEXT_PUBLIC_API_URL;


export async function getHero() {
    try {
        const res = await fetch(`${API_BASE}/hero`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch hero");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching hero:", err);
        return null;
    }
}
export async function getCounter() {
    try {
        const res = await fetch(`${API_BASE}/counters`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch counters");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching counters:", err);
        return null;
    }
}

export async function getSkill() {
    try {
        const res = await fetch(`${API_BASE}/skills`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch skills");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching skills:", err);
        return null;
    }
}
