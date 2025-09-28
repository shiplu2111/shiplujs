
const API_BASE = process.env.NEXT_PUBLIC_API_URL;


export async function getContacts() {
    try {
        const res = await fetch(`${API_BASE}/settings`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch contacts");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching contacts:", err);
        return null;
    }
}



