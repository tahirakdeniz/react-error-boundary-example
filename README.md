
# React + TypeScript + Vite

This project is a minimal setup for a React application built with TypeScript and Vite. It includes Hot Module Replacement (HMR), basic ESLint rules, and demonstrates the usage of React Router, error boundaries, and simple state management.

## Features

- **React with TypeScript**: Strongly typed components and state management.
- **Vite**: Fast build tool that enhances the development experience with HMR and lightning-fast dev server.
- **ESLint**: Integrated with TypeScript to ensure code quality and consistency.
- **React Router**: Basic routing example included with home, counter, and error-throwing components.
- **Error Boundaries**: Handle unexpected errors gracefully with a custom fallback UI.

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine. You can check this by running:

```bash
node -v
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/tahirakdeniz/react-error-boundary-example.git
```

2. Navigate to the project directory:

```bash
cd your-repo-name
```

3. Install the dependencies:

```bash
npm install
```

### Running the Project

To start the development server, use:

```bash
npm run dev
```

Vite will start the server, and you can view your application in the browser by navigating to `http://localhost:3000`.

### Building for Production

To create a production build, run:

```bash
npm run build
```

This will generate static assets in the `dist` directory.

## Project Structure

- **src/**
  - **components/**: Contains all React components.
    - `Counter.tsx`: A simple counter component with state management.
    - `ErrorThrower.tsx`: A component with a button that deliberately throws an error.
    - `FallbackComponent.tsx`: A custom fallback UI for handling errors.
    - `Home.tsx`: The home page with navigation links to other pages.
  - **App.tsx**: Main application component that includes routing and error boundaries.
  - **main.tsx**: Entry point for the React application.
- **public/**: Contains static assets.
- **vite.config.ts**: Vite configuration file.

## Expanding the ESLint Configuration

If you're working on a production application, it's recommended to update the ESLint configuration for better type checking:

1. Update the top-level `parserOptions` property:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.

3. Optionally, add `...tseslint.configs.stylisticTypeChecked`.

4. Install `eslint-plugin-react` and update the configuration:

```js
import react from 'eslint-plugin-react';

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

## Components Overview

### `Counter.tsx`

A basic counter component that increases, decreases, and resets a count value. The component throws an error if the count exceeds 5 to demonstrate error boundaries.

### `ErrorThrower.tsx`

This component has a button that, when clicked, deliberately throws an error. It's used to demonstrate how errors can be caught and handled using React's error boundaries.

### `FallbackComponent.tsx`

A custom fallback UI that is displayed when an error occurs in a child component. It shows the error message and provides a button to reset the error boundary.

### `Home.tsx`

The landing page with navigation links to the `Counter` and `ErrorThrower` components. The buttons are styled using Tailwind CSS.

## License

This project is not licensed.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Error Boundary](https://github.com/bvaughn/react-error-boundary)
