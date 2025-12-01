import { Truck, ShieldCheck, Leaf, Heart } from "lucide-react";

const features = [
    {
        name: "Farm Fresh Delivery",
        description:
            "From our farm to your fridge in less than 24 hours. We ensure maximum freshness with our cold-chain delivery.",
        icon: Truck,
    },
    {
        name: "100% Organic",
        description:
            "No antibiotics, no hormones, just pure nature. Our animals graze on pesticide-free pastures.",
        icon: Leaf,
    },
    {
        name: "Premium Quality",
        description:
            "We adhere to the strictest hygiene and quality standards to bring you the safest dairy products.",
        icon: ShieldCheck,
    },
    {
        name: "Happy Animals",
        description:
            "We believe happy animals produce better milk. Our goats and cows are treated with love and respect.",
        icon: Heart,
    },
];

export function FeaturesSection() {
    return (
        <section className="py-24 sm:py-32 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Goat Milk</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Nature's Perfect Food, Delivered
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        We are passionate about providing you with the healthiest, tastiest dairy products while caring for our environment and animals.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-foreground">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <feature.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
