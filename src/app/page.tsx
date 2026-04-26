"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "home" },
        { name: "Products", id: "/products" },
        { name: "About", id: "about" },
        { name: "Services", id: "services" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Delightness"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{ variant: "radial-gradient" }}
      title="Travel in Luxury"
      description="Crafting unforgettable memories for the modern traveler. Experience the world with unmatched elegance, bespoke comfort, and professional guidance."
      testimonials={[
        { name: "Amina Khan", handle: "@travel_enthusiast", testimonial: "100% recommended! My journey with Delightness was flawless.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-traveler-man-with-blue-suitcase-looking-confident-smiling-with-happy-face-ready-travel-standing-white-background_141793-24113.jpg" },
        { name: "Elena Rossi", handle: "@elena_globes", testimonial: "A truly bespoke service that exceeded every expectation.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/woman-waving-with-copy-space_23-2148631403.jpg" },
        { name: "Marcus Thorne", handle: "@mthorne", testimonial: "Luxury redefined. Every detail of my trip was perfection.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-blonde-woman-holding-vintage-camera-sticking-tongue-out-happy-with-funny-expression_839833-3025.jpg" },
        { name: "Sarah Jenkins", handle: "@sjenkins_travel", testimonial: "The best travel agency experience I have ever had.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/photo-smiling-cheerful-female-tourist-feels-good-from-stroll-across-city-wears-stylish-headgear-striped-jumper_273609-25751.jpg" },
        { name: "David Wu", handle: "@dwu_wander", testimonial: "Seamless, elegant, and professional from start to finish.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-posing-new-town_23-2148631400.jpg" },
      ]}
      buttons={[{ text: "Explore Products", href: "/products" }, { text: "Book Now", href: "#contact" }]}
      imageSrc="http://img.b2bpic.net/free-photo/female-tourist-leaning-boat-travel-near-cliff_23-2148153858.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Unforgettable Memories"
      description="At Delightness Tours & Travels, we believe travel is more than a vacation—it is an art. We curate exclusive, high-end experiences that allow you to explore the world with ease, grace, and total peace of mind."
      imageSrc="http://img.b2bpic.net/free-photo/modern-sauna-with-panoramic-windows-wooden-design_169016-70021.jpg"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      title="Destinations in Northern Pakistan"
      description="Discover the breathtaking beauty and serenity of the Northern mountains."
      features={[
        { 
            title: "Hunza Valley", 
            description: "Experience the breathtaking views and rich culture of the heart of Hunza.", 
            imageSrc: "http://img.b2bpic.net/free-photo/landscape-beautiful-valley-with-mountains_23-2148819448.jpg", 
            titleImageSrc: "", 
            buttonText: "Explore"
        },
        { 
            title: "Skardu", 
            description: "Discover high-altitude lakes and stunning rugged landscapes.", 
            imageSrc: "http://img.b2bpic.net/free-photo/view-beautiful-mountain-landscape_23-2148819472.jpg", 
            titleImageSrc: "", 
            buttonText: "Explore"
        },
        { 
            title: "Naran Kaghan", 
            description: "Home to crystal clear lakes and lush green valleys.", 
            imageSrc: "http://img.b2bpic.net/free-photo/mountain-lake-reflection_23-2148819420.jpg", 
            titleImageSrc: "", 
            buttonText: "Explore"
        }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{ variant: "radial-gradient" }}
      tag="Let's Travel"
      title="Start Your Luxury Journey"
      description="We are available 24/7. Reach out to us at I-8 Markaz, Islamabad, Pakistan or via phone at +92 314 0526968."
      buttons={[{ text: "WhatsApp Us", href: "https://wa.me/923140526968" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Services", href: "#services" }] },
        { title: "Contact", items: [{ label: "+92 314 0526968", href: "tel:+923140526968" }, { label: "I-8 Markaz, Islamabad", href: "#contact" }] },
        { title: "Availability", items: [{ label: "Open 24/7", href: "#" }] },
      ]}
      bottomLeftText="© 2024 Delightness Tours & Travels"
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}