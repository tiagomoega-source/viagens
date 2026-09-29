import { useState } from 'react';
import { viagens } from './data/viagens';

import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

import './index.css';
import './App.css';

export default function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');
  const categorias = ['Todas', 'Cidade', 'Natureza', 'Praia'];

  const viagensFiltradas =
    categoriaAtiva === 'Todas'
      ? viagens
      : viagens.filter((viagem) => viagem.tipo === categoriaAtiva);

  return (
    <div className="pagina" id="inicio">
      <Header />
      <Hero />
      <Catalog
        viagens={viagensFiltradas}
        categorias={categorias}
        categoriaAtiva={categoriaAtiva}
        onSelectCategoria={setCategoriaAtiva}
      />
      <Footer />
    </div>
  );
}