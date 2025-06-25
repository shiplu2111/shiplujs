const API_BASE = process.env.NEXT_PUBLIC_API_URL;
export async function getWebsiteSetting() {
    try {
        const res = await fetch(`${API_BASE}/settings`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch settings");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching settings:", err);
        return null;
    }
}

export async function getSocial() {
    try {
        const res = await fetch(`${API_BASE}/socials`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch socials");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching socials:", err);
        return null;
    }
}


export async function getAllModules() {
    try {
        const res = await fetch(`${API_BASE}/modules`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch modules");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching modules:", err);
        return null;
    }
}

export async function getModulesText() {
    try {
        const res = await fetch(`${API_BASE}/module-texts`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch module-texts");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching module-texts:", err);
        return null;
    }
}

