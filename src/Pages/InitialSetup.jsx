export default function InitialSetup() {
    return (
        <>
            <h2 className="subtitle">Initial setup / workshop goals</h2>
            <p>The repository you all have cloned already is a pseudo ecommerce store. It helps visualize some of the concepts about databases, so you'll not only learn how to do different things, but also how they're useful in a practical way.</p>

            <p>Essentially it's an idea of a business to business ecommerce store:
                <ul>
                    <li>there are products</li>
                    <li>addresses for shipping and billing that belong to the users</li>
                    <li>cart</li>
                    <li>orders (if there's time)</li>
                    <li>fake payments against orders (if there's time)</li>

                </ul>
            </p>

            <p>These will help us think about how they relate to each other, what data we should be storing about them, what data we need to store about them to enable relations, how to grab connected data out from the database in one go, what are the considerations when we have a TON of data, and most importantly, how to do it anyways.</p>

            <h3>Actual requirements</h3>
            <ul>
                <li>You should have a github account</li>
                <li>You should have a <a href="https://supabase.io">supabase account</a> - top right corner "Start your project", and log in with your Github</li>
                <li>Within supabase, once you're in, create a new project. Name it anything you'd like, create a strong database password and save it in a password manager or somewhere you won't forget, and pick a region. It does not matter which region you choose for what we're going to be doing.</li>
                <li>Make a note of your project anon/public key and your project url. We'll need both of these shortly.</li>
                <li>Have nodejs and npm/yarn installed locally. This is needed to compile / generate / serve the scaffolding code. I'm on a mac, I use nvm (https://github.com/nvm-sh/nvm) to manage my node stuff. There are a bunch of different ways to install it, the canonical one is through their official site: https://nodejs.org/en/.</li>
                <li>You should have a clone of this repository: https://github.com/javorszky/jamstack-workshop-db-2021</li>
                <li>In the directory, rename the .env.example file, and replace the example values with the supabase project anon key and project url from step 4. If you need to find them again, it's in Settings (cog icon on the left edge of the site), and API menu item in the settings page.</li>
                <li>Run npm install to pull all dependencies.</li>
            </ul>
        </>

    )
}
