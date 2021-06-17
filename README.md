# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Filter job listings based on the categories

### Screenshot

![](.images/screenshot.png)

### Links

-   Solution URL: [Add solution URL here](https://your-solution-url.com)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   [React](https://reactjs.org/) - JS library
-   [Tailwind](https://tailwindcss.com/) - For styles

### What I learned

I'm starting to get more used to the Tailwind CSS work flow. I had been previously mostly using Styled Components in my React projects. I liked that I could just write straight CSS, which I'm quite familiar with already.

Also I had to reach for a new to me array method (.every()) in order to filter the results. I needed to show only results that had every filter term in its list of tags.

My filtering function below. It takes in a set of terms (the filters that the user has selected) and compares them to filter the list of jobs via the .filter() method. It does this by comparing the array of filter terms from the user against the list of tags associated with the job listing currently being compared. If every term is in the list of tags, it evaluates to true and the job is returned to the filter function and added to the new array. The state variable is then updated with that new array of jobs and a rerender is triggered.

```js
const filterJobs = terms => {
    if (terms.length === 0) {
        return;
    }

    const filteredJobs = data.filter(job => {
        const tags = [...job.languages, ...job.tools, job.role, job.level];
        return terms.every(term => tags.includes(term));
    });
    setJobs(filteredJobs);
};
```

## Author

-   Website - [Jeremy Ludwig](https://webdev.jeremyludwig.com/)
-   Frontend Mentor - [@hjludwig](https://www.frontendmentor.io/profile/hjludwig)
