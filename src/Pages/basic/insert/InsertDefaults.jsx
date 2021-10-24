import { Link } from "react-router-dom"
import Message from '../../../components/Message';

export default function InsertDefaults() {
    return (
        <>
            <h2 className="subtitle">Default values and generated columns</h2>

            <p>You may have noticed that when creating a table we can specify a default value for a column. That default value gets used when there's an insert statement, and the database is not told what the value should be.</p>

            <p>Here's the relevant part:</p>

            <pre><code>{`CREATE TABLE schema.table_name (
    id                 bigint primary key,
    additional_details text `}<span className="bg-lime p-1">DEFAULT ""</span>{`,
    something_else     text `}<span className="bg-paleblue-dark has-text-white p-1">NULL DEFAULT ""</span>{`,
    created_at         timestamp `}<span className="bg-purple dark p-1 has-text-white">DEFAULT current_timestamp</span>{`
)`}</code></pre>

            <p>These default specifications essentially tell the database what to do when the data is missing, or when the client wants to update the data in those columns to be "default".</p>

            <p>If there's no incoming data, i.e. the client did not even specify that they want to put data into that column, and there's a default, the new value is going to be the default value. If the column does not have a default value, then it's going to return an error.</p>

            <img src="/default.jpg" alt="" className="box my-6" />

            <p>Okay, but what's the deal with nulls? If the column does not have a default value, but is null, then the value is going to be null. If column has no default, and is not null, then you get an error.</p>

            <img src="/No_default_Null.jpg" alt="" className="box my-6" />

            <blockquote className="box my-6">But Gabor, isn't <code>is null</code> the same as having a default value?</blockquote>

            <p>Yeah, kinda, but not really. There are a bunch of different considerations that you need to make here which goes into the field of information architecture. Number 1: does the value <code>null</code> have any actually useful meaning?</p>

            <p>Depending on what the programming language, or the data you're storing, not specifying data can default to be empty data.</p>

            <p>For example, in Golang, if you initialize a <code>string</code> without setting a value to it, its value is going to be <code>""</code>. If you initialize an integer without setting value to it, its value is going to be <code>0</code>. (to initialize in Golang means <code>{`var <name> <type>`}</code>).</p>

            <p>Real life examples would be "any additional details you can give us with your application" textbox, or "how many years of no claims bonus do you have?" (it's a UK vehicle insurance thing).</p>

            <p>In contrast, <code>null</code> means that there is no data available, and we can't make an educated guess of what the data should be, because it doesn't make sense to put data there when it says there's explicitly no data.</p>

            <p>An example of this is the <code>deleted_at</code> fields. If a post is not deleted, its deleted at field should be null. The data is actively missing. Defaulting to epoch (1970, jan 1, etc), the default zero value of timestamps usually, does not make sense, because it changes the meaning of "this post is not deleted" to "this post has been deleted almost 52 years ago".</p>

            <blockquote className="box my-6">Okay, so uh... what's the point of having <code>null</code> and a default?</blockquote>

            <p>I hear you asking. The point is that if a column can be null, but has a default value, you can insert the null value explicitly like so:</p>

            <pre><code>{`INSERT INTO schema.table_name (something_else) VALUES (null);`}</code></pre>

            <p>That row will look like this:</p>

            <table className="table is-bordered is-striped is-hoverable">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>additional_details</th>
                        <th>something_else</th>
                        <th>created_at</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>NULL</td>
                        <td>""</td>
                        <td>1635103554</td>
                    </tr>
                </tbody>
            </table>

            <Message type="is-link" header="Generated columns">
                <p>There's a special kind of column that you can use to generate values for, but you can't actually insert data into it. They are the generated columns.</p>

                <p>This is what it looks like to declare one:</p>

                <pre><code>{`CREATE TABLE temperatures (
  id bigint `}<span className="bg-lime p-2">GENERATED ALWAYS AS IDENTITY</span>{` PRIMARY KEY,
  location text NOT NULL,
  celsius numeric NOT NULL,
  fahrenheit numeric `}<span className="bg-lime p-2">GENERATED ALWAYS AS (celsius * 1.8 + 32) STORED</span>{`,
  inserted_at timestamp NOT NULL default current_timestamp
);`}</code></pre>

                <p>The short of it is</p>
                <ul>
                    <li>generated always as (expression) stored columns cannot be written to at insert or update</li>
                    <li>generated always/by default as identity can be updated, but tedious, and you shouldn't need to do it</li>
                    <li>they can only depend on data from the current row, or immutable functions</li>
                    <li>when a column is updated that the generated column depens on, the generated column's value also gets updated</li>
                </ul>

                <p>An example application is when you need to deal with a bunch of conversions, but you know what the incoming data is, like above. That way when clients ask for the data, they themselves don't need to do the calculations.</p>

                <p>Read more on the <a href="https://www.postgresql.org/docs/13/ddl-generated-columns.html">Postgres page for generated columns</a>.</p>
            </Message>

            <p>This is the basics of inserting data where there are defaults. Next up, <Link to="/basic/insert/bulk-inserts">bulk inserts</Link>.</p>
        </>
    )
}