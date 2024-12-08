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
      <h1>Clue Notepaper</h1>

      {/* Botões para selecionar a versão */}
      <div>
        {Object.keys(data).map((key) => (
          <button key={key} onClick={() => setActiveVersion(key)}>
            {data[key].name}
          </button>
        ))}
      </div>

      {/* Exibe os dados da versão ativa */}
      {activeVersion ? (
        <div>
          <h2>{activeVersion.name}</h2>
          <p>{activeVersion.description}</p>

          <h3>Suspects:</h3>
          <ul>
            {activeVersion.cards.suspects.map((suspect) => (
              <li
                key={suspect.id}
                style={{
                  textDecoration: suspect.isChecked ? "line-through" : "none",
                  cursor: "pointer",
                }}
                onClick={() => toggleCard("suspects", suspect.id)}
              >
                {suspect.name}
              </li>
            ))}
          </ul>

          <button onClick={resetActiveVersion}>Reset Progress</button>
        </div>
      ) : (
        <p>Please select a version to start.</p>
      )}
    </div>
  );
}

export default App;
