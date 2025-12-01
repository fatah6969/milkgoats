import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/products";
import { Hero } from "@/components/landing/Hero";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { Testimonials } from "@/components/landing/Testimonials";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Show only first 3 products as featured
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Features Section with subtle background */}
      <div className="bg-muted/30">
        <FeaturesSection />
      </div>

      {/* Featured Products Section */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our best-selling dairy products, freshly sourced from our farm
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/products">
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                View All Products <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with background */}
      <div className="bg-muted/30">
        <AboutSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-background">
        <Testimonials />
      </div>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
              Ready to Experience Farm-Fresh Goodness?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of happy customers who trust us for their daily dairy needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="w-full sm:w-auto shadow-lg">
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
