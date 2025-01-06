
export default function Header() {
    return (
        <header className="flex items-center justify-center gap-10 p-4 shadow-[-10px_-4px_6px_0px_rgba(0,_0,_0,_0.1)]">
            <span className="poppins-bold text-[1.6rem] text-white font-bold  hidden md:block ">Transit</span>
            <nav className="p-2 w-[500px] flex items-center justify-center rounded-md bg-slate-50 shadow-[-10px_-4px_6px_0px_rgba(0,_0,_0,_0.1)]">
                <ul className="flex gap-10">
                    <li>Inicio</li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li>Clientes</li>
                </ul>
            </nav>

            <button className="bg-gradient-to-b  hidden md:block from-purple-800 to-purple-500 p-2 rounded-md shadow-[-10px_-4px_6px_0px_rgba(0,_0,_0,_0.1)] text-white font-bold w-[110px] poppins-semibold">Comprar</button>
        </header>
    )
}