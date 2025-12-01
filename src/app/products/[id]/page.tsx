import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { AddToCartButton } from "@/components/product/AddToCartButton";


interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return notFound();
    }

    return (
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
                {/* Image Gallery */}
                <div className="aspect-square overflow-hidden rounded-lg bg-muted/50">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                    <div className="mb-6">
                        <Badge variant="secondary" className="mb-4">
                            {product.category}
                        </Badge>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-medium text-primary">
                            Rp. {product.price.toFixed(2)}
                        </p>
                    </div>

                    <div className="prose prose-neutral dark:prose-invert max-w-none mb-8">
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    <div className="mt-auto pt-6 border-t">
                        <AddToCartButton product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}
