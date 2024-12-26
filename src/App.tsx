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

  function copyPixCode(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    const pixKey = "64f08341-7abO-4f5a-9bde-bea6af131231";
    navigator.clipboard
      .writeText(pixKey)
      .then(() => {
        alert("Chave Pix copiada para a área de transferência!");
      })
      .catch((err) => {
        console.error("Erro ao copiar a chave Pix: ", err);
      });
  }

  function goToPayPal(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    window.open(
      "https://www.paypal.com/donate/?business=7959XBD9WJ64S&no_recurring=0&item_name=Que+legal+que+voc%C3%AA+est%C3%A1+disposto+a+colaborar+com+o+projeto%21+%F0%9F%98%80%0AEu+e+os+demais+usu%C3%A1rios+agradecemos+de+cora%C3%A7%C3%A3o%21+%F0%9F%AB%B6%F0%9F%8F%BB&currency_code=BRL",
      "_blank"
    );
  }

  function copyBitcoinCode(event: React.MouseEvent<HTMLButtonElement>): void {
    const bitcoinCode = "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX";
    navigator.clipboard
      .writeText(bitcoinCode)
      .then(() => {
        alert("Endereço Bitcoin copiado para a área de transferência!");
      })
      .catch((err) => {
        console.error("Erro ao copiar o endereço Bitcoin: ", err);
      });
  }

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
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSclylraQOjWLH-kmS7KaL2JejCgNvJlm3I0tzfmtgwaKhzAmw/viewform?usp=dialog"
                )
              }
            >
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
          className="inline-block me-4 uppercase font-bold text-white/70 w-auto text-base"
          onClick={() => openModal("donateModal")}
        >
          🤑 Contribua com o projeto
        </button>
        <button
          className="inline-block me-4 uppercase font-bold text-white/70 w-auto text-base"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSclylraQOjWLH-kmS7KaL2JejCgNvJlm3I0tzfmtgwaKhzAmw/viewform?usp=dialog"
            )
          }
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
          className="mb-2"
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
          className="mb-2"
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
        <button className="donate-btn" onClick={copyPixCode}>
          <img src="donate/logo-pix.png" alt="Pix" width={80} height={80} />
        </button>
        <button className="donate-btn" onClick={goToPayPal}>
          <img
            src="donate/logo-paypal.png"
            alt="PayPal"
            width={80}
            height={80}
          />
        </button>
        <button className="donate-btn" onClick={copyBitcoinCode}>
          <img
            src="donate/logo-bitcoin.png"
            alt="Bitcoin"
            width={80}
            height={80}
          />
        </button>
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
