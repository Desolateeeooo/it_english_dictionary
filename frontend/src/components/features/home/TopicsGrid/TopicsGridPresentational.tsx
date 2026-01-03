import { Heart } from 'lucide-react';
import styles from './TopicsGrid.module.css';
import type { Topic } from './TopicsGridContainer';

interface ITopicsGrid {
  topics: Topic[];
}

function TopicsGridPresentational({ topics }: ITopicsGrid) {
  return (
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
                <div className={styles.topicIcon}>{topic.icon}</div>
                <h3 className={styles.topicName}>{topic.name}</h3>
              </div>
              <span className={styles.topicWordCount}>{topic.wordCount} words</span>
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
  );
}

export default TopicsGridPresentational;
