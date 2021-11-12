import { Link } from "react-router-dom"
import Message from '../../../components/Message';

export default function UpdateOverview() {
    return (
        <>
            <h2 className="subtitle mb-6">Updating data</h2>

            <p>Updating a row or a set of rows is a fairly straightforward venture. In this basics we're only going to be dealing with super simple updates that look like this:</p>

            <img src="/update_table_set.jpg" alt="" className="box my-6" />

            <p>There's not a lot going on here. You have to tell what to update, and what columns to set which values to. In strict mode Postgres might also complain that the update would be way too broad, and you need to include a <code>WHERE</code> clause too, which would look like this:</p>

            <pre><code>UPDATE schema.table SET col1 = value1 WHERE col2 = value2;</code></pre>

            <Message type="is-link" header="Postgres documentation for UPDATE">
                <p>There are a few more ways to update rows in a table that I haven't touched on. You can have a read about them <a href="https://www.postgresql.org/docs/13/sql-update.html">on the UPDATE documentation page in the Postgres documentation</a>.</p>
            </Message>

            <p>That's pretty much it about updates. Let's move on to <Link to="/basic/delete">learning about deleting rows!</Link></p>
        </>
    )
}