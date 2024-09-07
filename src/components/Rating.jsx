import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const StyledStar = styled(FaStar)`
	fill: red;
`;

const Wrapper = styled.div`
	display: flex;
	gap: 8px;
	font-size: 1.2rem;
	align-items: center;
	& p {
		font-size: 1.2rem;
	}
`;

const Rating = ({ total = 5 }) => {
	return (
		<Wrapper>
			<StyledStar />
			<p>{total} </p>
		</Wrapper>
	);
};

export default Rating;
