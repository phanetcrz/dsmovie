import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {
    //forma Correta
    const [pageNumber, setpageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({    //--ESTADO QUE GUARDA A PÁGINA NA REQUISIÇÃO
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber},&sort=title`)  //desta forma ele faz a requisição duas vezes e o &sort=id garante que a busca será ordenada pelo titulo, pode usar o id e outros
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
                // console.log(response.data); teste
            })
    }, [pageNumber]);  //--quando mudar o pageNumber, vai executar o useEffect novamente 

    //forma errada   *******Assistir vídeo java script promise https://www.youtube.com/watch?v=7KFduI7VLOM
    // axios.get(`${BASE_URL}/movies?size=12&page=1`)  //desta forma ele faz a requisição duas vezes
    //     .then(response => {
    //         console.log(response.data);
    //         const data = response.data as MoviePage;
    //         setpageNumber(data.number);
    //     })

    return (
        <>
            <Pagination />

            <div className="containet">
                <div className="row">
                    {page.content.map(movie => (  //-- o content.map tem a mesma funcionalidade do For
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    );
}

export default Listing;