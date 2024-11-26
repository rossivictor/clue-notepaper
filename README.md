# Clue Notepaper 📝

A modern, digital notepad for fans of the classic board game **Clue** (known as **Cluedo** in many countries and as **Detetive** in 🇧🇷). Keep track of your deductions, organize your cards, and reset everything easily to start a new game!

## 🎯 Purpose

This app replaces the traditional detective notepad with a sleek, digital version. Effortlessly mark the cards you’ve seen, organize suspects, weapons, and rooms, and stay focused on solving the mystery!

## 🌐 Live Demo

Check out the live version here: [clue-notepaper](https://detetive.app.br)

## ✨ Features

- **Game version selection**: Choose from the Brazilian versions of Detetive:
  - Detetive Clássico
  - Um Crime Desafiador
  - Procurando em Hogwarts
- **Digital tracking**: Mark and organize seen cards by categories (suspects, weapons, rooms).
- **Auto-sorting**: Cards marked as seen are automatically moved to the bottom.
- **Progress persistence**: Game state is saved and restored using LocalStorage.
- **Reset functionality**: Start fresh with a single click.
- **Future updates**: Support for international versions (Clue and Cluedo) will be added soon!

## ⚙️ Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or later)
- npm or yarn (package managers)

## 🛠️ Running the Project

Follow these steps to run the project locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/clue-notepaper.git
   ```
2. Navigate to the project directory:
   ```bash
   cd clue-notepaper
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## 🚀 Technologies Used

- **React**: For building the user interface.
- **Zustand**: For lightweight and scalable state management.
- **Vite**: For fast and efficient development.
- **TypeScript**: For type-safe and maintainable code.
- **LocalStorage**: For persisting game data.

## 🤝 Contributing

Contributions are welcome! If you’d like to collaborate, you’ll find several **Milestones** and **Issues** already created to guide development. Feel free to pick an issue, suggest improvements, or even propose new features.

1. Fork the repository.
2. Create a new branch for your feature/bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push:
   ```bash
   git commit -m "Add feature-name"
   git push origin feature-name
   ```
4. Open a Pull Request describing your changes.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
