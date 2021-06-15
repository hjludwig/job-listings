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
    const classes = {
        wrapper: "w-10/12 flex justify-between items-center border p-4",
        info: "flex items-center gap-4",
        image: "",
        details: "flex",
        tags: "flex gap-8",
    };
    return (
        <div className={classes.wrapper}>
            <div className={classes.info}>
                <div className={classes.image}>
                    <img src={logo} alt={`${company} logo`} />
                </div>

                <div>
                    <h2>{company}</h2>
                    {featured && <p>Featured!</p>}
                    {job.new && <p>New!</p>}
                    <h3>{position}</h3>
                    <ul className={classes.details}>
                        <li>{postedAt}</li>
                        <li>{contract}</li>
                        <li>{location}</li>
                    </ul>
                </div>
            </div>
            <ul className={classes.tags}>
                {tags.map(tag => (
                    <li>{tag}</li>
                ))}
            </ul>
        </div>
    );
};

export default JobListing;
