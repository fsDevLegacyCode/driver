const { Client } = require('pg');

// Connection information
const client = new Client({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // Default PostgreSQL port
});

// Connect to the PostgreSQL server
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL server');

    // SQL query to create a table
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Execute the query
    return client.query(query);
  })
  .then(() => {
    console.log('Table created successfully');
  })
  .catch(err => {
    console.error('Error creating table:', err);
  })
  .finally(() => {
    // Close the client
    client.end();
  });