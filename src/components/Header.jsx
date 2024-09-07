import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { IoIosSwitch } from 'react-icons/io';

import { useProducts } from '../context/ProductContext';

const StyledHeader = styled.header`
	height: 80px;
	padding: 20px 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: var(--color-blue);
	position: sticky;
	top: 0;
	z-index: 9;

	@media (max-width: 520px) {
		flex-direction: column;
		align-items: flex-start;
		height: auto;
		gap: 10px;
		padding-inline: 10px;
	}
`;

const HeaderTitle = styled.h2`
	color: var(--color-white);
	letter-spacing: 4px;
	font-size: 1.7rem;
`;

const HeaderSearch = styled.input`
	background: var(--color-white);
	padding: 10px;
	border-radius: 12px;

	@media (max-width: 520px) {
		flex: 1;
		padding: 15px;
	}
`;

const Switch = styled(IoIosSwitch)`
	font-size: 20px;
	cursor: pointer;
	color: var(--color-white);
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	align-self: stretch;
`;

const Header = () => {
	const { dispatchNewProducts } = useProducts();

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [darkMode]);

	return (
		<StyledHeader>
			<HeaderTitle>E-commerce Store</HeaderTitle>

			<Wrapper>
				<HeaderSearch
					onInput={(e) => dispatchNewProducts({ type: 'SEARCH_PRODUCT', payload: e.target.value })}
					placeholder="Search Products"
				/>
				<Switch onClick={() => setDarkMode((mode) => !mode)} />
			</Wrapper>
		</StyledHeader>
	);
};

export default Header;
