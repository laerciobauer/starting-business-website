import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import {
  CheckCircle,
  ArrowRight,
  CreditCard,
  Clock,
  FileText,
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to obtain a CNPJ - Brazilian Tax ID Registration Guide",
  description:
    "Complete guide on how to obtain a CNPJ in Brazil. Expert assistance with Brazilian tax ID registration, documentation requirements, and step-by-step application process.",
  keywords:
    "how to obtain CNPJ, CNPJ registration Brazil, Brazilian tax ID, CNPJ application process, Federal Revenue Service Brazil",
  openGraph: {
    title: "How to obtain a CNPJ - Brazilian Tax ID Registration Guide",
    description:
      "Complete guide on how to obtain a CNPJ in Brazil. Expert assistance with Brazilian tax ID registration and application process.",
    url: routes.obtain,
  },
  alternates: {
    canonical: routes.obtain,
  },
};

export default function ObtainCNPJPage() {
  const cnpjSteps = [
    {
      number: "01",
      title: "Complete Company Registration",
      description:
        "First, register your company with the Commercial Registry (Junta Comercial) and obtain your commercial registration certificate.",
      requirements: [
        "Articles of incorporation",
        "Commercial registry filing",
        "State registry completion",
        "Registration certificate obtained",
      ],
    },
    {
      number: "02",
      title: "Prepare Required Documents",
      description:
        "Gather all necessary documentation for the CNPJ application, including personal and business documents.",
      requirements: [
        "CPF and RG of all partners",
        "Proof of residence (recent)",
        "Company articles of incorporation",
        "Commercial registration certificate",
      ],
    },
    {
      number: "03",
      title: "Choose Tax Regime",
      description:
        "Select the appropriate tax regime for your business: Simples Nacional, Lucro Presumido, or Lucro Real.",
      requirements: [
        "Revenue projections analysis",
        "Business activity classification",
        "Tax optimization evaluation",
        "Professional tax consultation",
      ],
    },
    {
      number: "04",
      title: "Access Federal Revenue Portal",
      description:
        "Use the Federal Revenue Service online portal to begin your CNPJ application process.",
      requirements: [
        "Digital certificate (if required)",
        "Portal account creation",
        "Form completion online",
        "Document upload preparation",
      ],
    },
    {
      number: "05",
      title: "Complete CNPJ Application",
      description:
        "Fill out the complete CNPJ application form with accurate business and partner information.",
      requirements: [
        "Business activity codes (CNAE)",
        "Company address details",
        "Partner information entry",
        "Tax regime selection",
      ],
    },
    {
      number: "06",
      title: "Submit and Receive CNPJ",
      description:
        "Submit your application and receive your CNPJ certificate, typically on the same day for most business types.",
      requirements: [
        "Application review",
        "Document verification",
        "CNPJ certificate generation",
        "Registration confirmation",
      ],
    },
  ];

  const documentsList = [
    "CPF (tax ID) of all company partners",
    "RG (identification document) of all partners",
    "Proof of residence for all partners (recent utility bill)",
    "Company articles of incorporation",
    "Commercial registry certificate (from Junta Comercial)",
    "Business address documentation",
    "CNAE codes (business activity classification)",
    "Tax regime selection documentation",
  ];

  const taxRegimes = [
    {
      name: "Simples Nacional",
      description: "Simplified tax regime for small businesses",
      eligibility: "Revenue up to R$ 4.8 million/year",
      benefits: [
        "Single monthly payment",
        "Reduced tax rates",
        "Simplified bookkeeping",
        "Less bureaucracy",
      ],
      rates: "4% to 19.5% (varies by activity and revenue)",
    },
    {
      name: "Lucro Presumido",
      description: "Presumed profit taxation system",
      eligibility: "Revenue up to R$ 78 million/year",
      benefits: [
        "Quarterly tax payments",
        "Simplified profit calculation",
        "Predictable tax burden",
        "Less complex accounting",
      ],
      rates: "13.33% to 16.33% (varies by activity)",
    },
    {
      name: "Lucro Real",
      description: "Real profit taxation based on actual results",
      eligibility: "Any revenue level (mandatory >R$ 78M)",
      benefits: [
        "Tax based on real profit",
        "Loss compensation allowed",
        "More accurate taxation",
        "Better for loss periods",
      ],
      rates: "15% to 25% (plus additional taxes)",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  How to obtain a CNPJ
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Expert assistance with CNPJ (Brazilian tax ID) registration,
                  including documentation preparation, tax regime selection, and
                  submission to the Federal Revenue Service.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      Get CNPJ Assistance
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/formalize-company-brazil">
                    <Button size="lg" variant="outline">
                      Company Formation
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://lh6.googleusercontent.com/4ez3FYTsMEB5hhWPwUR9DDIDdwv6pmSm__XKCLJN0y1_2nCltQ1Lh42kpT5bR6f2ZeuQ7yNizQH5akmBX_BmHiaarG6JoY7hJhkhQYKVK5BAn9qcJ8musey56ZOGR5_ukLC_Kndpc_5i4lyLA32o6ss"
                    alt="How to obtain CNPJ registration number for your Brazilian company"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is CNPJ */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is CNPJ?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                CNPJ (Cadastro Nacional da Pessoa Jurídica) is the Brazilian
                federal tax ID number required for all companies operating in
                Brazil. It's essential for legal business operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <CreditCard className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Tax Identification
                  </h3>
                  <p className="text-gray-700">
                    Unique 14-digit number that identifies your business for tax
                    purposes and government interactions in Brazil.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Legal Requirement
                  </h3>
                  <p className="text-gray-700">
                    Mandatory for all Brazilian companies to issue invoices,
                    open business accounts, and conduct legal business
                    operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Fast Processing
                  </h3>
                  <p className="text-gray-700">
                    CNPJ applications are typically processed and approved on
                    the same day when all requirements are met.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CNPJ Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                CNPJ Application Process
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Follow these steps to successfully obtain your CNPJ and
                establish your business tax identification in Brazil.
              </p>
            </div>

            <div className="space-y-8">
              {cnpjSteps.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-12 gap-6 items-start">
                      <div className="lg:col-span-1">
                        <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.number}
                        </div>
                      </div>
                      <div className="lg:col-span-11">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 mb-4">{step.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {step.requirements.map((requirement, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-sm">{requirement}</span>
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

        {/* Required Documents */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Required Documents
                </h2>
                <p className="text-gray-700 mb-8">
                  Ensure you have all necessary documentation prepared before
                  starting your CNPJ application to avoid delays in the process.
                </p>
                <div className="space-y-3">
                  {documentsList.map((document, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-800">{document}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Processing Timeline
                </h2>
                <div className="space-y-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-3">
                        <Clock className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          Same Day Processing
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">
                        Most CNPJ applications are processed immediately when
                        all documents are correct.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-3">
                        <FileText className="w-6 h-6 text-green-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          Prerequisite: Company Registration
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">
                        Commercial registry must be completed first (5-15
                        business days).
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-3">
                        <CreditCard className="w-6 h-6 text-purple-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          No Application Fee
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">
                        CNPJ application is free when submitted through
                        government portal.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Regimes */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tax Regime Selection
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Choose the right tax regime during your CNPJ application to
                optimize your tax burden and compliance requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {taxRegimes.map((regime, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow h-full"
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {regime.name}
                      </h3>
                      <p className="text-gray-700 mb-4">{regime.description}</p>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Eligibility:
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          {regime.eligibility}
                        </p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Key Benefits:
                        </h4>
                        <ul className="space-y-1">
                          {regime.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-gray-900">
                          Tax Rates:
                        </p>
                        <p className="text-sm text-gray-700">{regime.rates}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                Complete your business setup with our additional services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link
                      href="/open-company-brazil"
                      className="hover:text-purple-600"
                    >
                      How to open a Company in Brazil
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete guide on business formation and company
                    registration process.
                  </p>
                  <Link href="/open-company-brazil">
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
                      className="hover:text-purple-600"
                    >
                      How to Get a Business Permit
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Navigate the permit and licensing requirements after CNPJ
                    registration.
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
                      className="hover:text-purple-600"
                    >
                      Cost to Start Business in Brazil
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Understand all costs involved in business formation and CNPJ
                    registration.
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
        <section className="py-16 bg-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Help with Your CNPJ Application?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Our experts will handle your CNPJ registration process from start
              to finish.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Get CNPJ Assistance
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
