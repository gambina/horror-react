import express from 'express'
import cors from 'cors'



const PORT = 8000
const app = express()

const corsOptions = { origin: ["http://localhost:5173"] }

app.use(cors(corsOptions))

app.get("/api", (req, res) => {
  res.status(200).json({ stuff: ['lahmacun', 'balik', 'etli ekmek'] })
})

app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

app.listen(PORT, () => { console.log(`Server started on Port ${PORT}`) })