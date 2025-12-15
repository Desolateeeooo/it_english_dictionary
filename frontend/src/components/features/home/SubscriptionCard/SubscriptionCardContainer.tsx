import SubscriptionCardPresentational from "./SubscriptionCardPresentational";

export type Subscription = {
	plan: string;
	expires: string;
	features: string[];
}

function SubscriptionCardContainer() {

	// Mock subscription data
	const subscription: Subscription = {
		plan: 'Free',
		expires: '2024-12-31',
		features: ['100 words daily', 'Basic search', '5 favorites limit']
	};

	return <SubscriptionCardPresentational subscription={subscription} />
}

export default SubscriptionCardContainer;