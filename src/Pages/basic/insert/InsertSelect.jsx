import { Link } from "react-router-dom"
import Message from '../../../components/Message';




export default function InsertSelects() {
    return (
        <>
            <h1 className="subtitle">Insert as select from another table</h1>

            <p>This method is super useful if you're moving data schemas, or you need to populate a temporary table while you do something with the data you selected.</p>

            <p>For example, let's suppose you have order data going back 5 years, but you're only really interested in the orders that were in USD in the past year, and only the amount, the date, and the payment method.</p>

            <p>You could do whatever you want to do on this data in the original table, but for separation of concerns, or portability, that is not ideal. For example let's suppose you hired a data analyist, and they asked you for a copy of the data. You wouldn't want to give them the entire source database, just the bits they need, because privacy laws are important, and you're a great citizen of the internet, and abide by all laws and principles of data minimization and anonymisation.</p>

            <p>So here's what this would look like:</p>

            <img src="/insert_into_select_2.jpg" alt="" className="box my-6" />

            <p>We start with the source and the target tables. The source table is long and wide, having a lot of rows, and a lot of columns. The target table only has 3 columns, and will end up having fewer rows.</p>

            <img src="/insert_into_select_3.jpg" alt="" className="box my-6" />

            <p>We're only interested in some of the columns, and some of the rows. Earlier we learned that that can be achieved with <code>select col1, col2 from table where col1 = 'value';</code> or something similar.</p>

            <img src="/insert_into_select_4.jpg" alt="" className="box my-6" />

            <p>The intersection of those, the magenta bits, are what we need from the source table, and that data is going to 100% fill out the target table.</p>

            <p>To tie this together, this is what a query looks like:</p>

            <pre><code>{`INSERT INTO schema.target_table
SELECT col1, col2, col3
FROM schema.source_table
WHERE currency = 'USD'
AND date > '2020-12-31 23:59:59;`}</code></pre>

            <p>You'll notice that this is a simple select query with an <code>insert into schema.target_table</code> coming before it.</p>

            <p>There are a few important points you need to look out for:</p>
            <ol>
                <li>As with basic inserts, you need to make sure that either the columns have default values, are nullable, or have data going into them. If the target table has 3 columns, none have default values, none are nullable, your query needs to return 3 columns</li>
                <li>The data returned in the select query needs to match the type of the columns, including the names of the columns between the table and the select query</li>
            </ol>

            <Message type="is-link" header="Insert into select documentation">
                <p>The documentation lives in two different places for this. On one side, <a href="https://www.postgresql.org/docs/13/sql-insert.html">Postgres's insert docs page</a> is the one to look out for.</p>

                <p>On that page the relevant bit looks like this:</p>

                <pre><code>{`INSERT INTO table_name [ AS alias ] [ ( column_name [, ...] ) ]
    ...
    { DEFAULT VALUES | VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | `}<span className="bg-lime p-2">query</span>{` }
    ...`}</code></pre>

                <p>Where <b><i>query</i></b> refers to "A query (SELECT statement) that supplies the rows to be inserted. Refer to the SELECT statement for a description of the syntax.".</p>

                <p>The link for the <a href="https://www.postgresql.org/docs/13/sql-select.html">select statement</a> takes you to the docs page for selects.</p>
            </Message>

            <p>And that's everything you need to know about the basics of inserting data into a table. When you're ready, let's move on to learn about <Link to="/basic/update">updating data</Link>!</p>
        </>
    )
}