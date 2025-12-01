"use client";

import Link from "next/link"
import { ShoppingBag, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useCart } from "@/context/CartContext"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect, Suspense } from "react"

function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setSearchQuery(searchParams.get("search") || "");
    }, [searchParams]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
        } else {
            router.push("/products");
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative hidden sm:block w-full max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </form>
    );
}

export function Navbar() {
    const { totalItems, setIsCartOpen } = useCart();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold tracking-tight">Goat Milk</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="/products" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Products
                        </Link>
                        <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            About
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4 flex-1 justify-end">
                    <Suspense fallback={<div className="w-full max-w-xs h-10" />}>
                        <SearchBar />
                    </Suspense>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative"
                        aria-label="Open cart"
                        onClick={() => setIsCartOpen(true)}
                    >
                        <ShoppingBag className="h-5 w-5" />
                        {totalItems > 0 && (
                            <Badge variant="default" className="absolute -right-1 -top-1 h-5 w-5 justify-center rounded-full p-0 text-[10px]">
                                {totalItems}
                            </Badge>
                        )}
                    </Button>
                </div>
            </div>
        </header>
    )
}
