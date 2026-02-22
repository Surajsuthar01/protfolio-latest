
export function formatDate(value: string): string {
    const date = new Date(value);
    return new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).format(date);
}
