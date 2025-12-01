import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&q=80"
                    alt="Farm landscape"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-20"
                />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Story</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            From humble beginnings to your breakfast table, discover the passion behind Milk Goat.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
                        <div>
                            <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Nurturing Nature Since 2010
                            </h3>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                Nestled in the rolling hills of the countryside, our family farm has been dedicated to sustainable dairy farming for over a decade. We started with just five goats and a dream: to provide our community with the freshest, most nutritious milk possible.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                Today, we are proud to offer a wide range of organic dairy products, loved by families across the country. But despite our growth, our core values remain the same. We believe in ethical farming, sustainable practices, and putting quality above all else.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <Link href="/products">
                                    <Button>Shop Our Products</Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="ghost">Contact Us</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                alt="Farmers working"
                                className="aspect-[3/4] w-full rounded-2xl object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1595411425732-e69c1109f00f?w=800&q=80"
                                alt="Goat close up"
                                className="aspect-[3/4] w-full rounded-2xl object-cover mt-12"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-muted/50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-primary">Our Values</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            What We Stand For
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-foreground">
                                    Sustainability
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                    <p className="flex-auto">
                                        We use solar power, recycle water, and practice regenerative agriculture to ensure our farm gives back to the earth more than it takes.
                                    </p>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-foreground">
                                    Animal Welfare
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                    <p className="flex-auto">
                                        Our animals are family. They roam freely on open pastures, eat natural diets, and are never treated with hormones or unnecessary antibiotics.
                                    </p>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-foreground">
                                    Community
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                    <p className="flex-auto">
                                        We are committed to supporting our local community. We partner with local schools and food banks to ensure everyone has access to healthy food.
                                    </p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
