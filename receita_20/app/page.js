import Link from 'next/link'

export function Elemento() {
    return(
        <> 
        <p> Sou um elemnto jsx</p>
        </>
    );
}

export default function Home(){
    return (
        <div>
            <div>
                <h1>
                    Viva Santana!
                </h1>
                <Link href="/novarota">Rota1</Link> <br/><br/>
                <a href="/novarota">Rota 1, jeito antigo</a>
            </div>
        </div>
    )
}