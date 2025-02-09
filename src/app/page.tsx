import {
  Contributors,
  Footer,
  FrequentlyAskedQuestions,
  Hero,
  Navbar,
  UserReview
} from '@/components/Homepage';
import { ScatteredDotsBg } from '@/components/shared';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <UserReview />
      <div className="relative">
        <ScatteredDotsBg />
        <FrequentlyAskedQuestions />
        <Contributors />
      </div>
      <Footer />
    </main>
  );
}
