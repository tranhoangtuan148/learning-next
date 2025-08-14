import { HeroParallax } from "@/components/hero-parallax";
import { Navigation } from "@/components/navigation";
import { products } from "@/lib/sample-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroParallax products={products} />

      {/* Additional sections */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">Built with Next.js 15 and React 19 for optimal performance</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Beautiful Design</h3>
              <p className="text-muted-foreground">Modern UI components with smooth animations</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive</h3>
              <p className="text-muted-foreground">Perfectly optimized for all devices and screen sizes</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are passionate developers creating amazing web experiences with the latest technologies.
            Our team focuses on delivering high-quality, performant, and beautiful applications that users love.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to start your next project? Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Contact Us
            </button>
            <button className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
