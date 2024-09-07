import styled, { css } from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import { TailSpin } from 'react-loading-icons';

import Rating from './Rating';
import { useProducts } from '../context/ProductContext';

const ProductWrapper = styled.div.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !['type'].includes(prop)
})`
	display: grid;
	grid-template-columns: ${(prop) => (prop.type === 'grid' ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)')};
	gap: 30px;
	margin-top: 20px;

	@media (min-width: 981px) {
		& > div {
			${(prop) =>
				prop.type === 'list' &&
				css`
					padding: 12px;
					display: flex;
					align-items: center;
					flex-direction: row;
				`};
		}
	}

	@media (max-width: 980px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 480px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const ProductImg = styled.img`
	width: 80%;
	object-fit: contain;
	margin-inline: auto;
	height: 230px;

	@media (max-width: 768px) {
		height: auto;
	}
`;

const ProductTitle = styled.h4`
	color: var(--color-blue);
	text-align: justify;
	line-height: 1.5rem;
`;

const ProductDesc = styled.div`
	font-size: 0.95rem;
	line-height: 1.2rem;
`;

const ProductPrice = styled.p`
	font-weight: 600;
`;

const Display = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const ProductList = styled(Display)`
	border: 1px solid var(--color-gray--1);
	border-radius: 5px;
	overflow: hidden;
`;

const StyledProductDescription = styled(Display)`
	padding: 10px 20px;
`;

const SpinnerWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const ErrorMessage = styled.p`
	color: var(--color-error);
	font-size: 2rem;
`;

const Products = ({ type }) => {
	const { newProducts, dispatchNewProducts } = useProducts();

	const { isLoadingProducts, products, isError } = newProducts;

	useEffect(() => {
		const fectchProducts = async () => {
			try {
				dispatchNewProducts({ type: 'LOADING_PRODUCTS' });
				const res = await axios.get('https://fakestoreapi.com/products');

				dispatchNewProducts({ type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data });
			} catch (err) {
				dispatchNewProducts({ type: 'FETCH_PRODUCTS_FAILURE', payload: err.message });
			}
		};

		fectchProducts();
	}, []);

	return (
		<>
			{isLoadingProducts && (
				<SpinnerWrapper>
					<TailSpin width={90} height={90} stroke="var(--color-blue)" speed={0.75} />
				</SpinnerWrapper>
			)}
			{isError && <ErrorMessage>Failed to fetch products. {isError}</ErrorMessage>}
			{!isLoadingProducts && !isError && (
				<ProductWrapper type={type}>
					{products?.map((product) => (
						<ProductList key={product.id}>
							<ProductImg src={product.image} />

							<StyledProductDescription>
								<ProductTitle>{product.title}</ProductTitle>
								<ProductDesc>{product.description}</ProductDesc>
								<Rating total={product.rating.rate} />
								<ProductPrice>${product.price}</ProductPrice>
							</StyledProductDescription>
						</ProductList>
					))}
				</ProductWrapper>
			)}
		</>
	);
};

export default Products;
