import styled from 'styled-components';

import Category from './Category';
import PriceInput from './PriceInput';

const Container = styled.div`
	flex: 1.8;
	position: sticky;
	top: 100px;
	align-self: flex-start;

	@media (max-width: 768px) {
		position: initial;
		align-self: initial;
	}
`;

const MainLeft = () => {
	return (
		<Container>
			<Category />
			<PriceInput />
		</Container>
	);
};

export default MainLeft;
