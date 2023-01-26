import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/Contacts/selector';
import { setFilter } from '../../redux/Contacts/filterSlice';


export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handlerFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Find user by name
      <input
        type="text"
        name="name"
        value={filter}
        onChange={handlerFilter}
      />
    </label>
  );
}