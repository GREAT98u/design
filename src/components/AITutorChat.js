import { useState } from "react";
import axios from "axios";

const AITutor = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:5000/chat", {
        message: input,
      });

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: response.data.response },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error fetching response." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div>
      <h3>AI Tutor</h3>
      <div>
        {messages.map((msg, index) => (
          <p key={index} style={{ color: msg.sender === "user" ? "blue" : "black" }}>
            {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        disabled={loading}
      />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
};

export default AITutor;
