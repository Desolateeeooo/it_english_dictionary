import { GuidesSection, SearchBar, SubscriptionCard, TopicsGrid } from "../../components/features/home";
import { Footer, Header } from "../../components/layout";
import styles from "./HomePage.module.css";

function HomePage() {
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
						<SearchBar />
						<p className={styles.heroSubtitle}>
							The brand new English-Russian dictionary for <span>beginner to advanced levels</span> proficiency
						</p>
					</section>
					<SubscriptionCard />
					<TopicsGrid />
					<GuidesSection />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default HomePage;