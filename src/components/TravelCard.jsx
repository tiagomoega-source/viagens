export default function TravelCard({ viagem }) {
  return (
    <article className="cartao">
      <img className="imagem-viagem" src={viagem.imagem} alt={viagem.destino} />
      <div className="corpo-cartao">
        <span className="etiqueta">{viagem.tipo}</span>
        <h3>{viagem.destino}</h3>
        <p className="meta">{viagem.duracao} <span aria-hidden="true">·</span> Desde {viagem.preco}</p>
      </div>
    </article>
  );
}