import { Helmet } from 'react-helmet';

export default function NotFoundView() {
    return (
        <div>
            <Helmet>
                <title>Not Found</title>
            </Helmet>     
            <h2>Page not found</h2>
        </div>
    )
}