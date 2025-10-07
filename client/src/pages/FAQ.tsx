import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are secured with industry-standard SSL encryption.",
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 5-7 business days. Express shipping takes 2-3 business days. Free shipping is available on orders over $50. International shipping times vary by location.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on most items. Products must be unused, in original packaging, and accompanied by proof of purchase. Original shipping charges are non-refundable unless the return is due to our error.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to select international locations. Shipping costs and delivery times vary by destination. International orders may be subject to customs fees and import duties, which are the responsibility of the customer.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website. You can also check your order status by logging into your account.",
    },
    {
      question: "What if I receive a damaged or defective item?",
      answer: "We're sorry if you received a damaged or defective product! Please contact our customer service team within 7 days of delivery with your order number and photos of the damage. We'll arrange for a replacement or full refund, including return shipping costs.",
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 24 hours of placement. After that, we may have already processed and shipped your order. Please contact customer service as soon as possible if you need to make changes.",
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes! We offer gift wrapping services for an additional fee. You can select this option during checkout. We also include a gift message card upon request.",
    },
    {
      question: "How do I use a discount code?",
      answer: "Enter your discount code in the promo code field during checkout. The discount will be applied to your order total before you complete your purchase. Discount codes cannot be combined with other offers unless specified.",
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely. We use industry-standard SSL encryption to protect your personal and payment information. We never store your complete credit card details on our servers. Please review our Privacy Policy for more details on how we handle your data.",
    },
    {
      question: "Do you have a loyalty program?",
      answer: "Yes! Create an account to automatically earn points on every purchase. Points can be redeemed for discounts on future orders. You'll also receive exclusive offers and early access to sales.",
    },
    {
      question: "What if an item is out of stock?",
      answer: "If an item is out of stock, you can sign up for email notifications to be alerted when it's back in stock. We regularly restock popular items. For availability questions, please contact our customer service team.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: "FAQ" }]} />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground">
              Find answers to common questions about shopping at NovaMart
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-8 bg-secondary rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our customer support team is here to help
            </p>
            <a href="/contact">
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Contact Support
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
