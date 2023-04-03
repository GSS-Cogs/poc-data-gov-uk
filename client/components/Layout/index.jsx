import Navigation from "../Navigation";
import Footer from "../Footer";

export default function Layout({ children }) {
    return (
        <>
            <a href="#main-content" className="govuk-skip-link" data-module="govuk-skip-link">Skip to main content</a>
            <Navigation />
            <div className="wrapper" id="wrapper">
                {children}
            </div>
            <Footer />
        </>
    );
}