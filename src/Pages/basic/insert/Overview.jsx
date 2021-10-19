import { Link } from "react-router-dom"
import Message from "../../../components/Message"

export default function InsertOverview() {
    return (
        <>
            <h2 className="subtitle">Inserting data</h2>

            <p>Inserting data into a table can be done in a myriad of different ways, we're gonna learn 3 of them. Or rather 2.5.</p>

            <p>To do an insert successfully, we need to know</p>
            <ul>
                <li>where we're inserting to (which schema.table)</li>
                <li>which columns we're inserting into in that table, which is going to make sense in a few minutes</li>
                <li>what the data that we're inserting into there is</li>
            </ul>

            <p>The three different methods that we're going to go through are:</p>
            <ol>
                <li>inserting data but leaving out some columns and we let the database figure out what should go there in the <Link to="/basic/insert/defaults">inserting with defaults</Link> section. This is the half part</li>
                <li>inserting one or more records where we specify what the data is in the <Link to="/basic/insert/bulk">bulk insert section</Link></li>
                <li>and lastly inserting data into a table where the source is a <code>select</code> query from another table</li>
            </ol>

            <Message type="is-link" header="Insertions that we're not exploring">
                <p>Inserting data into a table from a file is an advanced level functionality. By the time you need to do that you have a lot of data, and if you do have a lot of data, you will need to wade into the waters of advanced features.</p>
                <p>If you'd like to skip ahead, you can read the docs on the <a href="https://www.postgresql.org/docs/13/sql-copy.html">sql copy command</a>, or its <code>psql</code> command line alternative, the<a href="https://www.postgresql.org/docs/13/app-psql.html#APP-PSQL-META-COMMANDS-COPY"><code>\copy</code> meta command</a>.</p>

                <p>The difference between them is that the SQL command (the first one) is going to be significantly faster, but the file you want to use needs to exist on the same machine the database is running on, as it does a local filesystem read.</p>
                <p>The <code>\copy</code> meta command however can take a filepath that sites on your / the client computer, but the downside is that the data needs to pass through the network between the client and the server, which is orders of magnitude slower.</p>
            </Message>
        </>

    )
}