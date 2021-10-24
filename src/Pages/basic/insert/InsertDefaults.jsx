export default function InsertDefaults() {
    return (
        <>
            <h2 className="subtitle">Default values and generated columns</h2>

            <p>You may have noticed that when creating a table we can specify a default value for a column. That default value gets used when there's an insert statement, and the database is not told what the value should be.</p>

            <p>Here's the relevant part:</p>

            <pre><code>{`CREATE TABLE schema.table_name (
    id       bigint primary key,
    col_name text `}<span className="bg-lime p-2">DEFAULT ""</span>{`,
    created_at timestamp `}<span className="bg-purple dark p-2 has-text-white">DEFAULT current_timestamp</span>{`
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
        </>
    )
}