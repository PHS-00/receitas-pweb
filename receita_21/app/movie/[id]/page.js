import { revalidatePath } from 'next/cache'
import Image from 'next/image'

export const revalidate = 60 * 60 * 24

export async function generateStaticParams() {
    const allMovies = await fetch('https://www.omdbapi.com/?apikey=73dd12d0&s=lady')
        .then((res) => res.json())
    return allMovies.Search.map((movie) => ({
        id: movie.imdbID,
    }))
}

export default async function Home({ params }) {
    const { id } = await params
    const movie = await fetch(`https://www.omdbapi.com/?apikey=73dd12d0&i=${id}`)
        .then((res) => res.json())

    return (
        <div>
            {movie.Poster && movie.Poster !== 'N/A' ? (
            <Image 
                src={movie.Poster} 
                alt={movie.Title}
                width={300}
                height={450}
                style={{ borderRadius: '8px', objectFit: 'cover' }}
            />) : (<p>Sem pôster disponível.</p>)}
            <h1>{movie.Title} ({movie.Year})</h1>
            <p>Director: {movie.Director}</p>
            <p>Plot: {movie.Plot}</p>
        </div>
    )
}   