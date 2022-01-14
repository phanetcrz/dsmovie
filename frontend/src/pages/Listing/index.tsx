import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {
    //forma Correta
    const [pageNumber, setpageNumber] = useState(0);

    useEffect(() =>{
        axios.get(`${BASE_URL}/movies?size=12&page=1`)  //desta forma ele faz a requisição duas vezes
        .then(response => {
            console.log(response.data);
            const data = response.data as MoviePage;
            setpageNumber(data.number);
        })
    }, []);

    //forma errada   *******Assistir vídeo java script promise https://www.youtube.com/watch?v=7KFduI7VLOM
    // axios.get(`${BASE_URL}/movies?size=12&page=1`)  //desta forma ele faz a requisição duas vezes
    //     .then(response => {
    //         console.log(response.data);
    //         const data = response.data as MoviePage;
    //         setpageNumber(data.number);
    //     })

    return (
        <>
        <p>{pageNumber}</p>
            <Pagination />

            <div className="containet">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;