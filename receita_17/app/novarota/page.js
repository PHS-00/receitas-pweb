import { MariaPrea } from "./componentes";
import { Teste } from "./pagetexto/page";

export default function NovaRotaHome(){
    return (
       <div>
          <h1>Nova Rota, Nova Página</h1>
          <MariaPrea mensagem={"Morreu maria prea"}/>
          <MariaPrea mensagem={"Teste de paramentro usado o componete MariaPrea"}/>
          <Teste />
       </div>
    )
}