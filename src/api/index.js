import {requests} from '../utils/requests';

export const getTopRatedMovies = () => requests.get('/movie/top_rated');
