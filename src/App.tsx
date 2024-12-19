import Modal from "./components/Modal";
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

  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }
  };

  return (
    <div id="app" className="min-h-screen">
      {!activeVersion && (
        <div
          className="container mx-auto p-4 py-12 overflow-x-hidden text-center"
          id="choose-version"
        >
          <h1>
            <span className="block mb-4">🎲 🕵🏻‍♂️</span>
            <em className="bg-yellow-600 block text-black -rotate-3 scale-110">
              Vamos jogar Detetive!
            </em>
          </h1>
          <p>
            Substitua as tradicionais fichas de papel utilizadas para fazer
            anotações ao jogar Detetive.
          </p>
          <p>
            Selecione uma versão do jogo para começar a marcar as cartas de
            forma digital:
          </p>
          <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 xl:grid-cols-4 mt-8">
            {Object.keys(data).map((key) => (
              <button key={key} onClick={() => setActiveVersion(key)}>
                <img src={`covers/${data[key].id}.png`} alt={data[key].name} />
                <strong>{data[key].name}</strong>
                <br />
                <span className="text-base">{data[key].examples}</span>
              </button>
            ))}
            <button onClick={() => openModal("addVersionModal")}>
              <img
                src="covers/_noVersion.png"
                alt="Adicionar versão"
                className="opacity-65"
              />
              <strong>Não achou a sua versão?</strong>
              <br />
              <span className="text-base">
                Clique aqui e a inclua para jogar!
              </span>
            </button>
          </div>
        </div>
      )}

      {activeVersion ? (
        <div className="container mx-auto p-4 py-12 overflow-x-hidden text-center">
          <div className="flex justify-between">
            <button
              className="w-auto inline-block uppercase font-bold text-white/70 mx-0 text-base"
              onClick={() => setActiveVersion(null)}
            >
              👈🏻 Voltar ao menu
            </button>
            <button
              className="w-auto inline-block uppercase font-bold text-white/70 mx-0 text-base bg-red-950"
              onClick={() => openModal("eraseConfirmationModal")}
            >
              ⚠️ Apagar marcações
            </button>
          </div>

          <h2 className="mt-16">
            <em className="bg-yellow-600 block text-black -rotate-3 scale-110">
              {activeVersion.name}
            </em>
          </h2>
          <p>{activeVersion.description}</p>

          <div className="all-categories-container">
            <div className="category-container">
              <h3>Suspeitos:</h3>
              <ul>
                {activeVersion.cards.suspects.map((suspect) => (
                  <li key={suspect.id}>
                    <button
                      className={`opacity-90 cursor-pointer ${suspect.isChecked ? "checked line-through opacity-50" : ""}`}
                      onClick={() => toggleCard("suspects", suspect.id)}
                    >
                      {suspect.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="category-container">
              <h3>Armas:</h3>
              <ul>
                {activeVersion.cards.weapons.map((weapon) => (
                  <li key={weapon.id}>
                    <button
                      className={`opacity-90 cursor-pointer ${weapon.isChecked ? "checked line-through opacity-50" : ""}`}
                      onClick={() => toggleCard("weapons", weapon.id)}
                    >
                      {weapon.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="category-container">
              <h3>Locais:</h3>
              <ul>
                {activeVersion.cards.rooms.map((room) => (
                  <li key={room.id}>
                    <button
                      className={`opacity-90 cursor-pointer ${room.isChecked ? "checked line-through opacity-50" : ""}`}
                      onClick={() => toggleCard("rooms", room.id)}
                    >
                      {room.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}

      <footer
        className="container mx-auto p-4 pb-12 overflow-x-hidden text-center"
        id="footer"
      >
        <div className="min-h-8 bg-yellow-600 text-black w-full -rotate-2 scale-110 my-6 py-2">
          <h4 className="w-5/6 mx-auto mb-0">
            Ou siga os links abaixo para outras opções:
          </h4>
        </div>

        {/* <a className="block" href="#">
            💸 Onde comprar o jogo Detetive?
          </a>
          <a className="block" href="#">
            ℹ️ Como jogar Detetive?
          </a>
          <a className="block" href="#">
            📱 Como utilizar o app para marcar as cartas?
          </a>
          <a className="block" href="#">
            💡 Dicas úteis ao jogar Detetive
          </a>
          <a className="block" href="#">
            📝 Regras oficiais do jogo Detetive
          </a> */}
        <button
          className="inline-block uppercase font-bold text-white/70 w-auto text-base"
          onClick={() => openModal("donateModal")}
        >
          🤑 Contribua com o projeto
        </button>
        <button
          className="inline-block uppercase font-bold text-white/70 w-auto text-base"
          onClick={() => openModal("addVersionModal")}
        >
          🛟 Não encontrou a versão que quer jogar?
        </button>
      </footer>

      <Modal id="eraseConfirmationModal">
        <h3>Atenção ‼️</h3>
        <p>
          Tem certeza que deseja apagar todas as marcações feitas até agora?
          Essa ação não poderá ser desfeita.
        </p>
        <button
          onClick={() => {
            resetActiveVersion();
            document
              .getElementById("eraseConfirmationModal")
              ?.classList.add("hidden");
          }}
        >
          Sim, apagar
        </button>
        <button
          onClick={() =>
            document
              .getElementById("eraseConfirmationModal")
              ?.classList.add("hidden")
          }
        >
          Cancelar
        </button>
      </Modal>

      <Modal id="donateModal">
        <h3>Contribua com o projeto</h3>
        <p>
          Se você gostou da ideia e quer ajudar a manter o projeto, você pode
          fazer uma doação de qualquer valor.
        </p>
        <p>
          <strong>PIX:</strong> 123.456.789-00
        </p>
        <p>
          <strong>PayPal:</strong>{" "}
          <a href="https://paypal.me/example" target="_blank">
            paypal.me/example
          </a>
        </p>
        <p>
          <strong>Bitcoin:</strong> 1D2C3F4G5H6J7K8L9M0N
        </p>
        <button
          onClick={() =>
            document.getElementById("donateModal")?.classList.add("hidden")
          }
        >
          Fechar
        </button>
      </Modal>

      <Modal id="addVersionModal">
        <h3>Adicionar versão</h3>
        <p>
          Para adicionar uma nova versão do jogo Detetive, envie um e-mail para{" "}
          <a href="mailto:rossivictor90@gmail.com">rossivictor90@gmail.com</a>{" "}
          com as seguintes informações:
        </p>
        <ul>
          <li>Nome da versão</li>
          <li>Descrição da versão</li>
          <li>Exemplos de cartas de suspeitos, armas e locais</li>
        </ul>
        <button
          onClick={() =>
            document.getElementById("addVersionModal")?.classList.add("hidden")
          }
        >
          Fechar
        </button>
      </Modal>
    </div>
  );
}

export default App;
