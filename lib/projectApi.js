const API_BASE = process.env.NEXT_PUBLIC_API_URL;


export async function getProjects() {
    try {
        const res = await fetch(`${API_BASE}/projects`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching projects:", err);
        return null;
    }
}

export async function getLatestProjects() {
    try {
        const res = await fetch(`${API_BASE}/projects/latest`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch latest projects");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching latest projects:", err);
        return null;
    }
}


export async function getProjectCategory() {
    try {
        const res = await fetch(`${API_BASE}/categories`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching categories:", err);
        return null;
    }
}



export async function getProject({ slug }) {
    try {
        const res = await fetch(`${API_BASE}/project-details/${slug}`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch project");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching project:", err);
        return null;
    }
}

export async function getProjectByCategory({ Id }) {
    try {
        const res = await fetch(`${API_BASE}/project-by-category/${Id}`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching projects:", err);
        return null;
    }
}
export async function getProjectByTag({ slug }) {
    try {
        const res = await fetch(`${API_BASE}/project-by-tag/${slug}`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching projects:", err);
        return null;
    }
}

export async function getProjectByClient({ ClientName }) {
    try {
        const res = await fetch(`${API_BASE}/project-by-client/${ClientName}`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching projects:", err);
        return null;
    }
}


export async function getProjectByLocation({ location }) {
    try {
        const res = await fetch(`${API_BASE}/project-by-location/${location}`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching projects:", err);
        return null;
    }
}
export async function getTestimonials() {
    try {
        const res = await fetch(`${API_BASE}/testimonials`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching testimonials:", err);
        return null;
    }
}

export async function getTestimonialsByProject({ Id }) {
    try {
        const res = await fetch(`${API_BASE}/testimonials/${Id}`, {
            cache: "no-store", // optional if the data changes often
        });
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        const data = await res.json();
        return data?.data ?? null;
    } catch (err) {
        console.error("Error fetching testimonials:", err);
        return null;
    }
}