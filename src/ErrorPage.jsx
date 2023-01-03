import {useRouteError} from 'react-router'

import './ErrorPage.css'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)

    return(
        <div id="error-page">
            <h1>Ooops!</h1>
            <p><i>{error.statusText || error.message}</i></p>
        </div>
    )
}

export default ErrorPage