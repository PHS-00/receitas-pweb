import { Aviso } from "../aviso";

export function Teste(){
    return(
        <>
        componente de Pagetexto
        </>
    )
}

export default function Pagetexto(){
    return (
       <div>
          <h1>Page texto</h1>
          <h1>Nova sub Rota, e sub Página</h1>
          <Aviso />
       </div>
    )
}