import { TabsContent } from '@/components/ui/tabs'

export function ArmedForces() {
    return (
        <div>
            <h4 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight">
                Cyber Soldier @
                <a className="underline" href="https://www.bundesheer.at/en/">
                    Austrian Armed Forces
                </a>
            </h4>
            <p className="mt-2 uppercase text-sm text-muted-foreground">
                OCT 2019 - MAR 2020
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                During my compulsory military service as a cyber soldier, which
                spanned six months, I developed JavaScript projects, taught
                newcomers IT security basics, and enhanced both my presentation
                and programming skills. Prior to service, I expressed my
                interest in the IT field, which led to my role as a cyber
                soldier after completing basic training. I was also responsible
                for wiring up various components and participated the Windows 10
                rollout project in Vienna.
            </p>
        </div>
    )
}
