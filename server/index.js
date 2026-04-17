const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Serveur Xelkom Valley opérationnel ✅' })
})

app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body
  if (!email || !message) return res.status(400).json({ error: 'Email et message requis.' })

  console.log('\n📩 ======= NOUVEAU MESSAGE =======')
  console.log('   Nom     :', name)
  console.log('   Email   :', email)
  console.log('   Téléphone:', phone)
  console.log('   Sujet   :', subject)
  console.log('   Message :', message)
  console.log('=================================\n')

  res.json({ success: true })
})

app.listen(PORT, () => {
  console.log(`\n🚀 Serveur Xelkom Valley démarré sur http://localhost:${PORT}\n`)
})
