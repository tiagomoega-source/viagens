import FilterBar from './FilterBar';
import TravelCard from './TravelCard';

export default function Catalog({ viagens, categorias, categoriaAtiva, onSelectCategoria }) {
  const totalViagens = viagens.length;
  const textoContagem = `${totalViagens} ${totalViagens === 1 ? 'viagem' : 'viagens'}`;

  return (
    <main>
      <section className="catalogo" id="destinos" aria-labelledby="titulo-destinos">
        <div className="topo-secao">
          <div>
            <p className="sobre-titulo">ESCOLHE O TEU RITMO</p>
            <h2 id="titulo-destinos">Destinos para descobrir</h2>
          </div>
          <p className="contagem">{textoContagem}</p>
        </div>
        <FilterBar categorias={categorias} categoriaAtiva={categoriaAtiva} onSelectCategoria={onSelectCategoria} />
        <div className="grelha">
          {viagens.map((viagem) => (
            <TravelCard key={viagem.id} viagem={viagem} />
          ))}
        </div>
      </section>
    </main>
  );
}
