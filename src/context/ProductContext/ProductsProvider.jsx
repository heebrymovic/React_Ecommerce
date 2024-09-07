import { createContext, useReducer } from 'react';

export const ProductsContext = createContext();

const initialState = {
	products: [],
	storeProducts: [],
	isLoadingProducts: false,
	isError: false
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'LOADING_PRODUCTS':
			return { ...state, isLoadingProducts: true };
		case 'FETCH_PRODUCTS_SUCCESS':
			return { ...state, products: action.payload, storeProducts: action.payload, isLoadingProducts: false };
		case 'FETCH_PRODUCTS_FAILURE':
			return { ...state, isError: action.payload, isLoadingProducts: false };
		case 'PRODUCTS_SORT_BY_NAME_ASCENDING':
			return {
				...state,
				products: state.products.sort((a, b) => a.title.localeCompare(b.title)),
				storeProducts: state.storeProducts
			};
		case 'PRODUCTS_SORT_BY_NAME_DESCENDING':
			return {
				...state,
				products: state.products.sort((a, b) => b.title.localeCompare(a.title))
			};

		case 'PRODUCTS_SORT_BY_PRICE_ASCENDING':
			return {
				...state,
				products: state.products.sort((a, b) => a.price - b.price),
				storeProducts: state.storeProducts
			};
		case 'PRODUCTS_SORT_BY_PRICE_DESCENDING':
			return {
				...state,
				products: state.products.sort((a, b) => b.price - a.price)
			};

		case 'PRODUCTS_SORT_BY_RATE_ASCENDING':
			return {
				...state,
				products: state.products.sort((a, b) => a.rating.rate - b.rating.rate),
				storeProducts: state.storeProducts
			};
		case 'PRODUCTS_SORT_BY_RATE_DESCENDING':
			return {
				...state,
				products: state.products.sort((a, b) => b.rating.rate - a.rating.rate)
			};

		case 'PRODUCT_FILTER':
			return {
				...state,
				products:
					action.payload !== 'all'
						? state.storeProducts.filter((product) => product.category === action.payload)
						: state.storeProducts
			};

		case 'PRODUCT_FILTER_BY_PRICE':
			return {
				...state,
				products: state.storeProducts.filter(
					(product) => product.price >= action.payload[0] && product.price <= action.payload[1]
				)
			};

		case 'SEARCH_PRODUCT':
			return {
				...state,
				products: action.payload
					? state.storeProducts.filter((product) =>
							product.title.toLowerCase().includes(action.payload.toLowerCase())
					  )
					: state.storeProducts
			};
		default:
			return state;
	}
};

const ProductsProvider = ({ children }) => {
	const [newProducts, dispatchNewProducts] = useReducer(reducer, initialState);

	return <ProductsContext.Provider value={{ newProducts, dispatchNewProducts }}>{children}</ProductsContext.Provider>;
};

export default ProductsProvider;
