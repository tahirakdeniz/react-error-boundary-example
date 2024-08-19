import React from 'react';
import { useErrorBoundary } from 'react-error-boundary';

const ErrorThrower = () => {

    const { showBoundary } = useErrorBoundary();


    const handleClick = () => {
        try {
            throw new Error("Button clicked! This is a deliberate error.");

        }
        catch (error) {
            showBoundary(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Welcome to the Error Test</h2>
                <p className="mb-6 text-gray-600">
                    Click the button below to trigger a deliberate error. This is for testing purposes.
                </p>
                <button
                    onClick={handleClick}
                    className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                >
                    Trigger Error
                </button>
            </div>
        </div>
    );
};

export default ErrorThrower;
