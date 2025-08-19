import { getDBConnection } from '../db/db.js'

export async function getTitles(req, res) {
  try {
    const db = await getDBConnection()
    const queryData = await db.all('SELECT title FROM stories ORDER BY id desc')
    const titles = queryData.map(item => item.title)
    res.status(200).json(titles)

  }
  catch (err) {
    res.status(500).json({ error: 'Failed to fetch stories', details: err.message })
  }
}

export async function getStories(req, res) {
  try {
    const db = await getDBConnection()
    const queryData = await db.all('SELECT content FROM stories ORDER BY id desc')
    const stories = queryData.map(item => item.content)
    res.status(200).json(stories)

  }
  catch (err) {
    res.status(500).json({ error: 'Failed to fetch stories', details: err.message })
  }
}


export async function getGenres(req, res) {

  try {

    const db = await getDBConnection()

    const genreRows = await db.all('SELECT DISTINCT genre FROM products')
    const genres = genreRows.map(row => row.genre)
    res.json(genres)

  } catch (err) {

    res.status(500).json({ error: 'Failed to fetch genres', details: err.message })

  }
}

export async function getProducts(req, res) {

  try {

    const db = await getDBConnection()

    let query = 'SELECT * FROM products'
    let params = []

    const { genre, search } = req.query

    if (genre) {

      query += ' WHERE genre = ?'
      params.push(genre)

    } else if (search) {

      query += ' WHERE title LIKE ? OR artist LIKE ? OR genre LIKE ?'
      const searchPattern = `%${search}%`
      params.push(searchPattern, searchPattern, searchPattern)

    }

    const products = await db.all(query, params)

    res.json(products)


  } catch (err) {

    res.status(500).json({ error: 'Failed to fetch products', details: err.message })

  }

}