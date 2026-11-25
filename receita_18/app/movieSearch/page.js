import Form from "next/form"
export async function MovieForm(){
    return (
        <div>
            <Form action="/movies">
                <div>
                    <label htmlFor="idTitleSearchKey">Título</label>
                    <input id="idTitleSearchKey" name="titleSearchKey"/>
                    <button type="submit">Pesquisar</button>
                </div>
                <div>
                    <label htmlFor="idYearSearchKey">Ano: </label>
                    <input id="idYearSearchKey" name="yearSearchKey" placeholder="Ex: 1989" />
                </div>
            </Form>
        </div>
    )
}