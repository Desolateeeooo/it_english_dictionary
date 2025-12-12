import styles from "./GuidesSection.module.css";

function GuidesSectionPresentational() {
	return (
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
	);
}

export default GuidesSectionPresentational;