import { useState } from "react";
import data from "../src/data.json";
import JobListing from "./components/JobListing";

function App() {
    const [jobs, setJobs] = useState(data);
    let filters = [];
    data.forEach(job => {
        const tags = [...job.languages, ...job.tools];
        tags.forEach(tag => {
            if (!filters.includes(tag)) {
                filters.push(tag);
            }
        });
    });
    const [activeFilters, setActiveFilters] = useState([]);
    const filterJobs = terms => {
        console.log(terms);
    };
    const classes = {
        main: "flex flex-col items-center gap-8 bg-header-desktop bg-cyan-verylight font-body text-base",
        header: "h-40 w-full bg-cyan-default",
    };
    return (
        <div className={classes.main}>
            <header
                className={classes.header}
                style={{
                    backgroundImage: "url(/images/bg-header-desktop.svg",
                    backgroundPosition: "top left",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            ></header>
            {jobs.map(job => (
                <JobListing
                    job={job}
                    filterJobs={filterJobs}
                    setActiveFilters={setActiveFilters}
                    activeFilters={activeFilters}
                />
            ))}
        </div>
    );
}

export default App;
