export default function FilterBar({ categorias, categoriaAtiva, onSelectCategoria }) {
  return (
    <div className="barra-filtros" role="group" aria-label="Filtrar viagens por tipo">
      {categorias.map((cat) => {
        const estaAtivo = categoriaAtiva === cat;
        return (
          <button
            key={cat}
            type="button"
            className={`filtro ${estaAtivo ? 'filtro--ativo' : ''}`}
            aria-pressed={estaAtivo}
            onClick={() => onSelectCategoria(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}