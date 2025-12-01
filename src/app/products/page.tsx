import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/products";

interface ProductsPageProps {
    searchParams: {
        search?: string;
    };
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
    const { search } = await searchParams;

    const filteredProducts = search
        ? products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        )
        : products;

    return (
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    {search ? `Search Results for "${search}"` : "All Products"}
                </h1>
                <p className="text-lg text-muted-foreground">
                    {search
                        ? `Found ${filteredProducts.length} result${filteredProducts.length === 1 ? "" : "s"}`
                        : "Browse our complete selection of fresh, organic dairy products."}
                </p>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">No products found matching your search.</p>
                </div>
            )}
        </div>
    );
}
