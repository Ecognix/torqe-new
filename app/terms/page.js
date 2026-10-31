export const metadata = {
  title: "TorqeAI Terms and Conditions",
  description: "Terms for using the TorqeAI website chat assistant.",
};

export default function TermsPage() {
  return (
    <article className="wrap prose section">
      <p className="tag tag-o">TorqeAI</p>
      <h1 className="h1 mt-6">Terms and Conditions</h1>
      <p className="lead mt-5">These terms cover your use of the TorqeAI chat assistant on this website.</p>

      <h2 className="h3 mt-10">What the assistant does</h2>
      <p>TorqeAI provides informational responses about Torqe and related topics. It can provide public web search results when asked, but it does not send messages, book meetings, create or send quotes, or take actions in your accounts. Its responses may be incomplete or incorrect; verify important information with the Torqe team.</p>

      <h2 className="h3 mt-8">Processing and chat history</h2>
      <p>Your messages and any images you attach are sent to NVIDIA to generate responses. If you request current web research, your search query is sent to Bing and relevant public search results are used to answer. Chat history is kept in session storage in your browser for the current browser session. Torqe does not currently store chat content on its own servers or use it for model training or product research.</p>

      <h2 className="h3 mt-8">Optional research preference</h2>
      <p>You may indicate whether you would be comfortable with possible future use of chats for product research and development. This records your preference in this browser session only. It does not currently submit or enroll chat content in a research or training program; Torqe would need to provide an updated notice before collecting chats for such use.</p>

      <h2 className="h3 mt-8">Acceptable use</h2>
      <p>Do not submit passwords, payment details, confidential information, or personal data you are not authorized to share. Do not use the assistant to violate laws or the rights of others. External websites are governed by their own terms and privacy practices.</p>

      <h2 className="h3 mt-8">Changes and contact</h2>
      <p>These terms may be updated as the assistant changes. For questions about the assistant, contact <a className="link" href="mailto:hello@torqe.ai">hello@torqe.ai</a>.</p>
    </article>
  );
}
