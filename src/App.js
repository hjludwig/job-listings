import { useState } from "react";
import data from "../src/data.json";
import JobListing from "./components/JobListing";

function App() {
    const [jobs, setJobs] = useState(data);
    const classes = {
        main: "flex flex-col items-center gap-8",
    };
    return (
        <div className={classes.main}>
            {jobs.map(job => (
                <JobListing job={job} />
            ))}
        </div>
    );
}

export default App;
