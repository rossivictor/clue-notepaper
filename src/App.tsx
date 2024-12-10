import "./App.css";
import useStore from "./store";

function App() {
  const {
    data,
    activeVersionId,
    setActiveVersion,
    toggleCard,
    resetActiveVersion,
  } = useStore((state) => state);

  const activeVersion = activeVersionId ? data[activeVersionId] : null;

  return (
    <div>
      {!activeVersion && (
        <>
          <h1>
            <span className="block mb-4">🎲 🕵🏻‍♂️</span>
            Vamos jogar Detetive!
          </h1>
          <p>
            Esse site é uma útil ferramenta aos amantes dos jogos de tabuleiro
            que substitui as tradicionais fichas de papel utilizadas para fazer
            anotações ao jogar Detetive (ou Clue, no original).
          </p>
          <p>Selecione uma versão do jogo para começar a marcar as cartas:</p>
          <div className="py-4">
            {Object.keys(data).map((key) => (
              <button
                className="mb-4"
                key={key}
                onClick={() => setActiveVersion(key)}
              >
                <strong>{data[key].name}</strong>
                <br />
                <span className="text-xs">{data[key].examples}</span>
              </button>
            ))}
          </div>

          <p>Ou siga nossos links para mais opções:</p>
          <a className="text-sm inline-block" href="#">
            💸 Onde comprar o jogo Detetive?
          </a>
          <a className="text-sm inline-block" href="#">
            ℹ️ Como jogar Detetive?
          </a>
          <a className="text-sm inline-block" href="#">
            📱 Como utilizar o app para marcar as cartas?
          </a>
          <a className="text-sm inline-block" href="#">
            💡 Dicas úteis ao jogar Detetive
          </a>
          <a className="text-sm inline-block" href="#">
            📝 Regras oficiais do jogo Detetive
          </a>
          <a className="text-sm inline-block" href="#">
            🛟 Não encontrou a versão que quer jogar?
          </a>
          <a className="text-sm inline-block" href="#">
            🤑 Contribua com o projeto
          </a>
        </>
      )}

      {activeVersion ? (
        <div>
          <button onClick={() => setActiveVersion(null)}>👈🏻 Voltar</button>

          <h2>{activeVersion.name}</h2>
          <p>{activeVersion.description}</p>

          <div className="categories-container">
            <div>
              <h3>Suspeitos:</h3>
              <ul>
                {activeVersion.cards.suspects.map((suspect) => (
                  <li
                    key={suspect.id}
                    style={{
                      textDecoration: suspect.isChecked
                        ? "line-through"
                        : "none",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleCard("suspects", suspect.id)}
                  >
                    {suspect.name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Armas:</h3>
              <ul>
                {activeVersion.cards.weapons.map((weapon) => (
                  <li
                    key={weapon.id}
                    style={{
                      textDecoration: weapon.isChecked
                        ? "line-through"
                        : "none",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleCard("weapons", weapon.id)}
                  >
                    {weapon.name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Locais:</h3>
              <ul>
                {activeVersion.cards.rooms.map((room) => (
                  <li
                    key={room.id}
                    style={{
                      textDecoration: room.isChecked ? "line-through" : "none",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleCard("rooms", room.id)}
                  >
                    {room.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button onClick={resetActiveVersion}>⚠️ Apagar marcações</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
