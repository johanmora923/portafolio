import React from "react";

export const QuoteCard = ({ quote, author }) => {
    return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 max-w-md mx-auto mt-15">
        <p className="text-lg italic text-gray-700 dark:text-gray-300">
            "{quote}"
        </p>
        <div className="mt-4 flex items-center justify-end">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            - {author}
            </span>
        </div>
        </div>
    );
};
