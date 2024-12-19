import { BookData } from "@/types";

export default async function fetchOneBooks(
    id: number
): Promise<BookData | null> {
    const url = `https://onebite-books-server-main-ten-iota.vercel.app/book/${id}`
    
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error();
        }

        return await response.json();
    } catch(err) {
        console.error(err);
        return null;
    }
}