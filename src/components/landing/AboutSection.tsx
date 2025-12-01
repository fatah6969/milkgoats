import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
    return (
        <section className="relative isolate overflow-hidden bg-background px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                        fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                    />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-primary">Our Farm Story</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Nurturing Nature Since 2010
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-muted-foreground">
                                Nestled in the rolling hills of the countryside, our family farm has been dedicated to sustainable dairy farming for over a decade.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&q=80"
                        alt="Cows grazing in a field"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-muted-foreground lg:max-w-lg">
                            <p>
                                We started with just five goats and a dream. Today, we are proud to offer a wide range of organic dairy products, loved by families across the country.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-foreground">
                                <li className="flex gap-x-3">
                                    <span className="font-semibold text-foreground">Ethical Farming.</span> Our animals are family. They roam freely and are never treated with hormones.
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="font-semibold text-foreground">Sustainable Practices.</span> We use solar power and recycle water to minimize our environmental impact.
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="font-semibold text-foreground">Community Focused.</span> We support local farmers and schools with our fresh produce.
                                </li>
                            </ul>
                            <p className="mt-8">
                                Every bottle of milk and block of cheese tells a story of hard work, passion, and respect for nature. Thank you for being part of our journey.
                            </p>
                            <div className="mt-10">
                                <Link href="/about">
                                    <Button variant="outline">Visit Our Farm</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
