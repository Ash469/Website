import React, { useState, useRef, useEffect } from 'react';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Developer CLI v2.4.0. Type "help" for a list of available commands.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'cmd', text: cmd }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available CLI Commands:
  • help      - Display this command menu
  • about     - Developer background & engineering philosophy
  • skills    - High-level tech stack breakdown
  • projects  - Summary of featured projects
  • contact   - Direct email & social links
  • whoami    - Display session identity
  • clear     - Clear terminal buffer`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: 'Software Engineer specializing in scalable full-stack applications, microservices, cloud architecture, and high-performance web experiences. Driven by clean code and system resilience.'
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: 'Languages & Frameworks: JavaScript (ES6+), TypeScript, React, Next.js, Python, FastAPI, Node.js, Express\nDatabases & DevOps: PostgreSQL, MongoDB, Redis, Prisma, Docker, AWS S3/Lambda, CI/CD Actions'
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: '1. DevPulse Analytics Platform (React, TS, Node, PostgreSQL)\n2. CloudVault Object Storage Engine (Node Streams, AWS S3, Redis)\n3. Nexus AI Workflow Studio (React Flow, Python, FastAPI)\n4. OmniCommerce E-Store (Next.js, Stripe, GraphQL)'
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: 'Email: hello@rayhan.dev | GitHub: github.com/rayhan | LinkedIn: linkedin.com/in/rayhan'
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: 'guest@rayhan-dev-portfolio ~ [Authorized Visitor Session]'
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'output',
          text: `Command not recognized: "${cmd}". Type "help" to view valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="terminal-section">
      <div className="terminal-window">
        <div className="terminal-titlebar">
          <div className="terminal-window-dots">
            <span className="w-dot"></span>
            <span className="w-dot"></span>
            <span className="w-dot"></span>
          </div>
          <div className="terminal-title-text">bash — developer-cli ~ 80x24</div>
          <div style={{ width: '40px' }}></div>
        </div>

        <div className="terminal-content-area" ref={bodyRef}>
          <div className="t-welcome-msg">
            Type <strong>help</strong>, <strong>skills</strong>, <strong>projects</strong>, or <strong>contact</strong> below:
          </div>

          {history.map((item, idx) => (
            <div key={idx} className={item.type === 'cmd' ? 't-line' : 't-output-msg'}>
              {item.type === 'cmd' ? (
                <>
                  <span className="t-prompt-symbol">visitor@dev-cli:~$</span>
                  <span>{item.text}</span>
                </>
              ) : (
                <span>{item.text}</span>
              )}
            </div>
          ))}

          <form onSubmit={handleCommand} className="t-input-form">
            <span className="t-prompt-symbol">visitor@dev-cli:~$</span>
            <input 
              type="text" 
              className="t-input-field" 
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type a command..."
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
