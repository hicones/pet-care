import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

let db: any = null;

async function openDb() {
  if (!db) {
    db = await open({
      filename: './petcare.sqlite',
      driver: sqlite3.Database
    })

    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT
      );

      CREATE TABLE IF NOT EXISTS animals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        species TEXT,
        age INTEGER,
        size TEXT,
        location TEXT,
        imageUrl TEXT,
        description TEXT
      );

      CREATE TABLE IF NOT EXISTS rescue_requests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        animalType TEXT,
        location TEXT,
        description TEXT,
        imageUrl TEXT
      );

      CREATE TABLE IF NOT EXISTS organizations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        location TEXT,
        description TEXT,
        needs TEXT
      );
    `)
  }
  return db
}

export { openDb }

