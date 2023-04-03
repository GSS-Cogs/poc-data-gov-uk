import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="govuk-width-container">
        <main
          className="govuk-main-wrapper app-main-class"
          id="main-content"
          role="main"
        >
          <h1 className="govuk-heading-xl">Page not found</h1>
          <p className="govuk-body">
            If you typed the web address, check it's correct.
          </p>
          <p className="govuk-body">
            If you cut and pasted the web address, check you copied the entire
            address.
          </p>
          <p className="govuk-body">
            If the web address is correct or you clicked a link or button and
            ended up on this page,{" "}
            <a href="/contact-us" className="govuk-link">
              contact us
            </a>{" "}
            if you need any help or support.
          </p>
        </main>
      </div>
    </>
  );
};

export default NotFound;
