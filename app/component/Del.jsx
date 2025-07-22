'use client';

import React from 'react';
import { deleteConversation } from '../action/action';
;

const Del = ({ id }) => {
  return (
    <form action={deleteConversation}>
      <input type="hidden" name="id" value={id.toString()} />
      <button
        type="submit"
        className="text-red-400 hover:text-red-600 transition"
        aria-label="Delete"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </form>
  );
};

export default Del;
