import React, { useState } from "react";
import photosnap from "../images/photosnap.svg";

const JobListing = ({ job }) => {
    let image;
    const {
        id,
        company,
        logo,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
    } = job;

    const tags = [level, role, ...tools, ...languages];
    return (
        <div>
            <h2>{company}</h2>
            {featured && <p>Featured!</p>}
            {job.new && <p>New!</p>}
            <h3>{position}</h3>
            <img src={logo} alt={`${company} logo`} />

            <ul>
                <li>{postedAt}</li>
                <li>{contract}</li>
                <li>{location}</li>
            </ul>
            <ul>
                {tags.map(tag => (
                    <li>{tag}</li>
                ))}
            </ul>
        </div>
    );
};

export default JobListing;
