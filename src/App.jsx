import React from 'react';
import { useEffect, useState } from 'react';
import { Menu, X, Star, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import technologies from './data/technologies.json';

const GRADIENT = 'linear-gradient(100deg, #ff6b16 0%, #ed2b8f 52%, #9c35d9 100%)';

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Dev Stack home">
      <img src="/logo-text.png" alt="Dev Stack" />
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

  return (
    <header className="navbar">
      <div className="nav-inner">
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={21}/> : <img src="/hamburger.png" alt="" />}
        </button>
        <Brand />
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link, i) => (
            <a key={link} className={i === 0 ? 'active' : ''} href={i === 1 ? '#technologies' : `#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a href="#signin" className="signin">Sign In</a>
          <a href="#signup" className="signup">Sign Up</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <h1>Build Your Ideal<br/><span>Development Stack</span></h1>
        <p>Explore frontend, backend, database, and tooling options,<br className="desktop-break"/> compare them side by side, and put together the stack that fits your<br className="desktop-break"/> next project.</p>
        <div className="hero-buttons">
          <a href="#technologies" className="primary-btn">Explore Technologies <ArrowRight size={15}/></a>
          <a href="#about" className="secondary-btn">Learn More</a>
        </div>
      </div>
      <div className="hero-art">
        <img src="/banner-stack.png" alt="Colorful development stack illustration"/>
      </div>
    </section>
  );
}

function TechCard({ tech, selected, onAdd }) {
  return (
    <article className={`tech-card ${selected ? "selected-card" : ""}`}>
      <div className="card-top">
        <img src={tech.icon} alt="" className="tech-icon" />
        {tech.badge && <span className="badge">{tech.badge}</span>}
      </div>
      <h3>{tech.name}</h3>
      <p className="description">{tech.description}</p>
      <div className="meta">
        <span>{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="rating"><Star size={11} fill="currentColor"/> {tech.rating}</span>
      </div>
      <button className={`add-btn ${selected ? 'added' : ''}`} disabled={selected} onClick={() => onAdd(tech)}>
        {selected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  );
}

function StackPanel({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack-panel">
      <h3>Your Stack</h3>
      <p className="stack-count">{stack.length} Technology{stack.length === 1 ? '' : 's'} Selected</p>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">+</div>
          <strong>Your stack is empty</strong>
          <span>Add technologies to start building your ideal stack.</span>
        </div>
      ) : (
        <div className="stack-list">
          {stack.map(item => (
            <div className="stack-item" key={item.id}>
              <img src={item.icon} alt="" />
              <div>
                <strong>{item.name}</strong>
                <span>{item.category}</span>
              </div>
              <button aria-label={`Remove ${item.name}`} onClick={() => onRemove(item)}>×</button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button className="remove-all" onClick={onRemoveAll}>Remove All</button>
      )}
    </aside>
  );
}

function Technologies() {
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(technologies);
      setLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  const addToStack = (tech) => {
    if (stack.some(item => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack(prev => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const remove = (tech) => {
    setStack(prev => prev.filter(item => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`);
  };

  const removeAll = () => {
    setStack([]);
    toast.info('Your stack has been cleared.');
  };

  return (
    <section className="technologies" id="technologies">
      <div className="section-heading">
        <h2>Explore the <span>Technologies</span></h2>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>

      {loading ? (
        <div className="loading"><span className="spinner"/> Loading technologies...</div>
      ) : (
        <div className="tech-layout">
          <div className="tech-grid">
            {data.map(tech => (
              <TechCard key={tech.id} tech={tech} selected={stack.some(x => x.id === tech.id)} onAdd={addToStack}/>
            ))}
          </div>
          <StackPanel stack={stack} onRemove={remove} onRemoveAll={removeAll}/>
        </div>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <Brand />
          <p>Curated tools, technologies, and resources for developers building modern software.</p>
          <div className="socials">
            <a href="https://github.com/" aria-label="GitHub"><Github size={16}/></a>
            <a href="https://twitter.com/" aria-label="Twitter"><Twitter size={16}/></a>
            <a href="https://linkedin.com/" aria-label="LinkedIn"><Linkedin size={16}/></a>
          </div>
        </div>
        <div className="footer-links">
          <div><h4>PRODUCT</h4><a href="#home">Home</a><a href="#technologies">Technologies</a><a href="#projects">Projects</a></div>
          <div><h4>COMPANY</h4><a href="#about">About</a><a href="#contact">Contact</a><a href="#careers">Careers</a></div>
          <div><h4>LEGAL</h4><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Service</a></div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <Technologies/>
        <section id="projects" className="hidden-section"/>
        <section id="about" className="hidden-section"/>
      </main>
      <Footer/>
      <ToastContainer position="bottom-right" autoClose={2200} hideProgressBar theme="light"/>
    </>
  );
}
