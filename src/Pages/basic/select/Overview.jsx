import { Link } from 'react-router-dom';
import Message from '../../../components/Message';

export default function FetchOverview() {
    return (
        <>
            <h2 className="subtitle">Fetching data out from tables</h2>

            <p>What's the point of having data in tables if we don't know how to grab them out? This is where fetching comes in.</p>
            <p>There's a surprising amount of of nuance when it comes to querying data, but in its most basic form it looks like this:</p>
            <pre><code>{`SELECT * FROM public.products;`}</code></pre>
            <p>Colour coded to break up the monotony of the page, and to give a reference:</p>

            <img src="/basic_select.jpg" alt="colour coded. Select from is do what. Star is return what. public is schema name, and products is table name" className="box my-6" />

            <p>In the sub pages we'll go over some more advanced uses of the <code>select</code> query.</p>
            <p>First up is only fetching <Link to="/basic/select/fetching-only-some-columns">some columns</Link> from the available dataset.</p>

            <Message type="is-link" header="Postgres documentation on select">
                <p>For reference, here's <a href="https://www.postgresql.org/docs/13/queries-overview.html">the official documentation page on the select query</a>. It is quite sizable.</p>
                <p>If you haven't done it yet, make sure to check out the <Link to="/how-to-read-command-specifications">how to read the docs addendum</Link>!r</p>
            </Message>
        </>
    )
}