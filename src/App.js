import { useState } from "react";
import data from "../src/data.json";
import JobListing from "./components/JobListing";

function App() {
    const [jobs, setJobs] = useState(data);
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
                <JobListing job={job} />
            ))}
        </div>
    );
}

export default App;
