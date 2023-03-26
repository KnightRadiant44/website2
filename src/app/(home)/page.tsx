import Article from '@/components/Article';
import Card from '@/components/Card';
import Hero from './Hero';

export default function Home() {
    return (
        <main className="relative z-10 flex h-auto w-responsive flex-col items-center justify-center">
            <Hero />
            <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                <Card headingClassName="bg-accent-blue" heading="Learn">
                    <Article>
                        The club has a major focus on education and learning. We run workshops to
                        assist students with their studies and host other educational events such as
                        talks and guest lectures.
                    </Article>
                </Card>
                <Card
                    className="md:max-lg:row-span-2 md:max-lg:my-[60%]"
                    headingClassName="bg-accent-yellow"
                    heading="Socialise"
                >
                    <Article>
                        We are primarily a social club. Events such as meet & greets, games / movies
                        nights, BBQs, and pub crawls are just some of the social events the club
                        runs each year.
                    </Article>
                </Card>
                <Card headingClassName="bg-accent-red" heading="Code">
                    <Article>
                        Coding is what we do and love. Whether you&apos;re looking for some feedback
                        on a project or have technical questions, the club is a great way to meet
                        and learn from others.
                    </Article>
                </Card>
            </section>
            <div className="h-20 w-full" />
        </main>
    );
}