import Masthead from "../Masthead";

function onLogin() {
    
}

export default function Login() {
    return (
        <>
            <h2 className="govuk-heading-l">Sign in using your credentials</h2>
            <form onSubmit={onLogin()} method="post">
                <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor"email">
                        Username
                    </label>
                    <input className="govuk-input govuk-input--width-30" id="login" name="login" type="text" spellCheck="false" aria-describedby="email" autoComplete="email" />
                </div>
                <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor"password">
                        Password
                    </label>
                    <input className="govuk-input govuk-input--width-30" id="password" name="password" type="password" aria-describedby="password" />
                </div>
                <button type="submit" className="govuk-button" data-module="govuk-button">
                    Sign in
                </button>
            </form>
            <ul className="govuk-list">
                <a className="govuk-link" href="#">Create sign in details</a>
            </ul>
            <h3 className="govuk-heading-m">Problems signing in</h3>
            <ul className="govuk-list">
                <li>
                    <a className="govuk-link" href="#">I have forgotten my password</a>
                </li>
                <li>
                    <a className="govuk-link" href="#">Get help with this page</a>
                </li>
            </ul>
        </>
    );
}
