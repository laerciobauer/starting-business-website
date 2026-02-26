import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import {
  FileText,
  Building2,
  CreditCard,
  Shield,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - Complete Business Formation Solutions for Brazil",
  description:
    "Comprehensive business consulting services for starting a company in Brazil. Company formation, CNPJ registration, business permits, legal compliance, and cost guidance from Brazilian business experts.",
  keywords:
    "business services Brazil, company formation Brazil, CNPJ registration services, business permits Brazil, Brazilian business consulting",
  openGraph: {
    title: "Services - Complete Business Formation Solutions for Brazil",
    description:
      "Comprehensive business consulting services for starting a company in Brazil. Expert guidance for all aspects of Brazilian business formation.",
    url: routes.services,
  },
  alternates: {
    canonical: routes.services,
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: FileText,
      title: "Steps to Formalize a Company in Brazil",
      description:
        "Complete step-by-step guidance through the entire process of formalizing your business in Brazil, from initial planning to final registration.",
      href: "/formalize-company-brazil",
      color: "text-blue-600",
    },
    {
      icon: Building2,
      title: "How to open a Company in Brazil",
      description:
        "Comprehensive guidance on opening a company in Brazil, including business structure selection, legal requirements, and registration procedures.",
      href: "/open-company-brazil",
      color: "text-green-600",
    },
    {
      icon: CreditCard,
      title: "How to obtain a CNPJ",
      description:
        "Expert assistance with CNPJ (Brazilian tax ID) registration, including documentation preparation and submission to federal revenue service.",
      href: "/obtain-cnpj-brazil",
      color: "text-purple-600",
    },
    {
      icon: Shield,
      title: "How to Get a Business Permit",
      description:
        "Navigate the complex process of obtaining all necessary business permits, licenses, and regulatory approvals for your industry.",
      href: "/business-permit-brazil",
      color: "text-orange-600",
    },
    {
      icon: DollarSign,
      title: "Cost to Start Business in Brazil",
      description:
        "Detailed cost analysis and financial planning for starting your business in Brazil, including all fees, taxes, and ongoing expenses.",
      href: "/cost-start-business-brazil",
      color: "text-red-600",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Services
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Comprehensive business consulting services to help you
                successfully start and establish your company in Brazil
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://www.shutterstock.com/image-photo/man-business-shaking-hands-office-600nw-2475095349.jpg"
                    alt="Comprehensive business consulting services for company formation in Brazil"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Expert Business Formation Services
                </h2>
                <p className="text-gray-700 mb-6">
                  Starting a business in Brazil involves navigating complex
                  regulations, obtaining proper documentation, and ensuring full
                  legal compliance. Our comprehensive services cover every
                  aspect of the business formation process.
                </p>
                <p className="text-gray-700 mb-6">
                  From selecting the right business structure to obtaining your
                  CNPJ and securing all necessary permits, we provide expert
                  guidance and hands-on support throughout your entrepreneurial
                  journey in Brazil.
                </p>
                <p className="text-gray-700">
                  Our experienced team has helped hundreds of entrepreneurs
                  successfully establish their businesses in Brazil, ensuring
                  compliance with all federal, state, and municipal
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose from our comprehensive range of business formation
                services tailored to your specific needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 ${service.color} mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="w-12 h-12" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link href={service.href}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-blue-50 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Services?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    100% Legal Compliance
                  </h3>
                  <p className="text-gray-700">
                    Ensure your business meets all Brazilian legal requirements
                    with our expert guidance and ongoing compliance support.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Complete Documentation
                  </h3>
                  <p className="text-gray-700">
                    We handle all paperwork, documentation, and government
                    submissions required for your business formation process.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ongoing Support
                  </h3>
                  <p className="text-gray-700">
                    Receive continued support after formation with accounting,
                    tax compliance, and business growth consulting services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Business in Brazil?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and personalized service
              recommendation.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
