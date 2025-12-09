import { 
  Search, 
  BookOpen, 
  Database, 
  Code, 
  Server, 
  Mail, 
  MessageSquare, 
  Bug, 
  Heart, 
} from 'lucide-react';
import styles from './App.module.css';
import { Header } from './components/layout';
import SearchBarContainer from './components/features/SearchBar/SearchBarContainer';

function App() {
  // Mock topics data
  const topics = [
    { id: 1, name: 'Database', icon: <Database />, wordCount: 42 },
    { id: 2, name: 'Programming', icon: <Code />, wordCount: 68 },
    { id: 3, name: 'DevOps', icon: <Server />, wordCount: 35 },
    { id: 4, name: 'Frontend', icon: <BookOpen />, wordCount: 54 },
    { id: 5, name: 'Backend', icon: <Server />, wordCount: 47 },
    { id: 6, name: 'Network', icon: <Code />, wordCount: 29 }
  ];

  // Mock subscription data
  const subscription = {
    plan: 'Free',
    expires: '2024-12-31',
    features: ['100 words daily', 'Basic search', '5 favorites limit']
  };

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
						<SearchBarContainer />

            <p className={styles.heroSubtitle}>
              The brand new English-Russian dictionary for <span>beginner to advanced levels</span> proficiency
            </p>
          </section>

          {/* Subscription Card */}
          <section className={styles.subscriptionSection}>
            <div className={styles.subscriptionCard}>
              <div className={styles.subscriptionHeader}>
                <h2 className={styles.subscriptionTitle}>Your Subscription</h2>
                <span className={styles.subscriptionBadge}>
                  {subscription.plan}
                </span>
              </div>
              
              <p className={styles.subscriptionExpires}>
                Expires: <strong>{subscription.expires}</strong>
              </p>
              
              <ul className={styles.subscriptionFeatures}>
                {subscription.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <div className={styles.featureDot}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={styles.upgradeButton}>
                Upgrade Plan
              </button>
            </div>
          </section>

          {/* Topics Grid */}
          <section className={styles.topicsSection}>
            <h2 className={styles.topicsTitle}>Learn by Topic</h2>
            
            <div className={styles.topicsGrid}>
              {topics.map((topic) => (
                <div 
                  key={topic.id}
                  className={styles.topicCard}
                  onClick={() => console.log(`Navigating to ${topic.name} topic`)}
                >
                  <div className={styles.topicHeader}>
                    <div className={styles.topicInfo}>
                      <div className={styles.topicIcon}>
                        {topic.icon}
                      </div>
                      <h3 className={styles.topicName}>{topic.name}</h3>
                    </div>
                    <span className={styles.topicWordCount}>
                      {topic.wordCount} words
                    </span>
                  </div>
                  
                  <p className={styles.topicDescription}>
                    Essential {topic.name.toLowerCase()} terminology for developers and engineers
                  </p>
                  
                  <button className={styles.favoriteButton}>
                    <Heart />
                    <span>Add to Favorites</span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Guides Section */}
          <section className={styles.guidesSection}>
            <h2 className={styles.guidesTitle}>Glossaries & Guides</h2>
            
            <div className={styles.guidesGrid}>
              <div className={styles.guideCard}>
                <h3 className={styles.guideTitle}>IT Acronyms Guide</h3>
                <p className={styles.guideDescription}>
                  Comprehensive list of common IT acronyms and abbreviations with detailed explanations.
                </p>
                <button className={styles.guideButton}>
                  Explore Guide →
                </button>
              </div>
              
              <div className={styles.guideCard}>
                <h3 className={styles.guideTitle}>Pronunciation Guide</h3>
                <p className={styles.guideDescription}>
                  Learn how to pronounce complex technical terms with audio examples.
                </p>
                <button className={styles.guideButton}>
                  Listen & Learn →
                </button>
              </div>
            </div>
          </section>
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