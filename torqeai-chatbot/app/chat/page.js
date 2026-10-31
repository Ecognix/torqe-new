import TorqeChat from "../../components/torqe-chat/TorqeChat";

export const metadata = { title: "TorqeAI", description: "Ask TorqeAI anything about Torqe." };

// Full-page chat. The top padding clears a fixed site header (about 64px); adjust or remove it for your layout.
export default function ChatPage() {
  return (
    <div style={{ height: "100dvh", paddingTop: 64 }}>
      <TorqeChat />
    </div>
  );
}
