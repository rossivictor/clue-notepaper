import "./App.css";
import useStore from "./store.ts";

function App() {
  const store = useStore((state) => state);
  const versionName = store.version?.name;

  return (
    <>
      <div className="card">
        <button onClick={() => store.setVersion("detetive")}>
          Detetive (clássico)
        </button>
        <button onClick={() => store.setVersion("umCrimeDesafiador")}>
          Detetive: Um Crime Desafiador
        </button>
        <button onClick={() => store.setVersion("procurandoEmHogwarts")}>
          Detetive: Procurando em Hogwarts
        </button>
      </div>

      {store.version && (
        <>
          <h1>{versionName}</h1>
          <div className="card">
            <h2>Suspeitos</h2>
            <ul>
              {store.version?.cards.suspects.map((suspect) => (
                <li key={suspect.id}>
                  <input
                    type="checkbox"
                    name={suspect.id}
                    onChange={() => store.toggleCard("suspects", suspect.id)}
                  />{" "}
                  {suspect.name}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default App;
