import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    connectionString: "postgres://default:Z7XUnb5twGLq@ep-lingering-hat-a25415ra-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require",
});

pool.connect()
  .then(client => {
    console.log('Connected to PostgreSQL server');

    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        userID SERIAL,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    CREATE TABLE IF NOT EXISTS cars (
        id SERIAL PRIMARY KEY,
        plate VARCHAR(30) UNIQUE NOT NULL,
        name VARCHAR(255)  NOT NULL,
        brand VARCHAR(255) NOT NULL,
        gas VARCHAR(255) NOT NULL,
        motor VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )

      create table if not exists orinal_user(
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)

    return client.query(query)
      .then(() => {
        console.log('Table created successfully');
      })
      .catch(err => {
        console.error('Error creating table:', err);
      })
      .finally(() => {
        // Release the client back to the pool
        client.release();
      });
  })
  .catch(err => {
    console.error('Error connecting to PostgreSQL server:', err);
  })
  .finally(() => {
    // The pool will automatically end when the script exits
  });
