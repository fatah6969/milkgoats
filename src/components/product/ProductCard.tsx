"use client";

import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Product } from "@/types"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    const { addItem } = useCart()

    return (
        <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
            <Link href={`/products/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden bg-muted/50">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            </Link>
            <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                    <Link href={`/products/${product.id}`} className="block flex-1">
                        <h3 className="font-semibold leading-none tracking-tight hover:underline">{product.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
                    </Link>
                    <p className="font-medium">Rp. {product.price.toFixed(2)}</p>
                </div>
                <div className="mt-4">
                    <Button
                        className="w-full gap-2"
                        onClick={() => addItem(product)}
                    >
                        <Plus className="h-4 w-4" />
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}
