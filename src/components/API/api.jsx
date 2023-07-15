import axios from "axios";

export const FetchApi = async (query, page) => {
  const API_KEY = '38237571-80c20288744cb1362c11cb8f8'
  const perPage = 12;
  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.message)
  }
}