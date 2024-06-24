import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 
function Filmes() {
 
    const [filmes, setFilmes] = useState([])
 
    useEffect( () =>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e")
        .then( response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])
 
    return (
        <>
        <div className="bg-white">
        <h1 className=" text-3xl p-20 pt-10 pb-10 font-bold text-jh1">Filmes</h1>
        <div className="listaFilmes flex justify-between gap-16 flex-wrap p-20 pt-0">
            {
                filmes.map(
                    filme =>(
                        <div key={filme.id} className="card-filme text-white rounded-2xl h-[300px] w-[150px] flex flex-col justify-around">
                            <img className="w-40 rounded-2xl" src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`} alt="" />
                            <h1 className="text-wrap text-center  pb-1" key={filmes}>{filme.title}</h1>
                            <Link to={`${filme.id}`} className="flex justify-center bg-jh1 text-white rounded p-5 pt-1 pb-1">Saiba Mais</Link>
                        </div>
                    )
                )
            }
        </div>
        </div>
        </>
    );
}
 
export default Filmes;