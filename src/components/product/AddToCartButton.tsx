"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { Plus } from "lucide-react";

export function AddToCartButton({ product }: { product: Product }) {
    const { addItem } = useCart();

    return (
        <Button size="lg" className="w-full sm:w-auto gap-2" onClick={() => addItem(product)}>
            <Plus className="h-5 w-5" />
            Add to Cart
        </Button>
    );
}
