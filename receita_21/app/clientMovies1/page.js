"use client"

import Form from "next/form"
import {useState, memo, useCallback} from "react"
import Link from 'next/link'

export default function Home(){
    const [resultMovies, setResultMovies] = useState([])
    const [resultTitleSearchKey, setResultTitleSearchKey] = useState("")
    const [resultProcurando, setResultProcurando] = useState(false)

    const handleAction = useCallback(async (formData) => {
        setResultProcurando(true)
        const titleSearchKey = formData.get("titleSearchKey")
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=73dd12d0&s=${titleSearchKey}`);
        const jsonRes = await httpRes.json();
        setResultMovies(jsonRes.Search || []);
        setResultTitleSearchKey(titleSearchKey);
        setResultProcurando(false);
    }, [])

    return (
        <main className="container py-5">
            <h1 className="mb-4 text-primary fw-bold text-center">🎬 Catálogo de Filmes</h1>
            
            <div className="card shadow-sm mb-4 border-0 bg-light">
                <div className="card-body p-4">
                    <MovieForm 
                        handleAction={handleAction} 
                        defaultValue={resultTitleSearchKey} 
                        procurando={resultProcurando} 
                    />
                </div>
            </div>

            <MovieTable movies={resultMovies} />
        </main>
    );
}
export const MovieForm = memo(function MovieForm({ handleAction, defaultValue, procurando }) {
   return (
        <Form action={handleAction} className="row g-3 align-items-end">
            <div className="col-md-9 col-sm-8">
                <label htmlFor="idTitleSearchKey" className="form-label fw-bold text-secondary">
                    Título do Filme
                </label>
                <input 
                    id="idTitleSearchKey" 
                    name="titleSearchKey" 
                    defaultValue={defaultValue} 
                    placeholder="Digite um filme (ex: Matrix, Batman)"
                    className="form-control form-control-lg"
                    required
                />
            </div>

            <div className="col-md-3 col-sm-4">
                <button 
                    type="submit" 
                    disabled={procurando} 
                    className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center gap-2 shadow-sm"
                >
                    {procurando ? (
                        <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span>Pesquisando...</span>
                        </>
                    ) : (
                        <span>Pesquisar</span>
                    )}
                </button>
            </div>
        </Form>
    )
})

export function MovieTable({movies}){
    if (!movies || movies.length === 0) {
        return (
            <div className="alert alert-warning text-center shadow-sm border-0 py-4" role="alert">
                <h5 className="alert-heading mb-1">Nenhum filme para exibir</h5>
                <p className="mb-0 text-muted">Digite o nome de um filme no campo acima e clique em <strong>Pesquisar</strong>.</p>
            </div>
        );
    }

    return (
        <div className="table-responsive shadow-sm rounded border">
            <table className="table table-striped table-hover align-middle mb-0 bg-white">
                <thead className="table-dark">
                    <tr>
                        <th scope="col" style={{ width: "80px" }}>Pôster</th>
                        <th scope="col">Título</th>
                        <th scope="col" style={{ width: "120px" }}>Ano</th>
                        <th scope="col" style={{ width: "150px" }}>ID IMDb</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        
                        <tr key={m.imdbID}>
                            <td>
                                <img
                                    src={m.Poster !== "N/A" ? m.Poster : "https://placehold.co/50x70"}
                                    alt={m.Title}
                                    className="img-thumbnail shadow-sm"
                                    style={{ width: "50px", height: "75px", objectFit: "cover" }}
                                />
                            </td>
                            <td className="fw-bold text-dark"><Link key={m.imdbID} href={`/movie/${m.imdbID}`}>{m.Title}</Link></td>
                            <td>
                                <span className="badge bg-primary fs-6 px-3 py-2 rounded-pill">
                                    {m.Year}
                                </span>
                            </td>
                            <td className="text-muted font-monospace small">{m.imdbID}</td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </div>
    )
}