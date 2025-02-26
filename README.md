# Pokémon Explorer

Pokémon Explorer is a web application that allows users to explore a list of Pokémon and view detailed information about each one. The app fetches Pokémon data from the PokeAPI and provides an interactive experience for users to view Pokémon stats, abilities, types, and more.

## Features

- Browse a list of Pokémon.
- View detailed information about each Pokémon, including:
 - Types
 - Stats
 - Abilities
 - Physical attributes (height, weight)
 - Pokémon sprite images
- Interactive UI with loading indicators and error handling.
- Data fetched server-side to ensure fast performance and up-to-date content.

## Tech Stack

- React (for the frontend UI)
- Next.js (for server-side data fetching)
- Tailwind CSS (for styling)
- PokeAPI (for Pokémon data)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

```git clone https://github.com/yourusername/pokemon-explorer.git```

2. Navigate to the project directory:

```cd pokemon-explorer```
3. Install the dependencies:


```npm install```
4. Start the development server:


```npm run dev```

5. Open your browser and visit http://localhost:3000 to view the application.

## Folder Structure

```
├── components/
│   ├── PokemonList.js         # Component to display list and details of Pokémon
├── pages/
│   ├── index.js               # Main page that fetches and displays Pokémon
├── public/                     # Static assets like images
├── styles/                     # Tailwind CSS configuration
├── package.json                # Project dependencies and scripts
└── README.md                   # This file
```

## How It Works

### Data Fetching:
The Home component fetches a list of Pokémon from the PokeAPI on the server-side. The `next: { revalidate: 3600 }` option is used for caching and revalidation to ensure data is refreshed every hour.

### Displaying Pokémon:
The Pokémon list is displayed using the PokemonList component, which receives the data as props. It shows a scrollable list of Pokémon names, and clicking on a name fetches more detailed data for that Pokémon.

### Displaying Pokémon Details:
Once a Pokémon is selected, the application fetches additional details (like stats, abilities, types, etc.) and displays them on the right side of the screen. A loading spinner is shown while the details are being fetched.

### Error Handling:
If there's an error fetching the data (either the list or individual Pokémon details), the application shows a friendly error message.

## Running the Application

After following the installation steps, the app will run in development mode. You can interact with the Pokémon list, click on any Pokémon name to load its details, and view stats, abilities, and other relevant information.

## Example UI

- **Pokémon List Section**: A scrollable list of Pokémon names that users can click to view more details.
- **Pokémon Details Section**: Displays detailed information about the selected Pokémon, such as its type, stats, abilities, and more, with a nice responsive layout.

## Contributions

Contributions are welcome! Feel free to fork this repository and submit pull requests with improvements, bug fixes, or new features.

Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- PokeAPI for providing the Pokémon data.
- Next.js for server-side rendering and routing.
- React for building the interactive user interface.
- Tailwind CSS for the styling framework.

## Contact

If you have any questions, feel free to reach out to me via GitHub or email.