import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import PostCard from '@/components/PostCard';
import { posts } from '@/data/posts';
import NewsletterForm from '@/components/forms/NewsletterForm';

export const metadata = {
  title: 'Blog & Reports',
  description: 'Insights from Mobot: how-to guides for testing iOS flows on real devices, research on deep linking and mobile QA, and notes from the analysts who verify defects every night.',
};

const isHowTo = (p: (typeof posts)[number]) => p.tags?.includes('How-to') ?? false;

export default function Page() {
  const featured = posts.filter((p) => p.featured).slice(0, 2);
  const howTos = posts.filter(isHowTo);
  const reports = posts.filter((p) => p.kind === 'report' || p.kind === 'guide');
  const articles = posts.filter((p) => (p.kind === 'article' || p.kind === 'case-study') && !isHowTo(p));

  return (
    <>
      <PageHero
        eyebrow="Blog & Reports"
        title="Insights from Mobot"
        intro="How-to guides for the iOS flows that break most, research on deep linking and mobile QA, and notes from the analysts who verify defects on real devices every night."
        primary={{ label: 'Get the Annual Defect Report', href: '/resources/annual-defect-report' }}
        secondary={{ label: 'See a Verified Defect Report', href: '/resources/defect-reports/sample' }}
      />

      {featured.length > 0 && (
        <section className="py-16 px-6">
          <div className="mx-auto max-w-[80rem]">
            <p className="eyebrow text-xs mb-6">Featured</p>
            <div className="grid md:grid-cols-2 gap-5">
              {featured.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <PostCard post={p} big />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {howTos.length > 0 && (
        <section id="how-to" className="py-16 px-6 section-alt border-y border-slate-200">
          <div className="mx-auto max-w-[80rem]">
            <SectionHeading
              eyebrow="How-to guides"
              title="Testing iOS flows on real devices"
              sub="Step-by-step guides from the Mobot lab: Bluetooth, biometrics, 2FA, SMS, location, backgrounding, and the tooling around them."
              className="mb-8"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {howTos.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 80}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading eyebrow="Reports & guides" title="Research and playbooks" className="mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reports.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading eyebrow="Latest posts" title="Explore the blog" className="mb-8" />
          {articles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 80}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">New posts are on the way.</p>
          )}
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-[48rem] text-center">
          <h2 className="text-2xl font-bold text-[#0a2540] mb-2">Get the latest on mobile app testing</h2>
          <p className="text-slate-600 mb-6">The 3-minute newsletter keeping 1,000+ mobile experts in the loop.</p>
          <NewsletterForm />
          <p className="text-xs text-slate-400 mt-3">Work email required — no Gmail, Yahoo, or other personal addresses.</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
