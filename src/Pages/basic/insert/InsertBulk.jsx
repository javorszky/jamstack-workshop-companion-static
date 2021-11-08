import { Link } from "react-router-dom"

export default function InsertBulk() {
    return (
        <>
            <h2 className="subtitle">Inserting bulk data</h2>

            <p>With the <code>insert</code> statement we can insert multiple rows at once without needing to repeat the entire sequence. Consider the following situation: you have a bunch of data about different products to insert into the table. So far you've learned the following query will work:</p>

            <pre><code>{`INSERT INTO schema.table (col1, col2)
VALUES (value_for_col1, value_for_col2);`}</code></pre>

            <p>You might be thinking: "wait, do I need to repeat this for every row?"</p>

            <img src="/bulk_insert_separate.jpg" alt="separate queries for individual rows" className="box my-6" />

            <p>This would be super inefficient. And there's a better way:</p>

            <img src="/bulk_insert_repeated.jpg" alt="one query to insert multiple rows" className="box my-6" />

            <p>We still start the insert statement, but when it comes to the <code>values</code> part, we keep one row's data within parens (<code>()</code>), and comma separate the data for each individual row.</p>

            <p>This is important enoguh and common enough to get its own page. Once you're ready, move on to learning about <Link to="/basic/insert/select">inserting data from a different table</Link>.</p>
        </>
    )
}