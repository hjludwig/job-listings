import React from "react";

const Filters = ({ activeFilters }) => {
    return (
        <div>
            <ul>
                {activeFilters.map(filter => (
                    <li>{filter}</li>
                ))}
            </ul>
        </div>
    );
};

export default Filters;
