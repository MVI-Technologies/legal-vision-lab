export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5511990000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
      target="_blank"
      rel="noopener"
      aria-label="Agendar consulta pelo WhatsApp"
      className="flex items-center justify-center rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform duration-300"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "16px",
        zIndex: 99999,
        width: "56px",
        height: "56px",
        backgroundColor: "#25D366",
        display: "flex",
      }}
    >
      <svg viewBox="0 0 24 24" style={{ width: "28px", height: "28px", fill: "white" }}>
        <path d="M17.5 14.3c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-1 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3M12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.3C2.2 6.5 6.6 2 12 2c2.6 0 5.1 1 7 2.9 1.9 1.9 2.9 4.3 2.9 6.9 0 5.4-4.4 9.9-9.9 9.9m8.4-18.3C18.1 1.3 15.1.1 12 .1 5.5.1.2 5.4.2 11.9c0 2.1.5 4.1 1.6 5.9L.1 24l6.3-1.7c1.8 1 3.7 1.5 5.7 1.5 6.5 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.4"/>
      </svg>
    </a>
  );
}
