import { FallbackProps } from "react-error-boundary";

interface FallbackComponentProps extends FallbackProps {}

const FallbackComponent: React.FC<FallbackComponentProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-semibold text-red-600">Something went wrong</h2>
        <pre className="my-4 p-4 bg-red-50 text-red-800 rounded-md overflow-x-auto">
          {error.message}
        </pre>
        <button
          onClick={resetErrorBoundary}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FallbackComponent;