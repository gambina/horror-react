import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { story } from './data.js'

async function seedTable() {

  const db = await open({
    filename: path.join('database.db'),
    driver: sqlite3.Database
  })

  try {

    await db.exec('BEGIN TRANSACTION')
    // buradaki ?'lar placeholder. Bunlarin associate ettigi yerlere gidiyor data.
    for (const { title, content } of story) {
      await db.run(
        `INSERT INTO stories (title, content)
        VALUES (?, ?)`,
        [title, content]
      )
    }

    await db.exec('COMMIT')
    console.log('All records inserted')

  } catch (err) {

    await db.exec('ROLLBACK')
    console.log('Error inserting data', err.message)

  } finally {

    await db.close()
    console.log('connection closed')

  }

}

seedTable()