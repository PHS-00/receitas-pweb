// 📦 Nossa "Base de Dados" local própria (Desafio)
const minhabasededados = [
    { Title: "Matrix", Year: "1999", imdbID: "local_01", Type: "movie", Poster: "https://via.placeholder.com/50x75" },
    { Title: "Matrix Reloaded", Year: "2003", imdbID: "local_02", Type: "movie", Poster: "https://via.placeholder.com/50x75" },
    { Title: "Batman Begins", Year: "2005", imdbID: "local_03", Type: "movie", Poster: "https://via.placeholder.com/50x75" },
    { Title: "O Auto da Compadecida", Year: "2000", imdbID: "local_04", Type: "movie", Poster: "https://via.placeholder.com/50x75" },
    { Title: "Central do Brasil", Year: "1998", imdbID: "local_05", Type: "movie", Poster: "https://via.placeholder.com/50x75" }
];

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const titleSearchKey = searchParams.get("titleSearchKey") || "";

    // Pesquisa na base de dados local filtrando pelo título
    const filmesFiltrados = minhabasededados.filter(filme => 
        filme.Title.toLowerCase().includes(titleSearchKey.toLowerCase())
    );

    return Response.json({
        Search: filmesFiltrados,
        totalResults: filmesFiltrados.length.toString(),
        Response: "True"
    });
}