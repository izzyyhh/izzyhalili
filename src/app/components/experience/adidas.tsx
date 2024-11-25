import { TabsContent } from '@/components/ui/tabs'

export function Adidas() {
    return (
        <div>
            <h4 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight">
                Backend Developer Intern @{' '}
                <a className="underline" href="https://www.runtastic.com/">
                    Runtastic GmbH
                </a>
            </h4>
            <p className="mt-2 uppercase text-sm text-muted-foreground">
                August 2021 - Nov 2021
            </p>
            <div className="mt-6">
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    After a coding contest and an interview, I was happy to be
                    chosen as a backend intern by todays called adidas Digital
                    Sports Team. I completed a four-month internship at
                    Runtastic GmbH (adidas Running) as a Backend Developer.
                    During this period, I primarily worked on maintaining and
                    enhancing various microservices using Ruby. Initially, I was
                    part of the Social Tribe, contributing to the development
                    and maintenance of the social network and gamification
                    aspects of the Adidas Running and Training apps used by
                    millions of users.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    This experience provided me with valuable insights into
                    scalable web architectures and databases. I gained hands-on
                    experience with developing and optimizing microservices.
                    Additionally, I learnt a lot about Docker and Kubernetes,
                    and further developed skills in TDD, CMS, message queuing,
                    and job systems such Sidekiq.
                </p>
            </div>
        </div>
    )
}
