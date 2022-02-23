function getAndConnectToClient() {
    const { Client } = require('pg')

    let client;

    if (process.env.NODE_ENV !== 'development') {
        client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        });
    } else {
        // Local Postgres Server Password: 1234 (Set during installation)
        // To get Heroku database connection url and credentials,
        // Use Heroku CLI and the following.
        // heroku pg:credentials:url DATABASE -a urnewman

        client = new Client({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            connectionString: process.env.DB_CONNECTIONSTRING,
            ssl: {
                rejectUnauthorized: false
            }
        });
    }

    client.connect()

    return client;
}

async function getYoutubeStreamFromDatabase(client) {
    const query = {
        name: 'fetch-yt-stream',
        text: 'SELECT livestream_id FROM api_results where id = $1',
        values: [1],
    }

    const result = await client.query(query)

    return result.rows[0].livestream_id
}

async function updateYoutubeStream(client, videoId) {
    const query = {
        name: 'update-yt-stream',
        text: 'UPDATE api_results SET livestream_id=$1 WHERE id=$2',
        values: [videoId, 1],
    }

    await client.query(query).then(res => {
        console.log("[DATABASE] Updated video id to: " + videoId)
        return true
    }).catch(e => {
        console.error("[DATABASE] Query Error: " + e.message)
        return false
    })
}

const _getAndConnectToClient = getAndConnectToClient;
export { _getAndConnectToClient as getAndConnectToClient };
const _getYoutubeStreamFromDatabase = getYoutubeStreamFromDatabase;
export { _getYoutubeStreamFromDatabase as getYoutubeStreamFromDatabase };
const _updateYoutubeStream = updateYoutubeStream;
export { _updateYoutubeStream as updateYoutubeStream };