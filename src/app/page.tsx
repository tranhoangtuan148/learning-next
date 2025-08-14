import { HeroParallax } from "@/components/hero-parallax";
import { Navigation } from "@/components/navigation";
import { products } from "@/lib/sample-data";
// import { motion } from "motion/react";
import Link from "next/link";
import * as motion from "motion/react-client"
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Package, Truck, Car, DollarSign, Check } from "lucide-react";


export default function Home() {
  // Pixels to scroll before in-view animations trigger
  const thresholdPx = 100;
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  } as const;

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  } as const;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroParallax products={products} />

      {/* Core Features */}
      <motion.section
        id="features"
        className="py-20 px-4 bg-muted/30"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2, margin: `-${thresholdPx}px 0px -${thresholdPx}px 0px` }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true, margin: `-${thresholdPx}px 0px -${thresholdPx}px 0px` }}
          >
            Core Features
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            viewport={{ once: true, margin: `-${thresholdPx}px 0px -${thresholdPx}px 0px` }}
          >
            Everything you need to manage your transportation operations efficiently
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
          >
            <motion.div variants={item} className="text-center p-6 bg-background rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Order Management</h3>
              <p className="text-muted-foreground">Receive and manage orders from merchant partners seamlessly</p>
            </motion.div>
            <motion.div variants={item} className="text-center p-6 bg-background rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Shipment Planning</h3>
              <p className="text-muted-foreground">Optimize shipments by grouping orders for maximum efficiency</p>
            </motion.div>
            <motion.div variants={item} className="text-center p-6 bg-background rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <Car className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fleet Management</h3>
              <p className="text-muted-foreground">Manage vehicles and vendors with comprehensive tracking</p>
            </motion.div>
            <motion.div variants={item} className="text-center p-6 bg-background rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost Management</h3>
              <p className="text-muted-foreground">Track and optimize operational costs in real-time</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2, margin: `-${thresholdPx}px 0px -${thresholdPx}px 0px` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: `-${thresholdPx}px 0px -${thresholdPx}px 0px` }}
            >
              <h2 className="text-4xl font-bold mb-6">Why Choose Our TMS?</h2>
              <motion.div className="space-y-6" variants={container}>
                <motion.div variants={item} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Streamlined Operations</h3>
                    <p className="text-muted-foreground">Reduce manual work and automate your transportation workflows</p>
                  </div>
                </motion.div>
                <motion.div variants={item} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cost Optimization</h3>
                    <p className="text-muted-foreground">Minimize transportation costs through intelligent planning and routing</p>
                  </div>
                </motion.div>
                <motion.div variants={item} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Real-time Visibility</h3>
                    <p className="text-muted-foreground">Track shipments and monitor performance with live updates</p>
                  </div>
                </motion.div>
                <motion.div variants={item} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Partner Integration</h3>
                    <p className="text-muted-foreground">Seamlessly connect with merchants and vendors through our platform</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="lg:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: `-${thresholdPx}px 0px -${thresholdPx}px 0px` }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Logistics?</h3>
                <p className="text-muted-foreground mb-6">
                  Join hundreds of companies already using our TMS to optimize their transportation operations.
                </p>
                
                <RainbowButton asChild className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  <Link href="/pricing">Start Free Trial</Link>
                </RainbowButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 bg-muted/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2, margin: `-${thresholdPx}px 0px -${thresholdPx}px 0px` }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Our Platform</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our Transportation Management System is built with cutting-edge technology to provide 
            a comprehensive solution for modern logistics challenges. We empower businesses to 
            optimize their transportation operations, reduce costs, and improve customer satisfaction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Active Shipments</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get Started Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to revolutionize your transportation management? 
            Contact us to learn how our TMS can transform your logistics operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RainbowButton className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Schedule Demo
            </RainbowButton>
            <RainbowButton variant="outline" className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              Contact Sales
            </RainbowButton>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
