import { Link } from 'react-router-dom'

export default function TablesOverview() {
    return (
        <>
            <h2 className="subtitle">Table Overview</h2>
            <p>Tables are the main source of all data. There are other bits that we're going to talk about, but the data lives in tables; that's where we're going to put them, and that's where we're going to get them out from.</p>
            <p>In postgres, each database has multiple schemas. Think of schemas as separate bags that contain database objects: tables, triggers, functions, variables, and so on.</p>
            <p>A table will always be in a schema. By default that schema is going to be called <code>public</code>. Depending on the permissions of the database user that is connected, you may or may not be able to access tables in other schemas.</p>
            <p><i>image here about database and schemas and tables</i></p>

            <p>Next up, let's <Link to='/basic/tables/create'>create the product table</Link>.</p>
        </>

    )
}