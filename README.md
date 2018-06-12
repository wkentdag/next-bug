# Next Bug Repo

Demonstrating a bug when using dynamic routing and static export.
I encountered this bug while setting up a project that has one page, `index.js`,
with different routes like `/about` triggering pop-up modals.
I want to export the other routes as static so I can host on an S3 bucket and have SEO for each page.

## To Reproduce

`npm i`

1.  `npm start` and point your browser to [localhost:3000](http://localhost:3000) and click on the different routes
  * expected: route updates, "active section is {{ section }}" updates
  * actual: nothing happens
2. navigate to a subpage directly, without using a link, i.e. clicking [here](http://localhost:3000/about). Routing works normally now o_O
3. run `npm run export && npm run serve` and point your browser to [localhost:3000](http://localhost:3000) to check out the static build. In this context, routing works as expected as too.
4. To verify that `exportPathMap` is the source of the problem, comment it out in `next.config.js` and redo step 1, note that the expected outcome occurs now.
