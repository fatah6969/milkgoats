import { Star } from "lucide-react";

const testimonials = [
    {
        content:
            "The fresh goat milk is absolutely delicious! It's become a staple in our morning routine. You can really taste the difference.",
        author: "Sarah Johnson",
        role: "Health Enthusiast",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
        content:
            "I was skeptical about ordering dairy online, but the packaging was perfect and everything arrived ice-cold. The cheese is to die for!",
        author: "Michael Chen",
        role: "Home Chef",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
        content:
            "Finally, a source for organic milk that I can trust. My kids love the yogurt, and I love knowing it's free from hormones.",
        author: "Emily Davis",
        role: "Mother of 3",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
];

export function Testimonials() {
    return (
        <section className="bg-background py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Loved by Families Everywhere
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.author} className="rounded-2xl bg-muted/50 p-8 text-sm leading-6">
                                <div className="flex gap-x-1 text-primary">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
                                    ))}
                                </div>
                                <blockquote className="mt-6 text-foreground">
                                    <p>"{testimonial.content}"</p>
                                </blockquote>
                                <div className="mt-6 flex items-center gap-x-4">
                                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.avatar} alt="" />
                                    <div>
                                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                                        <div className="text-muted-foreground">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
