import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { openai } from "../index.js";

dotenv.config();
const router = express.Router();

router.post("/text", async (req, res) => {
  try {
    const { text, activeChatId } = req.body;


    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: text,
      temperature: 0.5,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0
    });

    await axios.post(
      `https://api.chatengine.io/chats${activeChatId}/messages/`,
      { text: response.data.choices[0].text }
    )
    res.status(200).json({ text: text });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: error.message });
  }
});

export default router