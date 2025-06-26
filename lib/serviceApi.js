
const API_BASE = process.env.NEXT_PUBLIC_API_URL;


export async function getServices() {
    try {
        const res = await fetch(`${API_BASE}/services`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch services");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching services:", err);
        return null;
    }
}


export async function getPackages() {
    try {
        const res = await fetch(`${API_BASE}/packages`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch packages");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching packages:", err);
        return null;
    }
}

export async function getClients() {
    try {
        const res = await fetch(`${API_BASE}/clients`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch clients");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching clients:", err);
        return null;
    }
}
export async function getFaqs() {
    try {
        const res = await fetch(`${API_BASE}/faqs`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch faqs");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching faqs:", err);
        return null;
    }
}

