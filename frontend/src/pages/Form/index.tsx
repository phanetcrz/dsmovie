import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function Form() {

    const params = useParams();  //--Utilizado para pegar o número da pagina na requisiçao do navegador

    return (
        <FormCard movieId={`${params.movieId}`}/>
    );
}

export default Form;