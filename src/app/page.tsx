
'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <img 
              src="/images/Muhammad Farhan Shaukat.jpg" 
              alt="Muhammad Farhan Shaukat"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                marginRight: '8px'
              }}
            />
            <span className={styles.logoText}>Farhan</span>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#home" className={activeSection === 'home' ? styles.active : ''}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? styles.active : ''}>About</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? styles.active : ''}>Skills</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? styles.active : ''}>Projects</a></li>
            <li><a href="#testimonials" className={activeSection === 'testimonials' ? styles.active : ''}>Testimonials</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? styles.active : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.greeting}>Hello, I'm</p>
            <h1 className={styles.heroName}>Muhammad Farhan Shaukat</h1>
            <h2 className={styles.heroTitle}>Full Stack Laravel Developer</h2>
            <p className={styles.heroDescription}>
              Experienced Laravel developer with over 3.5 years of expertise in building
              scalable, secure, and high-performance web applications. Passionate about clean
              code, API optimization, and delivering efficient backend solutions.
            </p>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>Available for Hire</span>
              <span className={styles.badge}>3.5+ Years Experience</span>
            </div>
            <div className={styles.heroButtons}>
              <a href="#projects" className={styles.btnPrimary}>View My Work</a>
              <a href="#contact" className={styles.btnSecondary}>Get In Touch</a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}>
              <img 
                src="/images/Muhammad Farhan Shaukat.jpg" 
                alt="Muhammad Farhan Shaukat"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>01</span>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.sectionSubtitle}>
              Full-Stack developer focused on scalable, high-performance, and secure web apps
            </p>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <div className={styles.aboutIntro}>
                <p className={styles.leadText}>
                  I’m a Full-Stack Web Developer with 3.5+ years of experience specializing in
                  Laravel and backend development. I build scalable, high-performance, and secure
                  web applications with clean, maintainable code and optimized architecture.
                </p>
                <p>
                  Passionate about solving complex problems and delivering real business value,
                  I focus on efficient APIs, robust backend systems, and clear domain logic.
                </p>
                <p>
                  I continuously enhance my skills in React.js and Next.js to stay aligned with
                  modern frontend trends and deliver seamless, end-to-end product experiences.
                </p>
              </div>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <h3>10+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className={styles.stat}>
                  <h3>10+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className={styles.stat}>
                  <h3>3.5+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>02</span>
            <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
            <p className={styles.sectionSubtitle}>
              A comprehensive toolkit for modern web development
            </p>
          </div>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>💻</div>
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Bootstrap</li>
                <li>Blade Templates</li>
              </ul>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>⚙️</div>
              <h3>Backend</h3>
              <ul>
                <li>PHP Laravel</li>
                <li>PHP CodeIgniter</li>
                <li>Node.js</li>
                <li>REST APIs</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🎨</div>
              <h3>Skills & Tools</h3>
              <ul>
                <li>GitHub</li>
                <li>Postman</li>
                <li>AJAX</li>
                <li>jQuery</li>
              </ul>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>📱</div>
              <h3>Services</h3>
              <ul>
                <li>API Optimization</li>
                <li>Performance Tuning</li>
                <li>Security</li>
                <li>Authentication/Authorization</li>
                <li>Multilingual (i18n)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>03</span>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionSubtitle}>
              A selection of projects showcasing my expertise and problem-solving approach
            </p>
          </div>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img 
                  src="/images/convertpk.png" 
                  alt="ConvertPK Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className={styles.projectBadge}>New</div>
                <div className={styles.projectOverlay}>
                  <a href="https://convertpk.com" className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>ConvertPK</h3>
                <p>ConvertPK.com is a fast and user-friendly online file conversion platform built with Next.js, allowing users to seamlessly convert PDFs, ZIPs, Base64, images, and more — all directly from their browser with a smooth and responsive experience.</p>
                <div className={styles.projectTags}>
                  <span>Node.js</span>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img 
                  src="/images/krub.png" 
                  alt="Krub.ai Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className={styles.projectBadge}>Featured</div>
                <div className={styles.projectOverlay}>
                  <a href="https://krub.ai" className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>Krub.ai</h3>
                <p>Krub enables users to join or build wholesale buying communities, connect with other businesses, share requirements and leverage collective volume to negotiate stronger bargains. It’s designed to support businesses that need access to wholesale pricing by creating collaborative purchasing groups rather than going solo.</p>
                <div className={styles.projectTags}>
                  <span>Next.js</span>
                  <span>Bootstrap</span>
                  <span>Node.js</span>
                  <span>Mongoose</span>
                </div>
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img 
                  src="/images/inventory.png" 
                  alt="Inventory Management System Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className={styles.projectBadge}>Featured</div>
                <div className={styles.projectOverlay}>
                  <a href="http://inventory.seebiz.com" className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>Inventory Management System</h3>
                <p>Developed backend business logic for inventory and accounting, including Chart of Accounts, PDF templating, and Stripe payments. Implemented Chinese translation and collaborated closely with frontend for seamless API communication.</p>
                <div className={styles.projectTags}>
                  <span>React.js</span>
                  <span>Laravel</span>
                  <span>MySQL</span>
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img 
                  src="/images/books.png" 
                  alt="Books Management System Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className={styles.projectOverlay}>
                  <a href="https://books.seebiz.com" className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>Books Management System</h3>
                <p>Built backend logic for accounting reports (Chart of Accounts, PDFs, Stripe), integrated with Inventory Management for consistent reporting, added Chinese translation, and ensured efficient API communication with the frontend.</p>
                <div className={styles.projectTags}>
                  <span>React.js</span>
                  <span>Laravel</span>
                  <span>Bootstrap</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img 
                  src="/images/expense.png" 
                  alt="Expense Management System Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className={styles.projectOverlay}>
                  <a href="https://expense.seebiz.com" className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>Expense Management System</h3>
                <p>Implemented backend logic including Chart of Accounts and Stripe integration. Built Trip and Expense modules with admin approvals and role-based access control, ensuring seamless API communication with frontend.</p>
                <div className={styles.projectTags}>
                  <span>React.js</span>
                  <span>Laravel</span>
                  <span>Bootstrap</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img 
                  src="/images/admin.png" 
                  alt="Inventory / Books / Expense Admin Panel Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className={styles.projectOverlay}>
                  <a href="https://admin-inventory.seebiz.com/" className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>Inventory / Books / Expense Admin Panel</h3>
                <p>Built a custom admin panel to manage users and organizations, enabling large-scale updates across accounts. Replaced legacy Chart of Accounts with a flexible, scalable structure tailored to user needs.</p>
                <div className={styles.projectTags}>
                  <span>Laravel</span>
                  <span>MySQL</span>
                  <span>Vue.js</span>
                  <span>Blade</span>
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img 
                  src="/images/legal.png" 
                  alt="Legal Documents Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className={styles.projectBadge}>Featured</div>
                <div className={styles.projectOverlay}>
                  <a href="#" className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>Legal Documents</h3>
                <p>Developed an admin panel for creating document templates and dynamic questionnaires, along with a user portal where users can select templates, answer related questions, and generate customized PDF documents after secure payment. Implemented backend business logic and collaborated with the frontend team to ensure smooth data flow and reliable document generation.</p>
                <div className={styles.projectTags}>
                  <span>Next.js</span>
                  <span>Bootstrap</span>
                  <span>Laravel</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img 
                  src="/images/marklab.png" 
                  alt="Marklab Doctors Portal Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className={styles.projectBadge}>Featured</div>
                <div className={styles.projectOverlay}>
                  <a href="#" className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>Marklab Doctors Portal</h3>
                <p>Developed a complete Doctor Portal allowing doctors to add patients and create medical records with prescriptions, test reports, and treatment plans. Implemented patient access to reports via patient ID, doctor record management, and secure role-based access control. Collaborated with the frontend team to ensure reliable APIs and seamless user experience.</p>
                <div className={styles.projectTags}>
                  <span>Next.js</span>
                  <span>Bootstrap</span>
                  <span>Laravel</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>04</span>
            <h2 className={styles.sectionTitle}>Client Testimonials</h2>
            <p className={styles.sectionSubtitle}>
              What clients say about working with me
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <p className={styles.testimonialText}>
                "Exceptional work from start to finish. The attention to detail and 
                commitment to quality exceeded our expectations. Highly recommend for 
                any complex web development project."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>SM</div>
                <div>
                  <div className={styles.authorName}>Sarah Mitchell</div>
                  <div className={styles.authorRole}>CEO, TechCorp Inc.</div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <p className={styles.testimonialText}>
                "Professional, reliable, and incredibly talented. Delivered our project 
                ahead of schedule with outstanding results. Will definitely work together 
                again on future projects."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>MJ</div>
                <div>
                  <div className={styles.authorName}>Michael Johnson</div>
                  <div className={styles.authorRole}>Founder, StartupHub</div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <p className={styles.testimonialText}>
                "The technical expertise and creative solutions provided were exactly 
                what we needed. The project was completed with precision and excellent 
                communication throughout the process."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>EW</div>
                <div>
                  <div className={styles.authorName}>Emily Williams</div>
                  <div className={styles.authorRole}>CTO, Digital Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>05</span>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <p className={styles.sectionSubtitle}>
              Let's discuss how I can help bring your vision to life
            </p>
          </div>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <p>
                I'm always open to discussing new projects, creative ideas, or 
                opportunities to be part of your visions. Feel free to reach out!
              </p>
              <div className={styles.contactMethods}>
                <a href="mailto:mfarhanshaukatali786@gmail.com" className={styles.contactItem}>
                  <div className={styles.contactIconWrapper}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <span>mfarhanshaukatali786@gmail.com</span>
                </a>
                <a href="#" className={styles.contactItem}>
                  <div className={styles.contactIconWrapper}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span>Lahore, Pakistan</span>
                </a>
              </div>
              <div className={styles.socialLinks}>
                <a href="https://github.com/M-Farhan-Shaukat" aria-label="GitHub" className={styles.socialLink}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/m-farhan-shaukat-9aa172219/" aria-label="LinkedIn" className={styles.socialLink}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                
              </div>
            </div>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Subject" required />
              </div>
              <div className={styles.formGroup}>
                <textarea placeholder="Your Message" rows={6} required></textarea>
              </div>
              <button type="submit" className={styles.btnPrimary}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <div className={styles.footerLogo}>
                <img 
                  src="/images/Muhammad Farhan Shaukat.jpg" 
                  alt="Muhammad Farhan Shaukat"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}
                />
                <span>Muhammad Farhan</span>
              </div>
              <p className={styles.footerTagline}>
                Full Stack Laravel Developer building scalable web solutions with passion and precision.
              </p>
            </div>
            <div className={styles.footerSection}>
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href="mailto:mfarhanshaukatali786@gmail.com">mfarhanshaukatali786@gmail.com</a>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Lahore, Pakistan</span>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h3>Connect</h3>
              <div className={styles.socialLinks}>
                <a href="https://github.com/M-Farhan-Shaukat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/m-farhan-shaukat-9aa172219/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} Muhammad Farhan Shaukat. All rights reserved.</p>
            <p>Designed & Developed with ❤️ using Next.js</p>
          </div>
        </div>
      </footer>
    </div>
  );
}