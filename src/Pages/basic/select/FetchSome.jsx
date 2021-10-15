import Message from '../../../components/Message';
import { Link } from 'react-router-dom';
export default function FetchSome() {
    return (
        <>
            <h2 className="subtitle">Fetch only some columns</h2>

            <p>In the previous section we looked at the generic simple select query, which looked like this. Notice the star:</p>
            <pre><code>{`SELECT `}<span className="bg-lime p-2">*</span>{` FROM public.products;`}</code></pre>
            <p>That star means <b><i>everything</i></b> from the table: all columns of data. Because there's no <code>where</code> clause there (we'll get into that shortly), it will also try to return all rows in the table.</p>

            <p>For a practical example here, we will need to copy some data from the users table that supabase itself uses to keep track of the users that interact with its authentication libraries. If you haven't done so, on the example site I had you cloned and spun up, there's a Sign up / Log in button in the top right corner. Sign up or log in. Note that you had to give an email address, and choose a password.</p>
            <p>Those details are stored <i>somewhere</i>, but if you look at your tables in the supabase UI (screenshot below), you don't have a users table.</p>

            <img src="/tables_schema_selection.jpg" alt="screenshot of supabase ui, red arrow pointing to the table icon that looks like a grid, immediately under the home button, blue arrow pointing to a select element in the sidebar of the table page to choose schema" className="my-6 box" />

            <p>Supabase has a table called users in the <b><i>auth</i></b> schema. Here are a few ways to figure that out.</p>

            <h3>List a record of all tables in all schemas</h3>
            <p>Every postgres database will have a few built in schemas and tables or views to hold its own record of what's where: how many tables there are, what those tables look like, what they are called, what constraints exist on them, and so on.</p>

            <Message type="is-link" header="What is a view?">
                <p>A view and a table are very similar to each other in that you can query the data out of them using the same syntax, and pretend that a view was a table.</p>
                <p>The difference however is that technically a view does not exist. It's not a table, in which it doesn't have its data stored somewhere, like a table. It's a virtual construct that may depend on many other tables, or even other views.</p>
                <p>The easiest analogy to React or Vue is that a View is kind of like a computed property: it exists, but it depends on other properties, and it changes when the underlying data changes too.</p>
                <p>Here are some useful links for more info if you want to dive deeper:</p>
                <ul>
                    <li><a href="https://en.wikipedia.org/wiki/View_(SQL)">View definition on WikiPedia</a></li>
                    <li><a href="https://www.postgresql.org/docs/13/tutorial-views.html">View on Postgres documentation</a></li>
                </ul>
            </Message>

            <p>One of the tables and schemas that are common across both MySQL and Postgres is the <a href="https://www.postgresql.org/docs/13/information-schema.html"><b><i>information_schema</i></b> concept</a>. To grab a list of all tables in that schema, we can use this query:</p>

            <pre><code>{`SELECT * FROM information_schema.tables where table_schema = 'information_schema';`}</code></pre>

            <p>You can go ahead, open a new query window, paste that in there, and run it. You should get a lot of rows of information along with a LOT of columns. For our purposes we only care about the following columns</p>

            <img src="/select_columns_1.jpg" alt="" className="box my-6" />

            <p>Let's suppose we only care about three columns: <b><i>C2</i></b>, <b><i>C3</i></b>, and <b><i>C4</i></b>. These ones:</p>

            <img src="/select_columns_2.jpg" alt="" className="box my-6" />

            <p>To achieve that we have to replace the <span className="bg-purple has-text-white p-2">*</span> with the column names we want: <span className="bg-paleblue p-2">C2</span>, <span className="bg-red p-2">C3</span>, and <span className="bg-lime p-2">C4</span>.</p>

            <img src="/select_columns_3.jpg" alt="" className="box my-6" />

            <p>That will result in a small dataset that is exactly what we want to see in this case:</p>

            <img src="/select_columns_4.jpg" alt="" className="box-my-6" />

            <p>To translate it back to list the tables from the <b><i>information_schema</i></b> view, we can use the following query, which you're welcome to run in your supabase instance:</p>

            <pre><code>{`SELECT `}<span className="bg-paleblue p-2">table_schema</span>{`, `}<span className="bg-red p-2">table_name</span>{`, `} <span className="bg-lime p-2">table_type</span>{` FROM information_schema.tables WHERE table_schema='information_schema';`}</code></pre>
            <p>That will give you every single table and view (see the <b><i>table_type</i></b> column) in the <i>information_schema</i> schema.</p>
            <p>Because we're going to use this to figure out the table structure of the users table that supabase uses to keep track of, and figure out where it stores when you sign up, modify the query to be this:</p>

            <pre><code>{`SELECT table_schema, table_name, table_type FROM information_schema.tables WHERE table_schema = 'auth';`}</code></pre>
            <p>You should have a result set that looks something like this:</p>

            <table className="table is-bordered is-striped is-hoverable">
                <thead>
                    <tr>
                        <th>table_schema</th>
                        <th>table_name</th>
                        <th>table_type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>auth</td>
                        <td>schema_migrations</td>
                        <td>BASE_TABLE</td>
                    </tr>
                    <tr>
                        <td>auth</td>
                        <td>refresh_tokens</td>
                        <td>BASE_TABLE</td>
                    </tr>
                    <tr>
                        <td>auth</td>
                        <td>audit_log_entries</td>
                        <td>BASE_TABLE</td>
                    </tr>
                    <tr>
                        <td>auth</td>
                        <td>instances</td>
                        <td>BASE_TABLE</td>
                    </tr>
                    <tr>
                        <td>auth</td>
                        <td>users</td>
                        <td>BASE_TABLE</td>
                    </tr>
                </tbody>
            </table>
            <p>Of these we're only going to work with the <i>users</i> table, but feel free to experiment figuring out what's in the others. As a hint, here's how to get the audit log entries:</p>

            <pre><code>{`SELECT * FROM auth.audit_log_entries;`}</code></pre>

            <p>When you're ready, let's move on to <Link to="/basic/select/renaming-columns">renaming columns in the results</Link>.</p>
        </>
    )
}