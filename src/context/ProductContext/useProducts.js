import { useContext } from 'react';

import { ProductsContext } from './ProductsProvider';

export const useProducts = () => {
	const context = useContext(ProductsContext);

	if (!context) throw new Error('Products Context cannot be used outside its Provider');

	return context;
};
