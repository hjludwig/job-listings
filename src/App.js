import { useEffect, useState } from "react";
import data from "../src/data.json";
import JobListing from "./components/JobListing";
import Filters from "./components/Filters";

function App() {
    const [jobs, setJobs] = useState(data);

    const [activeFilters, setActiveFilters] = useState([]);
    const filterJobs = terms => {
        if (terms.length === 0) {
            return;
        }

        const filteredJobs = data.filter(job => {
            const filters = [
                ...job.languages,
                ...job.tools,
                job.role,
                job.level,
            ];
            return terms.every(item => filters.includes(item));
        });
        setJobs(filteredJobs);
    };
    const classes = {
        main: "flex flex-col items-center gap-8 bg-header-desktop bg-cyan-verylight font-body text-base",
        header: "h-40 w-full bg-cyan-default",
    };

    useEffect(() => {
        filterJobs(activeFilters);
    }, [activeFilters]);
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
            <Filters activeFilters={activeFilters} />
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
