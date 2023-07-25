import { Number, Item, Name, ButtonDel } from "./styled";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "Redux/contactsReducer";

export const Todo = ({ id, name, number}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      <Item>
        <Name>{name}</Name>
        <Number>{number}</Number>
        <ButtonDel onClick={handleDelete}>Delete</ButtonDel>
      </Item>
    </ul>
  );
};

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};