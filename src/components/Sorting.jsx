import styled from 'styled-components';
import { useProducts } from '../context/ProductContext';

const Select = styled.select`
	padding: 9px 5px;
	width: 150px;
	font-size: 0.9rem;
	border-radius: 3px;
`;

const Sorting = () => {
	const { dispatchNewProducts } = useProducts();

	const handleSort = (e) => {
		if (e.target.value === 'Asc') {
			dispatchNewProducts({ type: 'PRODUCTS_SORT_BY_NAME_ASCENDING' });
		} else if (e.target.value === 'Desc') {
			dispatchNewProducts({ type: 'PRODUCTS_SORT_BY_NAME_DESCENDING' });
		} else if (e.target.value === 'Price_Asc') {
			dispatchNewProducts({ type: 'PRODUCTS_SORT_BY_PRICE_ASCENDING' });
		} else if (e.target.value === 'Price_Desc') {
			dispatchNewProducts({ type: 'PRODUCTS_SORT_BY_PRICE_DESCENDING' });
		} else if (e.target.value === 'Rate_Asc') {
			dispatchNewProducts({ type: 'PRODUCTS_SORT_BY_RATE_ASCENDING' });
		} else if (e.target.value === 'Rate_Desc') {
			dispatchNewProducts({ type: 'PRODUCTS_SORT_BY_RATE_DESCENDING' });
		}
	};

	return (
		<Select onChange={handleSort}>
			<option value="">Sort By</option>
			<option value="Asc">Sortby Name Ascending</option>
			<option value="Desc">Sortby Name Descending</option>
			<option value="Price_Asc">Sortby Price Ascending</option>
			<option value="Price_Desc">Sortby Price Descending</option>
			<option value="Rate_Asc">Sortby Rate Ascending</option>
			<option value="Rate_Desc">Sortby Rate Descending</option>
		</Select>
	);
};

export default Sorting;
