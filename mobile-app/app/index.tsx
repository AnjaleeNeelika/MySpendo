import { Redirect } from 'expo-router';

export default function Index() {
  // TODO: Add logic to check if onboarding/auth is done
  // For now, always redirect to onboarding
  return <Redirect href="/(onboarding)" />;
}
