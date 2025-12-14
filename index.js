import express from "express"
import { getBotReply } from "./chatbot.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;
// This allows the server to read JSON from clients
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.json({
        message: "Chatbot backend is running"
    });
});

app.post("/api/v1/chat", async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({
            success: false,
            error: "Message is required"
        });
    }

    const reply = await getBotReply(userMessage);

    res.json({
        success: true,
        data: {
            reply
        }
    });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});

