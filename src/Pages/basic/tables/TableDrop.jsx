import { Link } from 'react-router-dom'

import dropTableIllustration from '../../../assets/Drop_Table_Optimized.jpg'
import Message from '../../../components/Message'

export default function TablesDrop() {
    const dropTableQuery = `drop table products;`
    return (
        <>
            <h2 className="subtitle">Dropping tables</h2>
            <p>Occasionally you might need to remove an entire table from the database. Some examples of why you'd need to do it:</p>
            <ul>
                <li>you have migrated data out of one table and into another, and you no longer need the source table</li>
                <li>you legitimately need to delete data in the table because you stopped supporting part of your application that uses it</li>
                <li>there's nothing in it and you want to change the structure and doing it with <code>alter table</code> would be more complicated</li>
                <li>it was a temporary table to check something</li>
            </ul>
            <p>Whatever your reasons, the way to drop a table is fairly quick:</p>
            <pre><code>{dropTableQuery}</code></pre>
            <p>With colour coding, here's what that looks like:</p>
            <img src={dropTableIllustration} alt="the query drop table products colour coded. Drop is 'do what', table is 'with what', and products is the name of the table" />
            <Message type="is-danger" header="Dropping a table WILL delete all the data in it">
                <p>Dropping a table is considered a destructive action. There's no way to undo it, unless you have backups in place. Because of that the permissions on the users we connect to databases to might be restrictive, and they might not even allow you to drop a table.</p>
                <p>Make sure you have sufficient and recent enough backups in case you realise immediately after dropping a table that you've dropped the wrong one.</p>
            </Message>

            <Message type="is-warning" header="Dropping tables and foreign key constraints">
                <p>You might not be allowed to drop a table if there are foreign key constraints set up on it. We'll learn about them a bit later, but generally one of two things can happen with dropping a table and foreign keys:</p>
                <ol>
                    <li>You can't drop a table because other tables depend on it</li>
                    <li>You drop the table, but that also deletes data in other tables as well in a cascading manner, which might not be something you wanted to do!</li>
                </ol>
                <p>We are going to go in depth about both of these in the Foreign Key Constraints part.</p>
            </Message>
            <p>Next up, let's learn <Link to="/basic/tables/alter">how to alter the structure of an existing table</Link>.</p>
        </>

    )
}