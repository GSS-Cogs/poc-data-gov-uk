# poc-data-gov-uk

This proof of concept was made to prove the idea of content negotation as a form of data API. It uses [Next.js](https://nextjs.org/).

The journey would essentially be:

- a user wanting to access some data would navigate through the service
- they would look at dataset pages, such as `http://localhost:3000/dataset/greenhouse-gas-emissions`, which gives a preview of the data
- they could use that URL to quickly GET the data in a format of their choice, such as CSV, JSON, or RDF.

## Running the app

Docker compose is used to run the app. It will start the Next.js app, a small nginx server and a triple store.

```
docker compose up
```

Many of the pages are hardcoded in some way. Most of the interactions aren't implemented. The main ones are:

- [Homepage](http://localhost:3000/)
- [Search](http://localhost:3000/search)
- [Greenhouse gas emissions dataset](http://localhost:3000/dataset/greenhouse-gas-emissions)

When running the app, you can access the data by using the page's URL and sending an `Accept` header with the request. I've only implemented CSV.

```
curl http://localhost:3000/dataset/greenhouse-gas-emissions -H "Accept: text/csv"
```

In the process, I discovered that within R and Python's pandas, `read_csv()` functions and methods don't send an accept header with their requests. So I also implemented it so that navigating to `http://localhost:3000/dataset/greenhouse-gas-emissions.csv` (i.e., appending `.csv` to the end of the URL) would return the data as CSV.

This process proved to me that this sort of content negotation is possible with a common JS framework.

I set up oxigraph as a triple store, in case we ever wanted to do some SPARQL queries to generate some of the pages - but I never got that far. To add various turtle files to oxigraph, you can use the helper script [`seed.sh`](./oxigraph/seed.sh).
