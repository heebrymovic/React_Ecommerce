import styled from 'styled-components';

import { useProducts } from '../context/ProductContext';

const Select = styled.select`
	width: 100%;
	padding: 10px;
	font-size: 0.9rem;
`;

const Wrapper = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const filterRange = [
	{
		range: 'All',
		value: '0 - 1000'
	},

	{
		range: '$0 - $150',
		value: '0 - 150'
	},
	{
		range: '$151 - $300',
		value: '151 - 300 '
	},
	{
		range: '$301 - $500',
		value: '301 - 500'
	},
	{
		range: '$501 - more',
		value: '500 - 1000'
	}
];

const PriceInput = () => {
	const { dispatchNewProducts } = useProducts();

	const filterProducts = (e) => {
		const [start, end] = e.target.value.split('-');

		dispatchNewProducts({ type: 'PRODUCT_FILTER_BY_PRICE', payload: [+start, +end] });
	};

	return (
		<Wrapper>
			<h3>Fixed Price</h3>
			<Select onChange={filterProducts}>
				{filterRange.map((range, ind) => (
					<option key={ind} value={range.value}>
						{range.range}
					</option>
				))}
			</Select>
		</Wrapper>
	);
};

export default PriceInput;
