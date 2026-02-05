import { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, FileText, Clock, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Steps to Formalize a Company in Brazil - Complete Business Formation Guide",
  description:
    "Complete step-by-step guide to formalize a company in Brazil. Expert guidance through business registration, CNPJ application, permits, and legal compliance requirements.",
  keywords:
    "formalize company Brazil, steps to formalize company Brazil, business registration Brazil, company formation process Brazil",
  openGraph: {
    title:
      "Steps to Formalize a Company in Brazil - Complete Business Formation Guide",
    description:
      "Complete step-by-step guide to formalize a company in Brazil. Expert guidance through the entire business registration process.",
    url: "https://startingabusinessinbrazil.com/formalize-company-brazil",
  },
};

export default function FormalizeCompanyPage() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Business Structure",
      description:
        "Select the appropriate legal structure (MEI, ME, LTDA, SA) based on your business size, revenue projections, and liability preferences.",
      details: [
        "MEI for individual entrepreneurs (up to R$ 81,000/year)",
        "ME for small businesses (up to R$ 360,000/year)",
        "LTDA for limited liability companies",
        "SA for corporations with multiple shareholders",
      ],
    },
    {
      number: "02",
      title: "Reserve Your Company Name",
      description:
        "Check name availability and reserve your preferred company name through the Commercial Registry (Junta Comercial).",
      details: [
        "Search existing company names",
        "Submit name reservation request",
        "Receive confirmation within 24-48 hours",
        "Name reservation valid for 30 days",
      ],
    },
    {
      number: "03",
      title: "Prepare Required Documents",
      description:
        "Gather all necessary documentation including personal identification, address proof, and business-specific documents.",
      details: [
        "CPF and RG of all partners",
        "Proof of residence",
        "Business plan (if required)",
        "Articles of incorporation draft",
      ],
    },
    {
      number: "04",
      title: "Register with Commercial Registry",
      description:
        "File your company registration with the appropriate state Commercial Registry (Junta Comercial).",
      details: [
        "Submit articles of incorporation",
        "Pay registration fees (R$ 200-500)",
        "Receive commercial registration certificate",
        "Processing time: 5-15 business days",
      ],
    },
    {
      number: "05",
      title: "Obtain Your CNPJ",
      description:
        "Apply for your Brazilian tax identification number (CNPJ) with the Federal Revenue Service.",
      details: [
        "Complete CNPJ application form",
        "Submit required documents",
        "Choose appropriate tax regime",
        "Receive CNPJ certificate (usually same day)",
      ],
    },
    {
      number: "06",
      title: "Register with State and Municipal Authorities",
      description:
        "Complete registration with state tax authorities (ICMS) and municipal authorities for services tax (ISS).",
      details: [
        "State registration for goods/commerce",
        "Municipal registration for services",
        "Obtain tax identification numbers",
        "Set up tax obligations",
      ],
    },
    {
      number: "07",
      title: "Obtain Business Permits and Licenses",
      description:
        "Secure all industry-specific permits, licenses, and regulatory approvals required for your business type.",
      details: [
        "Municipal operating license (Alvará)",
        "Health permits (if applicable)",
        "Environmental licenses (if applicable)",
        "Professional licenses (if required)",
      ],
    },
    {
      number: "08",
      title: "Open Business Bank Account",
      description:
        "Open a dedicated business bank account using your CNPJ and company registration documents.",
      details: [
        "Choose appropriate bank and account type",
        "Submit company documents",
        "Initial deposit requirements",
        "Set up online banking access",
      ],
    },
  ];

  const benefits = [
    "Legal business operation in Brazil",
    "Access to business banking services",
    "Ability to issue invoices and collect payments",
    "Tax optimization opportunities",
    "Protection of personal assets",
    "Credibility with customers and suppliers",
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Steps to Formalize a Company in Brazil
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Complete step-by-step guidance through the entire process of
                  formalizing your business in Brazil, ensuring full legal
                  compliance and operational readiness.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Get Expert Help
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline">
                      View All Services
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://media.istockphoto.com/id/1572980496/photo/close-up-view-of-professional-business-woman-working-writing-notes-in-notebook.jpg?s=612x612&w=0&k=20&c=A-QTbmb7bsMXHNzD9mK1KhMVPUgvYrhm77CUyk0DUvs="
                    alt="Step-by-step guide to formalizing and registering a company in Brazil"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Formalization Process
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Follow our comprehensive 8-step process to properly formalize
                your company in Brazil and ensure full legal compliance from day
                one.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-12 gap-6 items-start">
                      <div className="lg:col-span-1">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.number}
                        </div>
                      </div>
                      <div className="lg:col-span-11">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 mb-4">{step.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {step.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Benefits of Proper Company Formalization
                </h2>
                <p className="text-gray-700 mb-8">
                  Formalizing your company in Brazil provides numerous
                  advantages that protect your business, enhance credibility,
                  and open up growth opportunities.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      100%
                    </div>
                    <div className="text-gray-600">Legal Compliance</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      30-45
                    </div>
                    <div className="text-gray-600">Days Average</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      500+
                    </div>
                    <div className="text-gray-600">Companies Formed</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      98%
                    </div>
                    <div className="text-gray-600">Success Rate</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Related Services
              </h2>
              <p className="text-gray-600">
                Explore our other business formation services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link
                      href="/obtain-cnpj-brazil"
                      className="hover:text-blue-600"
                    >
                      How to obtain a CNPJ
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Expert assistance with CNPJ registration and tax ID
                    acquisition process.
                  </p>
                  <Link href="/obtain-cnpj-brazil">
                    <Button variant="outline" size="sm">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link
                      href="/business-permit-brazil"
                      className="hover:text-blue-600"
                    >
                      How to Get a Business Permit
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Navigate the complex process of obtaining all necessary
                    business permits.
                  </p>
                  <Link href="/business-permit-brazil">
                    <Button variant="outline" size="sm">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link
                      href="/cost-start-business-brazil"
                      className="hover:text-blue-600"
                    >
                      Cost to Start Business in Brazil
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Detailed cost analysis and financial planning for your
                    business.
                  </p>
                  <Link href="/cost-start-business-brazil">
                    <Button variant="outline" size="sm">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Help Formalizing Your Company?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our experts will guide you through every step of the formalization
              process.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Professional Assistance
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
