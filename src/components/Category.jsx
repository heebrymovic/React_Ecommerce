import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useProducts } from '../context/ProductContext';

const StyledWrapper = styled.div`
	border: 1px solid var(--color-gray--1);
`;

const Title = styled.h3`
	padding: 15px 18px;
	color: var(--color-black) !important;
	background: var(--color-gray--0);
`;

const CategoryListWrapper = styled.ul`
	padding: 20px 18px;
	display: flex;
	gap: 4px;
	flex-direction: column;
`;

const CategoryList = styled.li.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !['active'].includes(prop)
})`
	cursor: pointer;
	padding: 12px 5px;
	transition: 0.5s;
	${(props) =>
		props.active &&
		css`
			background: var(--color-blue);
			color: white;
		`};

	&:hover {
		background: var(--color-blue);
		color: white;
	}
`;

const Category = () => {
	const [categories, setCategories] = useState([]);

	const [filterByCategory, setFilterByCategory] = useState('all');

	const { dispatchNewProducts } = useProducts();

	useEffect(() => {
		const fectchCategories = async () => {
			const res = await axios.get('https://fakestoreapi.com/products/categories');
			setCategories(res.data);
		};

		fectchCategories();
	}, []);

	const handleFilter = (value) => {
		setFilterByCategory(value);
		dispatchNewProducts({ type: 'PRODUCT_FILTER', payload: value });
	};

	return (
		<StyledWrapper>
			<Title>Top Categories</Title>

			<CategoryListWrapper>
				<CategoryList onClick={() => handleFilter('all')} active={filterByCategory === 'all'}>
					All
				</CategoryList>
				{categories?.map((category, ind) => (
					<CategoryList
						active={filterByCategory === category}
						onClick={() => handleFilter(category)}
						key={ind}
					>
						{category}
					</CategoryList>
				))}
			</CategoryListWrapper>
		</StyledWrapper>
	);
};

export default Category;
