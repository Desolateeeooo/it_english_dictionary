import styles from './SubscriptionCard.module.css';
import type { Subscription } from './SubscriptionCardContainer';

interface ISubscriptionCard {
  subscription: Subscription;
}

function SubscriptionCardPresentational({ subscription }: ISubscriptionCard) {
  return (
    <section className={styles.subscriptionSection}>
      <div className={styles.subscriptionCard}>
        <div className={styles.subscriptionHeader}>
          <h2 className={styles.subscriptionTitle}>Your Subscription</h2>
          <span className={styles.subscriptionBadge}>{subscription.plan}</span>
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

        <button className={styles.upgradeButton}>Upgrade Plan</button>
      </div>
    </section>
  );
}

export default SubscriptionCardPresentational;
