import { Link } from "react-router-dom"
import Message from "../../../components/Message"

export default function FetchWhere() {
    return (
        <>
            <h2 className="subtitle">Fetch data with <code>where</code> clauses</h2>

            <p>When you have an application that has a sizable amount of users each generating some amount of data, you will quickly end up in a situation where grabbing all the data is not going to be good enough.</p>

            <p>For example if you have a blog and you want the posts written by a particular author, you could go two ways about it</p>
            <ol>
                <li>Fetch everything, but only show what you want</li>
                <li>Only fetch what you want, but show all of it</li>
            </ol>

            <h3>Fetching everything, filtering client side</h3>

            <img className="box my-6" src="/where_query_everyone.jpg" alt="illustration showing fetching all results in a database with only some of the results highlighted" />

            <p>This approach depends on your use case and the data you hold. For example if you have a products page with interactive filters, this might be a good approach. Fetch all the products, but depending on the current state of the filters, only display those that are in stock, and come in colour green.</p>
            <p>In those cases there's really no reason to keep fetching essentially the same data with different parameters when the requirements might change.</p>
            <p>This however is wholly unsuitable when it comes to data you want to protect in some way, and DEFINITELY when we're talking about data that's Personally Identifiable Information (for the Americans), or Personal Data (for the EU folks re GDPR).</p>

            <h3>Only fetching what we need</h3>

            <img class="box my-6" src="/where_query_alex.jpg" alt="illustration showing fetching only data that we need" />

            <p>This delegates most of the work of finding the right data to the database itself. Depending on how the indexes are set up (which you can read about <Link to="/indexes/indextypes">here</Link> to skip ahead), the operation may be super fast too. From a network point of view, returning a small amount of data is always preferable to returning large amounts of data, not to mention the memory requirements of dealing with lots of unnecessary data in the browser.</p>
            <p>Oh, and if you don't have the data in the browser, there's no way someone can look at the source code / inspect the javascript on the front end and figure out what you haven't shown them.</p>

            <Message type="is-danger" header="All javascript / html / css is public">
                <p>Though data security is not the focus of this here info site, it is very important to mention that once any data has been sent to the front end, that data is public on that computer / client.</p>
                <p>You may think, "but hey, it's encrypted", but in order to make sense of encrypted data on the front end, you have to decrypt it. To do that, you need a key. That key needs to be available to the front end, and as such, needs to be reachable from the browser, which means your user can also figure out what it is.</p>
                <p>Treat any and all code you send to the client as publicly available.</p>
            </Message>

            <p>Okay, on to the last part about fetching data: <Link to="/basic/select/orderby-et-al">ordering things, grouping things</Link>, and assorted bits.</p>
        </>

    )
}