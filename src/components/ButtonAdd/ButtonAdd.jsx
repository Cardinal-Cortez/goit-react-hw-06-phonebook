import { InputContacts } from "./Styled";
// import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "Redux/filterReducer";

export const Filter=()=> {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    
      const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value))
    };
    
        return (
            <InputContacts value={filter} onChange={handleChange} />
        );
    }
   
// Filter.propTypes = {
//     handleChange: PropTypes.func.isRequired,
//     filter: PropTypes.string.isRequired,
// };

