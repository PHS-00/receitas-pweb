// import { MovieForm } from "../movieSearch/page"

export default async function HomeMovies({searchParams}){
    const {titleSearchKey = 'bagdad', yearSearchKey = '2026'} = await searchParams
    const res = await fetch(`http://www.omdbapi.com/?apikey=73dd12d0&s=${titleSearchKey}&y=${yearSearchKey}`)
    const data = await res.json()

    return (
        <div>
            <MovieForm />
            { data.Search ? (
                <div>    
                    {data.Saearch.map( (m) => (
                            <Link key={m.imdbID} href={`/movie/${m.imdbID}`}>
                                <div key={m.imdbID}>
                                    <img 
                                    src={m.Poster !== 'N/A' ? m.Poster : 'https://via.placeholder.com/150'} 
                                    alt={m.Title} 
                                    style={{ width: '100px', borderRadius: '4px'}} 
                                    />
                                    <div>{m.Title} --- {m.Year}</div>  
                                </div>
                            </Link> 
                        )
                    )}
                </div>
            ) : ( <p>Nenhum filme encontrado para essa busca.</p> )}
        </div>
    )
}