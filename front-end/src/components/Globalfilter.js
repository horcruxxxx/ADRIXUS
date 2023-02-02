import React, { useState } from 'react';

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className="searchbar">
      Search:{' '}
      <input
        value={filter || ''}
        onChange={e => {
            setFilter(e.target.value);
        }}
      />
    </span>
  )
}