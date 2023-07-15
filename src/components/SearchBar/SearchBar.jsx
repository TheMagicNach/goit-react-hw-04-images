import { useState  } from "react";
import { SearchBarStyled } from './SearchBar.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SearchBar ({onSubmit}){
   const [query, setQuery] = useState('');


 const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };
 const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Write something');
      return;
    }
    onSubmit(query);
    setQuery("")
  }

  

    return (
      <SearchBarStyled>
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button" >
          <span className="button-label">Search</span>
          </button>
          
          <input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
      </form>
      </SearchBarStyled>
    )
  
}


SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
