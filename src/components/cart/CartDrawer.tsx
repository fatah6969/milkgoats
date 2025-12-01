"use client";

import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function CartDrawer() {
    const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <div className="relative z-50 w-full max-w-md border-l bg-background p-6 shadow-xl transition-transform duration-300 ease-in-out animate-in slide-in-from-right sm:max-w-lg">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold">Shopping Cart</h2>
                        <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </div>

                    <div className="flex-1 overflow-y-auto -mx-6 px-6">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                                <div className="text-muted-foreground">Your cart is empty</div>
                                <Button variant="outline" onClick={() => setIsCartOpen(false)}>
                                    Continue Shopping
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-muted/50">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={96}
                                                height={96}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col">
                                            <div className="flex justify-between text-base font-medium">
                                                <h3 className="line-clamp-2 pr-4">{item.name}</h3>
                                                <p className="ml-4">Rp. {(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-muted-foreground">{item.category}</p>

                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center gap-2 border rounded-md p-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6 rounded-sm"
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </Button>
                                                    <span className="w-4 text-center text-sm">{item.quantity}</span>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6 rounded-sm"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-destructive hover:text-destructive/90"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    <Trash2 className="h-4 w-4 mr-2" />
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {items.length > 0 && (
                        <div className="border-t pt-6 mt-6 space-y-4">
                            <div className="flex justify-between text-base font-medium">
                                <p>Subtotal</p>
                                <p>Rp. {totalPrice.toFixed(2)}</p>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Shipping and taxes calculated at checkout.
                            </p>
                            <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                                <Button className="w-full" size="lg">
                                    Checkout
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
