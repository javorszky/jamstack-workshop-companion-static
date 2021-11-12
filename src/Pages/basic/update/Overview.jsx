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

            <p>This concludes the four basic things you can do with data in the database. Let's move on to <Link to="/joins">learning about table joins!</Link></p>
        </>
    )
}