import styled from 'styled-components';
import { useState } from 'react';

import Products from './Products';
import Sorting from './Sorting';
import DisplayType from './DisplayType';

const Container = styled.div`
	flex: 6;
`;

const Display = styled.div`
	display: flex;
`;

const TitleWrapper = styled(Display)`
	justify-content: space-between;
`;

const TitleAction = styled(Display)`
	gap: 20px;
	align-items: center;
`;

const MainRight = () => {
	const [productDisplay, setProductDisplay] = useState('grid');

	return (
		<Container>
			<TitleWrapper>
				<h2>Products</h2>

				<TitleAction>
					<Sorting />
					<DisplayType productDisplay={productDisplay} setProductDisplay={setProductDisplay} />
				</TitleAction>
			</TitleWrapper>
			<Products type={productDisplay} />
		</Container>
	);
};

export default MainRight;
