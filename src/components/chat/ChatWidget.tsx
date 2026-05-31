import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useChat } from '../../hooks/useChat';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { messages, isTyping, handleSend, userData } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [messages, isTyping, isOpen]);

  const handleWhatsAppRedirect = () => {
    const text = `Olá, meu nome é ${userData.name} e procuro atendimento sobre ${userData.topic}.`;
    window.open(`https://wa.me/5511990000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (!mounted) return null;

  const widget = (
    <>
      {/* Mobile FAB — round circle */}
      {isMobile && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Abrir atendimento"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '16px',
            zIndex: 2147483647,
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#1C1C1C',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: 'none',
            boxShadow: '0 8px 32px rgba(0,0,0,0.55)',
            padding: 0,
          }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#F5F0EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 10h.01" />
            <path d="M12 10h.01" />
            <path d="M16 10h.01" />
          </svg>
        </button>
      )}

      {/* Desktop — rectangular */}
      {!isMobile && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Abrir atendimento"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 2147483647,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#1C1C1C',
            color: '#F5F0EB',
            padding: '12px 18px',
            cursor: 'pointer',
            border: 'none',
            boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          <span>Concierge</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#F5F0EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 10h.01" />
            <path d="M12 10h.01" />
            <path d="M16 10h.01" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            zIndex: 2147483647,
            width: '100%',
            maxWidth: isMobile ? '100%' : '420px',
            height: '100dvh',
            backgroundColor: '#F5F0EB',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '-4px 0 40px rgba(0,0,0,0.2)',
            borderLeft: '1px solid rgba(28,28,28,0.1)',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', backgroundColor: '#1C1C1C', color: '#F5F0EB', flexShrink: 0 }}>
            <div>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '18px', fontWeight: 500, margin: 0 }}>Martins S.A.</h3>
              <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, margin: '4px 0 0' }}>Concierge Digital</p>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#F5F0EB', cursor: 'pointer', padding: '8px' }} aria-label="Fechar chat">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#EBE4DD' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666', backgroundColor: '#F5F0EB', padding: '4px 12px', border: '1px solid rgba(28,28,28,0.1)' }}>Hoje</span>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '85%',
                  padding: '14px 16px',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  backgroundColor: msg.sender === 'user' ? '#1C1C1C' : '#F5F0EB',
                  color: msg.sender === 'user' ? '#F5F0EB' : '#1C1C1C',
                  border: msg.sender === 'bot' ? '1px solid rgba(28,28,28,0.12)' : 'none',
                  borderRadius: msg.sender === 'user' ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
                }}>
                  {msg.text}
                </div>
                {msg.options && (
                  <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', maxWidth: '85%' }}>
                    {msg.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => msg.action === 'whatsapp' ? handleWhatsAppRedirect() : handleSend(opt)}
                        style={{
                          padding: '12px 16px',
                          fontSize: '11px',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          fontWeight: 500,
                          cursor: 'pointer',
                          border: msg.action === 'whatsapp' ? 'none' : '1px solid rgba(28,28,28,0.15)',
                          backgroundColor: msg.action === 'whatsapp' ? '#25D366' : '#F5F0EB',
                          color: msg.action === 'whatsapp' ? 'white' : '#1C1C1C',
                          textAlign: 'left',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex' }}>
                <div style={{ backgroundColor: '#F5F0EB', border: '1px solid rgba(28,28,28,0.12)', borderRadius: '4px 16px 16px 16px', padding: '14px 18px', display: 'flex', gap: '6px', alignItems: 'center' }}>
                  {[0, 1, 2].map((i) => (
                    <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#666', animation: `bounce 1.2s ${i * 0.2}s infinite` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '16px', backgroundColor: '#F5F0EB', borderTop: '1px solid rgba(28,28,28,0.1)', flexShrink: 0 }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = (e.currentTarget.elements.namedItem('message') as HTMLInputElement);
                if (input?.value.trim()) { handleSend(input.value); input.value = ''; }
              }}
              style={{ display: 'flex', gap: '8px' }}
            >
              <input
                type="text"
                name="message"
                placeholder="Digite sua mensagem..."
                autoComplete="off"
                disabled={isTyping || messages[messages.length - 1]?.action === 'whatsapp'}
                style={{ flex: 1, padding: '12px 16px', fontSize: '14px', border: '1px solid rgba(28,28,28,0.15)', backgroundColor: '#EBE4DD', color: '#1C1C1C', outline: 'none', fontFamily: 'Inter, sans-serif' }}
              />
              <button
                type="submit"
                disabled={isTyping || messages[messages.length - 1]?.action === 'whatsapp'}
                style={{ padding: '12px 16px', backgroundColor: '#1C1C1C', color: '#F5F0EB', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                aria-label="Enviar"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );

  return createPortal(widget, document.body);
}
