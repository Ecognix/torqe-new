import TorqeChat from "../../torqeai-chatbot/components/torqe-chat/TorqeChat";

export const metadata = { title: "TorqeAI", description: "Ask TorqeAI anything about Torqe." };

export default function ChatPage() {
  return (
    <div className="chat-page">
      <TorqeChat />
    </div>
  );
}