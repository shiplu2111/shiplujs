

const API_BASE = process.env.NEXT_PUBLIC_API_URL;


export async function getBlogs() {
    try {
        const res = await fetch(`${API_BASE}/blog`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching blogs:", err);
        return null;
    }
}
