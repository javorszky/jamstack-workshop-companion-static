export default function TablesCopy() {
    return (
        <>
            <h2 className="subtitle">Copy a database table</h2>

            <p>Sometimes we'll need to copy an existing database table's structure, without the content. Situations where you have a lot of data (hundreds of millions of rows), and you need to make some changes to the structure but you want to start with what's available, but you don't want to wait until the changes are applied to all rows, or simply you want to experiment without fear of destroying data.</p>


            <p>In those cases we can use a <code>like</code> operator instead of manually specifying each individual columns.</p>
        </>

    )
}