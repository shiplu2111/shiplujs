
const API_BASE = process.env.NEXT_PUBLIC_API_URL;


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



