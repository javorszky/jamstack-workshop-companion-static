import Message from '../../../components/Message';
import { Link } from 'react-router-dom';

export default function FetchRename() {
    return (
        <>
            <h2 className="subtitle">Renaming columns in result set</h2>

            <p>This part is going to be rather short.  Let's use the last example from the previous lesson about fetching only some columns:</p>

            <pre><code>{`SELECT table_schema, table_name, table_type FROM information_schema.tables WHERE table_schema = 'auth';`}</code></pre>
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

            <p>Occasionally using the actual names of the columns might not be informative, or it might be overly long, or it might be named weirdly. In those cases you can adjust what they are known by using <code>select <b><i>actual_column_name</i></b> as <b><i>whatever_you_want_to_call_it</i></b> from ...</code>. In the above it would look like:</p>

            <pre><code>{`SELECT table_schema `}<span className="bg-lime p-2">as schema</span>{`, table_name `}<span className="bg-lime p-2">as name</span>{`, table_type `}<span className="bg-lime p-2">as type</span>{` FROM information_schema.tables WHERE table_schema = 'auth';`}</code></pre>

            <p>This results in the same actual data, with the difference being the headers:</p>
            <table className="table is-bordered is-striped is-hoverable">
                <thead>
                    <tr>
                        <th><span className="bg-lime p-2">schema</span></th>
                        <th><span className="bg-lime p-2">name</span></th>
                        <th><span className="bg-lime p-2">type</span></th>
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

            <p>A practical application of this is when you're doing some calculations / operations on the fetched data:</p>

            <p>An advanced use of this is when you're doing operations on the fetched data before you're presenting it to yourself, for example:</p>

            <pre><code>{`SELECT table_schema || '.' || table_name FROM information_schema.tables WHERE table_schema = 'auth';`}</code></pre>
            <p>This will concatenate the value in the schema row with the value in the name row using a dot in the middle. But more importantly, the title used for the result set is going to be <b><i>?column?</i></b></p>
            <table className="table is-bordered is-striped is-hoverable">
                <thead>
                    <tr>
                        <th>?column?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>auth.schema_migrations</td>
                    </tr>
                    <tr>
                        <td>auth.refresh_tokens</td>
                    </tr>
                    <tr>
                        <td>auth.audit_log_entries</td>
                    </tr>
                    <tr>
                        <td>auth.instances</td>
                    </tr>
                    <tr>
                        <td>auth.users</td>
                    </tr>
                </tbody>
            </table>


            <p>This is not great. To deal with that, you would add an <code>as</code> modifier to the result set:</p>

            <pre><code>{`SELECT table_schema || '.' || table_name as fully_qualified_table_name FROM information_schema.tables WHERE table_schema = 'auth';`}</code></pre>

            <table className="table is-bordered is-striped is-hoverable">
                <thead>
                    <tr>
                        <th>fully_qualified_table_name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>auth.schema_migrations</td>
                    </tr>
                    <tr>
                        <td>auth.refresh_tokens</td>
                    </tr>
                    <tr>
                        <td>auth.audit_log_entries</td>
                    </tr>
                    <tr>
                        <td>auth.instances</td>
                    </tr>
                    <tr>
                        <td>auth.users</td>
                    </tr>
                </tbody>
            </table>

            <Message type="is-info" header="Renaming is for convenience only">
                <p>Renaming columns does not change anything in the underlying data, it will merely call it by a different title. In the above example, we didn't create an actual column for that data.</p>

                <p>Also bear in mind that operations on result sets can be very expensive (take a long time, take a lot of memory, take a lot of CPU, or all three of them), so you might want to reevaluate whether that's the best approach.</p>
            </Message>

            <Message type="is-link" header="Operations on results">
                <p>Doing operations on result sets, or even on data going in is not basic functionality, but useful nonetheless. You can find functions for practically anything <a href="https://www.postgresql.org/docs/13/functions.html">on the Postgres documentation functions page</a>.</p>

                <p>The <code>||</code> is string concatenation. You can read about them in more detail on the <a href="https://www.postgresql.org/docs/13/functions-string.html">string functions and operators page</a>.</p>
            </Message>

            <p>If you're okay with everything, let's more on to <Link to="/basic/select/where">restricting the result set with a <code>where</code> clause</Link>.</p>
        </>
    )
}