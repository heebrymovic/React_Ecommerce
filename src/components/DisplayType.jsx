import styled, { css } from 'styled-components';

import { LuLayoutGrid } from 'react-icons/lu';
import { CiCircleList } from 'react-icons/ci';

const Display = styled.div`
	display: flex;
`;

const Wrapper = styled(Display)`
	border: 1px solid var(--color-gray--2);
	@media (max-width: 980px) {
		display: none;
	}
`;

const DisplayBox = styled(Display).withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !['active'].includes(prop)
})`
	padding: 8px;
	font-size: 1.3rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	${(props) =>
		props.active &&
		css`
			background: var(--color-blue);
			color: white;
		`};
`;

const DisplayType = ({ productDisplay, setProductDisplay }) => {
	return (
		<Wrapper>
			<DisplayBox active={productDisplay === 'grid'} onClick={() => setProductDisplay('grid')}>
				<LuLayoutGrid />
			</DisplayBox>
			<DisplayBox active={productDisplay === 'list'} onClick={() => setProductDisplay('list')}>
				<CiCircleList />
			</DisplayBox>
		</Wrapper>
	);
};

export default DisplayType;
