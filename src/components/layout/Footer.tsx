import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background pt-16 pb-8">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div>
                        <span className="text-xl font-bold tracking-tight">Goat Milk</span>
                        <p className="mt-4 text-sm leading-6 text-muted-foreground">
                            Premium organic dairy products delivered fresh from our farm to your table. Nurturing nature since 2010.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-foreground">Shop</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li>
                                <Link href="/products?category=milk" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                                    Fresh Milk
                                </Link>
                            </li>
                            <li>
                                <Link href="/products?category=cheese" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                                    Artisanal Cheese
                                </Link>
                            </li>
                            <li>
                                <Link href="/products?category=yogurt" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                                    Greek Yogurt
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                                    All Products
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li>
                                <Link href="/about" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                                    Sustainability
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-foreground">Subscribe to our newsletter</h3>
                        <p className="mt-4 text-sm leading-6 text-muted-foreground">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                        <form className="mt-6 sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <Input
                                type="email"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                required
                                placeholder="Enter your email"
                                className="w-full min-w-0"
                            />
                            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                                <Button type="submit">Subscribe</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-16 border-t border-border/40 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-muted-foreground">
                        &copy; 2024 Goat Milk. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
