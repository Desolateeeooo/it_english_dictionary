import { 
  Mail, 
  MessageSquare, 
  Bug, 
} from 'lucide-react';
import styles from './App.module.css';
import { Header } from './components/layout';
import { GuidesSection, SearchBar, SubscriptionCard, TopicsGrid } from './components/features';

function App() {
  return (
    <div className={styles.container}>
			<Header />

      {/* ===== MAIN CONTENT ===== */}
      <main className={styles.main}>
        <div className={styles.mainContent}>
          
          {/* Hero Section */}
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>
              English-Russian Dictionary for On-Demand IT Vocabulary
            </h1>
            
            {/* Search Bar */}
						<SearchBar/>

            <p className={styles.heroSubtitle}>
              The brand new English-Russian dictionary for <span>beginner to advanced levels</span> proficiency
            </p>
          </section>

          {/* Subscription Card */}
					<SubscriptionCard />

          {/* Topics Grid */}
					<TopicsGrid />

          {/* Guides Section */}
					<GuidesSection />
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            {/* Company Info */}
            <div className={styles.footerColumn}>
              <h3>ITEng Dictionary</h3>
              <p>Your trusted companion for IT terminology learning.</p>
            </div>
            
            {/* Support Links */}
            <div className={styles.footerColumn}>
              <h3>Support</h3>
              <ul className={styles.footerList}>
                <li>
                  <button>
                    <Mail />
                    <span>Contact Us</span>
                  </button>
                </li>
                <li>
                  <button>
                    <MessageSquare />
                    <span>Feedback</span>
                  </button>
                </li>
                <li>
                  <button>
                    <Bug />
                    <span>Report Bugs</span>
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Legal Links */}
            <div className={styles.footerColumn}>
              <h3>Legal</h3>
              <ul className={styles.footerList}>
                <li><button>Privacy Policy</button></li>
                <li><button>Terms of Service</button></li>
                <li><button>Cookie Policy</button></li>
              </ul>
            </div>
            
            {/* Social Media */}
            <div className={styles.footerColumn}>
              <h3>Connect</h3>
              <div className={styles.socialButtons}>
                <button className={styles.socialButton}>F</button>
                <button className={styles.socialButton}>T</button>
                <button className={styles.socialButton}>G</button>
              </div>
            </div>
          </div>
          
          <div className={styles.copyright}>
            <p>© 2024 ITEng Dictionary. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;