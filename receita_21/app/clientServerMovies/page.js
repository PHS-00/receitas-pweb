"use client"

import {searchMovies} from "../actions/movieActions"
import Form from "next/form"
import {useState} from "react"
import Link from 'next/link'

export default function Home(){
    const [data, setData] = useState({})

    async function handleAction(formData){
        const res = await searchMovies(formData)
        setData(res)
    }

    return (
        <div>
            <MovieForm actionHandler={handleAction}/>
            {data.Search && <MovieTable movies={data.Search}/>}
        </div>
    )
}

export function MovieForm({actionHandler}){
    return (
        <Form action={actionHandler}>
            <label htmlFor="idTitleSearchKey">Título</label>
            <input id="idTitleSearchKey" name="titleSearchKey"/>

            <label htmlFor="idYear">Ano: </label>
            <input id="idYear" name="yearSearchKey" />
            
            <button type="submit">Pesquisar</button>
        </Form>
    )
}

export function MovieTable({movies}){
    return (
        <div>
            <div>
                {movies.map( (m) => <Link key={m.imdbID} href={`/movie/${m.imdbID}`}><div>{m.Title} --- {m.Year}</div> </Link> )}
            </div>
        </div>
    )

}