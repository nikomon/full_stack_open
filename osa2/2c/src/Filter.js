import React, { useState, useEffect } from 'react';

export const Filter = ({ updateFilter }) => {
    const [filterValue, setFilterValue] = useState("");
    useEffect(() => {
        updateFilter(filterValue.toLowerCase());
    }, [filterValue])
    return (
        <form>
        <div>
          Filter shown with: <input value={filterValue} onChange={(event) => setFilterValue(event.target.value)}/>
        </div>
        <div>
        </div>
      </form>
    );
}