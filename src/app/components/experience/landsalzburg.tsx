import { TabsContent } from '@/components/ui/tabs'

export function LandSalzburg() {
    return (
        <div>
            <h4 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight">
                Software Engineer @{' '}
                <a className="underline" href="https://www.salzburg.gv.at/">
                    Land Salzburg
                </a>
            </h4>
            <p className="mt-2 uppercase text-sm text-muted-foreground">
                March 2025 - Now
            </p>
            <div className="mt-6">
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    I work as a software engineer at Land Salzburg, developing
                    eGovernment solutions using Java, Spring, and React. My work
                    focuses on building features for citizen requests, legal
                    processes, and other government services.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    In this role, I build and maintain web applications, work
                    with databases, and collaborate on team projects to deliver
                    digital services to citizens.
                </p>
            </div>
        </div>
    )
}
