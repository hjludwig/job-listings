import { useState } from "react";
import data from "../src/data.json";
import JobListing from "./components/JobListing";

function App() {
    const [jobs, setJobs] = useState(data);

    return (
        <div>
            {jobs.map(job => (
                <JobListing job={job} />
            ))}
        </div>
    );
}

export default App;
