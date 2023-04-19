import lavanda from './Images/lavanda_1.webp';
import geranio from './Images/geranio_1.webp';
import alecrim from './Images/alecrim_1.webp';
import hortela from './Images/hortela_1.webp';
import melaleucagrande from './Images/melaleucagrande_1.webp';
import laranja from './Images/laranja_1.webp';
import eucalipto from './Images/eucalipto_1.webp';
import bergamota from './Images/bergamota_1.webp';
import lavandapequena from './Images/lavandapequena_1.webp';
import melaleucapequena from './Images/melaleucapequena_1.webp';
import limao from './Images/limao_1.webp';
import lemongrass from './Images/lemongrass_1.webp';
import olibano from './Images/olibano_1.webp';
import cravo from './Images/cravo_1.webp';
import salvia from './Images/salvia_1.webp';

import './App.css';
import Header from './Components/Header';
import MainTop from './Components/MainTop';
import MainMiddle from './Components/MainMiddle';
import MainBottom from './Components/MainBottom';
import Footer from './Components/Footer';
import Lemon from './Components/Lemon';

function App() {
  return (
    <main className="App">
      <Header />
      <MainTop />

      <section className='rows'>
        <MainMiddle imagem={lavanda} tipo="Lavanda" quantidade="10ml" preco1="R$60,00" preco2="R$20,00" />
        <MainMiddle imagem={geranio} tipo="Gerânio" quantidade="5ml" preco1="R$44,00" preco2="R$14,66" />
        <MainMiddle imagem={alecrim} tipo="Alecrim (qt. Cineol)" quantidade="10ml" preco1="R$37,00" preco2="R$12,33" />
        <MainMiddle imagem={hortela} tipo="Hortelã-Pimenta (Menta)" quantidade="10ml" preco1="R$52,00" preco2="R$17,33" />
      </section>

      <section className='rows'>
        <MainMiddle imagem={melaleucagrande} tipo="Melaleuca (Tea Tree)" quantidade="10ml" preco1="R$50,00" preco2="R$16,66" />
        <MainMiddle imagem={laranja} tipo="Laranja (Orgânico)" quantidade="10ml" preco1="R$26,00" preco2="R$8,66" />
        <MainMiddle imagem={eucalipto} tipo="Eucalipto Globulus" quantidade="10ml" preco1="R$35,20" preco2="R$11,73" />
        <MainMiddle imagem={bergamota} tipo="Bergamota" quantidade="5ml" preco1="R$40,00" preco2="R$13,33" />
      </section>

      <section className='rows'>
        <MainMiddle imagem={melaleucapequena} tipo="Melaleuca (Tea Tree)" quantidade="5ml" preco1="R$39,20" preco2="R$13,06" />
        <MainMiddle imagem={lavandapequena} tipo="Lavanda (gt. França)" quantidade="5ml" preco1="R$47,02" preco2="R$15,67" />
        <Lemon imagem={limao} tipo="Limão-Tahiti" quantidade="10ml" preco1="R$34,20" preco2="R$11,40" />
        <MainMiddle imagem={lemongrass} tipo="Lemongrass (Orgânico)" quantidade="10ml" preco1="R$39,00" preco2="R$13,00" />
      </section>

      <section className='rows'>
        <MainMiddle imagem={olibano} tipo="Olíbano" quantidade="5ml" preco1="R$84,00" preco2="R$28,00" />
        <MainMiddle imagem={cravo} tipo="Cravo" quantidade="10ml" preco1="R$38,00" preco2="R$12,66" />
        <MainMiddle imagem={salvia} tipo="Sálvia Esclareia" quantidade="5ml" preco1="R$51,20" preco2="R$17,06" />
        <MainMiddle imagem={hortela} tipo="Hortelã-Pimenta (Menta)" quantidade="10ml" preco1="R$52,00" preco2="R$17,33" />
      </section>

      <MainBottom />

      <Footer />
    </main>
  );
}

export default App;
