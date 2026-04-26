"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function ProductsPage() {
  return (
    <ThemeProvider 
      defaultButtonVariant="text-stagger" 
      defaultTextAnimation="entrance-slide" 
      borderRadius="rounded" 
      contentWidth="medium" 
      sizing="medium" 
      background="circleGradient" 
      cardStyle="glass-elevated" 
      primaryButtonStyle="gradient" 
      secondaryButtonStyle="glass" 
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
            navItems={[
                { name: "Home", id: "/" },
                { name: "Products", id: "/products" },
                { name: "About", id: "/#about" },
                { name: "Services", id: "/#services" },
                { name: "Contact", id: "/#contact" },
            ]}
            brandName="Delightness"
        />
        <div id="hero" data-section="hero">
          <HeroBillboardGallery
            title="Premium Travel Packages"
            description="Discover curated journeys designed for the modern explorer."
            mediaItems={[
                { imageSrc: "http://img.b2bpic.net/free-photo/tropical-beach-with-waterbungalows-maldives_505751-5735.jpg" },
                { imageSrc: "http://img.b2bpic.net/free-photo/vertical-view-woman-chair-lift-french-alps-europe_268835-3601.jpg" },
                { imageSrc: "http://img.b2bpic.net/free-photo/woman-swimming-pool-jungle-view_1157-33596.jpg" }
            ]}
            background={{ variant: "radial-gradient" }}
          />
        </div>
        <div id="pricing" data-section="pricing">
            <PricingCardThree
                title="Pick Your Adventure"
                description="Flexible packages to match your travel style."
                animationType="slide-up"
                textboxLayout="default"
                useInvertedBackground={false}
                plans={[
                    { id: "basic", name: "Explorer", price: "$1,500", features: ["Standard stay", "Basic tours"], buttons: [{ text: "Select" }] },
                    { id: "pro", name: "Connoisseur", price: "$3,000", features: ["Luxury stay", "Private tours", "Concierge"], buttons: [{ text: "Select" }] }
                ]}
            />
        </div>
        <div id="faq" data-section="faq">
            <FaqSplitText
                sideTitle="Travel Inquiries"
                sideDescription="Everything you need to know about our services."
                faqsAnimation="slide-up"
                useInvertedBackground={true}
                faqs={[
                    { id: "1", title: "How do I book?", content: "Simply reach out via our contact page." },
                    { id: "2", title: "Are flights included?", content: "Flights can be arranged as part of our full concierge service." }
                ]}
            />
        </div>
        <div id="footer" data-section="footer">
            <FooterMedia 
                logoText="Delightness"
                imageSrc="http://img.b2bpic.net/free-photo/indoor-design-luxury-resort_23-2150497272.jpg"
                columns={[{ items: [{ label: "Home", href: "/" }] }]}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}