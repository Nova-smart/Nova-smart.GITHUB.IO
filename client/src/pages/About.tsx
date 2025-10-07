import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Users, Target, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: "About Us" }]} />

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About NovaMart</h1>
          <p className="text-xl text-muted-foreground">
            We're on a mission to bring you the best products that enhance your modern lifestyle.
          </p>
        </div>

        {/* Our Story */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Founded in 2020, NovaMart began with a simple vision: to make premium tech gadgets, fashion, and lifestyle products accessible to everyone. We believe that quality products shouldn't come with premium prices, and convenience shouldn't be complicated.
            </p>
            <p>
              What started as a small online store has grown into a trusted destination for thousands of customers worldwide. Our success is built on three pillars: quality products, excellent customer service, and competitive pricing.
            </p>
            <p>
              Today, we partner with leading brands and manufacturers to bring you curated collections that meet our strict quality standards. Every product in our catalog is carefully selected to ensure it delivers real value to our customers.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                We never compromise on product quality and only stock items we'd use ourselves.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Customer Focus</h3>
              <p className="text-sm text-muted-foreground">
                Your satisfaction is our priority. We're here to help every step of the way.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">
                We're building a community of savvy shoppers who value quality and innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                We continuously improve our service and offerings to exceed expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-muted-foreground mb-8">
            Behind NovaMart is a passionate team of tech enthusiasts, fashion experts, and customer service professionals dedicated to bringing you the best shopping experience possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-primary"></div>
              <h3 className="font-semibold mb-1">Sarah Johnson</h3>
              <p className="text-sm text-muted-foreground">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-primary"></div>
              <h3 className="font-semibold mb-1">Michael Chen</h3>
              <p className="text-sm text-muted-foreground">Head of Product</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-primary"></div>
              <h3 className="font-semibold mb-1">Emma Rodriguez</h3>
              <p className="text-sm text-muted-foreground">Customer Success Lead</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 gradient-primary rounded-lg text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-white/80">Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.8/5</div>
                <div className="text-white/80">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Customer Support</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
