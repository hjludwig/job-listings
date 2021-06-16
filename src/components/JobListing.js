import React, { useState } from "react";
import photosnap from "../images/photosnap.svg";

const JobListing = ({ job, filterJobs, setActiveFilters, activeFilters }) => {
    const handleClick = tag => {
        setActiveFilters(prevState => [...prevState, tag]);
        filterJobs(activeFilters);
    };
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
    const classes = {
        wrapper:
            "w-10/12 flex justify-between items-center p-9 rounded bg-white shadow-cyan",
        info: "flex items-center gap-6",
        image: "",
        details: "flex gap-4 text-gray-400",
        tags: "flex gap-4",
        name: "flex items-center text-sm font-bold text-cyan-default",
        position: "text-cyan-verydark text-lg font-bold pt-2 pb-1",
        tag: "bg-cyan-light text-cyan-default px-2 pt-2 pb-1 rounded text-sm font-bold",
        new: "bg-cyan-default text-white rounded-full px-2 pt-1.5 pb-0.5 text-xs uppercase font-normal ml-4 mr-2",
        featured:
            "bg-cyan-verydark text-white rounded-full px-2 pt-1.5 pb-0.5 text-xs uppercase font-normal",
    };
    return (
        <div className={classes.wrapper}>
            <div className={classes.info}>
                <div className={classes.image}>
                    <img src={logo} alt={`${company} logo`} />
                </div>

                <div>
                    <div className={classes.name}>
                        <h2>{company}</h2>
                        {job.new && <span className={classes.new}>New!</span>}
                        {featured && (
                            <span className={classes.featured}>Featured</span>
                        )}
                    </div>

                    <h3 className={classes.position}>{position}</h3>
                    <ul className={classes.details}>
                        <li>{postedAt}</li>
                        <span aria-hidden="true">&#8226;</span>
                        <li>{contract}</li>
                        <span aria-hidden="true">&#8226;</span>
                        <li>{location}</li>
                    </ul>
                </div>
            </div>
            <ul className={classes.tags}>
                {tags.map(tag => (
                    <li>
                        <button
                            className={classes.tag}
                            onClick={() => handleClick(tag)}
                        >
                            {tag}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobListing;
