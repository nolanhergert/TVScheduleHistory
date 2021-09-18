# TV Schedule History
https://nolanhergert.github.io/TVScheduleHistory/

A fast way to browse what times shows were on T.V. in the past!
  * Note: It only has a limited lifetime of use, since the folks that care about it are dwindling. For the young folks there's YouTube and Netflix!

## The Experimental Side
  * Determine good ways to expose known data for relevant queries. For a query of "What aired on Tuesday night at 7:30 in 1965 on NBC", the answer by the search engine should be clear, right up top ("My Mother the Car", see https://en.wikipedia.org/wiki/1965%E2%80%9366_United_States_network_television_schedule). We have the data and can answer the question, but I think ultimately a search engine should answer this question itself.
    * Try entering in the form of an FAQ page for each question: https://developers.google.com/search/docs/advanced/structured-data/faqpage
       * Appropriate to show both the question and answer already expanded.
       * Not appropriate to use Q&A page since users can't submit additional answers.
    * Instead of answering the direct query, we will take the route of generating all possible search queries and answers based on the data we have. A lot easier problem, and hopefully helpful.
  * Expose more useful but complicated queries like "what was on tv at 7pm in the 60s"
  * See if we can get a random website that has user's queries nearly exactly typed with good answers to rank highly on Google!

## Todo
  * Sitemap.html maybe shouldn't have 1000s of links? Do like NYTimes does? I wish I could use sitemap.xml, but Google didn't like my urls.

## Data sources
  * TV Maze! CC-BY-CA too! http://api.tvmaze.com/shows/3853/episodes. However, it doesn't say the network!
  * Wikipedia
    * 1965 primetime: https://en.wikipedia.org/wiki/1965%E2%80%9366_United_States_network_television_schedule
    * 1965 daytime: https://en.wikipedia.org/wiki/1965%E2%80%9366_United_States_network_television_schedule_(daytime)