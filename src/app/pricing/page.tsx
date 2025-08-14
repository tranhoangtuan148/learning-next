import { Navigation } from "@/components/navigation";
import { AuroraText } from "@/components/magicui/aurora-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { MagicCard } from "@/components/magicui/magic-card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Check } from "lucide-react";

export default function PricingPage() {
    const plans = [
        {
            name: "Trial",
            price: "Free",
            period: "30 days",
            description: "Perfect for testing our platform",
            cta: "Start Free Trial",
            href: "/signup?plan=trial",
            highlighted: false,
            features: [
                "Limited to 100 orders",
                "Basic order management",
                "Community support",
                "Standard reporting",
            ],
        },
        {
            name: "Professional",
            price: "$1,000",
            period: "one-time license",
            description: "Advanced features for growing businesses",
            cta: "Get Professional",
            href: "/checkout?plan=pro",
            highlighted: true,
            features: [
                "Up to 2,500 orders",
                "AI-powered optimization",
                "Vehicle tracking system",
                "OCR document processing",
                "Priority email support",
                "Advanced analytics",
            ],
        },
        {
            name: "Enterprise",
            price: "$3,000",
            period: "one-time license",
            description: "Unlimited power for enterprise operations",
            cta: "Contact Sales",
            href: "/contact?plan=enterprise",
            highlighted: false,
            hasBeam: true,
            features: [
                "Unlimited orders",
                "All AI features included",
                "Advanced vehicle tracking",
                "OCR + document automation",
                "Custom integrations",
                "24/7 dedicated support",
                "SLA guarantee",
                "White-label options",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        Choose Your <AuroraText>Perfect</AuroraText> Plan
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Scale your transportation management with our flexible licensing options.
                        From small trials to enterprise solutions.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan) => (
                        <div key={plan.name} className="relative flex flex-col h-full">
                            {/* Popular Badge - Outside of MagicCard */}
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <MagicCard
                                className={`p-8 flex flex-col h-full ${plan.highlighted
                                    ? "ring-2 ring-primary/50 bg-gradient-to-b from-primary/5 to-transparent"
                                    : ""
                                    }`}
                                gradientColor={plan.highlighted ? "#3b82f6" : "#262626"}
                                gradientOpacity={plan.highlighted ? 0.3 : 0.8}
                            >

                                {/* Plan Header */}
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                                    <div className="mb-4">
                                        <span className="text-4xl font-bold">{plan.price}</span>
                                        <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="space-y-4 flex-grow mb-10">
                                    {plan.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="mt-1 flex-shrink-0">
                                                <Check className="h-4 w-4 text-primary" />
                                            </div>
                                            <span className="text-sm text-foreground/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>


                            </MagicCard>
                            {/* CTA Button */}
                            <div className="mt-auto  p-8 pt-8 relative bottom-20">
                                {plan.name === "Trial" ? (
                                    <RainbowButton variant="outline" className="w-full justify-center py-3">
                                        {plan.cta}
                                    </RainbowButton>
                                ) : (
                                    <RainbowButton className="w-full justify-center py-3">
                                        {plan.cta}
                                    </RainbowButton>
                                )}
                            </div>
                            {/* Border Beam for Enterprise */}
{/*                             
                                <BorderBeam
                                    className="absolute inset-0 rounded-xl"
                                    size={250}
                                    duration={12}
                                    colorFrom="#ffaa40"
                                    colorTo="#9c40ff"
                                /> */}
                          
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="text-center mt-16">
                    <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                        All plans include core TMS features. Upgrade or downgrade anytime.
                        Enterprise customers get dedicated onboarding and custom integration support.
                    </p>
                </div>
            </div>
        </div>
    );
}
