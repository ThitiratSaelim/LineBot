const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser')
const request = require('request')

app.use(bodyParser.json())

app.post('/webhook', (req, res) => {
  
  let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 2g7uw2FUJL4kVe7GjUBZWkJ/BXQTbXv8ZD8W86vq0YbP19ikuPXEEvswObuEZ90hl4m6QYDfoFC5Vsss8tgc+GhTWGiETK9LPhgyL3lLOhhfCHnvweN7T2V9aKtKkJPjhvpqYllFIjoNsRy1rue5gQdB04t89/1O/w1cDnyilFU='
  }

  request.post({
    url: 'https://api.line.me/v2/bot/message/reply',
    headers: headers,
    body: JSON.stringify({
        replyToken: req.body.events[0].replyToken,
        messages: [
            {
                type: 'text',
                text: req.body.events[0].message.text + "\n" + "Hello, This is Line Bot",
            }
        ]
    })
  })
  console.log(req.body.events)
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Chatbot is listening at http://localhost:${port}`)
})