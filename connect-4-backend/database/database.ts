import Database from 'better-sqlite3';
import fs from 'fs'

// Create the database connection
export const db = new Database('sqlite.db');

// Ensure the database has the correct tables (only creates/inserts if not exists)
const setupSQL = fs.readFileSync('database/setup.sql', 'utf8'); 

export function setupDatabase(){    
    db.exec("PRAGMA foreign_keys = ON;")
    db.exec(setupSQL);
}

// Close the DB when the program exits
process.on('exit', () => db.close());