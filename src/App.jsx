import { GlobalStyles } from './styles/GlobalStyles';
import styled from 'styled-components';

import Header from './components/Header';
import MainLeft from './components/MainLeft';
import MainRight from './components/MainRight';
import { ProductsProvider } from './context/ProductContext';

const Main = styled.main`
  display: flex;
  padding: 20px 40px;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-inline: 10px;
  }
`;

const App = () => {
  return (
    <ProductsProvider>
      <GlobalStyles />
      <Header />
      <Main>
        <MainLeft />
        <MainRight />
      </Main>
    </ProductsProvider>
  );
};

export default App;
