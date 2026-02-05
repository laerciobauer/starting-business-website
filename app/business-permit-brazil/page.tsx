import { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  AlertCircle,
  Building,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Get a Business Permit - Brazilian Business License Guide",
  description:
    "Complete guide on how to get business permits in Brazil. Navigate licensing requirements, municipal permits, health certificates, and regulatory approvals for your Brazilian business.",
  keywords:
    "business permit Brazil, business license Brazil, alvará Brazil, municipal permit Brazil, health permit Brazil, environmental license Brazil",
  openGraph: {
    title: "How to Get a Business Permit - Brazilian Business License Guide",
    description:
      "Complete guide on obtaining all necessary business permits and licenses in Brazil for legal business operations.",
    url: "https://startingabusinessinbrazil.com/services/business-permit-brazil",
  },
};

export default function BusinessPermitPage() {
  const permitTypes = [
    {
      name: "Alvará de Funcionamento (Municipal Operating Permit)",
      description:
        "Basic municipal permit required for all businesses to operate legally",
      issuer: "Municipal government",
      timeline: "15-30 days",
      cost: "R$ 200-500",
      requirements: [
        "Company registration",
        "Property documents",
        "CNPJ certificate",
        "Floor plan/layout",
      ],
      mandatory: true,
    },
    {
      name: "Health Permit (Vigilância Sanitária)",
      description:
        "Required for food, healthcare, cosmetics, and pharmaceutical businesses",
      issuer: "Municipal/State health department",
      timeline: "30-60 days",
      cost: "R$ 300-1,000",
      requirements: [
        "Sanitary project",
        "Technical responsibility",
        "Site inspection",
        "Health compliance",
      ],
      mandatory: false,
    },
    {
      name: "Fire Safety Certificate (AVCB/CLCB)",
      description:
        "Fire safety compliance for commercial buildings and operations",
      issuer: "Fire department",
      timeline: "30-45 days",
      cost: "R$ 500-2,000",
      requirements: [
        "Fire safety project",
        "Equipment installation",
        "Safety inspection",
        "Engineering approval",
      ],
      mandatory: true,
    },
    {
      name: "Environmental License",
      description:
        "Required for businesses with potential environmental impact",
      issuer: "Environmental agency (state/federal)",
      timeline: "90-180 days",
      cost: "R$ 1,000-10,000+",
      requirements: [
        "Environmental study",
        "Impact assessment",
        "Mitigation plan",
        "Technical reports",
      ],
      mandatory: false,
    },
  ];

  const industrySpecific = [
    {
      industry: "Food & Restaurants",
      permits: [
        "Municipal operating permit",
        "Health department permit",
        "Fire safety certificate",
        "Music permit (if applicable)",
      ],
      special: "Mandatory sanitary training for all food handlers",
    },
    {
      industry: "Manufacturing",
      permits: [
        "Industrial license",
        "Environmental permit",
        "Fire safety certificate",
        "Worker safety compliance",
      ],
      special: "Environmental impact assessment may be required",
    },
    {
      industry: "Healthcare",
      permits: [
        "Health department license",
        "Professional council registration",
        "Pharmaceutical permit (if applicable)",
        "Medical waste permit",
      ],
      special: "Professional licenses for all practitioners required",
    },
    {
      industry: "Retail & Commerce",
      permits: [
        "Municipal operating permit",
        "Fire safety certificate",
        "Product-specific permits (if applicable)",
      ],
      special:
        "Additional permits for controlled products (alcohol, tobacco, etc.)",
    },
  ];

  const processSteps = [
    "Complete company registration and obtain CNPJ",
    "Identify all permits required for your business type",
    "Prepare required documentation and technical projects",
    "Submit applications to appropriate government agencies",
    "Schedule and complete mandatory inspections",
    "Address any compliance issues or requirements",
    "Receive permits and maintain compliance records",
    "Renew permits according to required schedules",
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  How to Get a Business Permit
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Navigate the complex process of obtaining all necessary
                  business permits, licenses, and regulatory approvals required
                  for legal business operations in Brazil.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-orange-600 hover:bg-orange-700"
                    >
                      Get Permit Assistance
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/services/obtain-cnpj-brazil">
                    <Button size="lg" variant="outline">
                      CNPJ First
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://www.hco.com/hubfs/International%20Business%20Compliance.webp"
                    alt="Business permits and licenses required for legal compliance in Brazil"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Permits */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Types of Business Permits
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Different types of permits are required depending on your
                business activities, location, and industry sector. Here are the
                most common permits needed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {permitTypes.map((permit, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow h-full"
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-grow">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {permit.name}
                          </h3>
                          {permit.mandatory && (
                            <span className="ml-2 px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                              Mandatory
                            </span>
                          )}
                        </div>
                        <p className="text-gray-700 text-sm mb-4">
                          {permit.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">
                          Issuer:
                        </span>
                        <p className="text-gray-600">{permit.issuer}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">
                          Timeline:
                        </span>
                        <p className="text-gray-600">{permit.timeline}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Cost:</span>
                        <p className="text-gray-600">{permit.cost}</p>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {permit.requirements.map((requirement, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry-Specific Requirements */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Industry-Specific Permit Requirements
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Different industries have specific permit and licensing
                requirements beyond the basic municipal permits.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {industrySpecific.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Building className="w-6 h-6 text-orange-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {industry.industry}
                      </h3>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Required Permits:
                      </h4>
                      <ul className="space-y-2">
                        {industry.permits.map((permit, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                            {permit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-yellow-800">
                            Special Requirement:
                          </p>
                          <p className="text-sm text-yellow-700">
                            {industry.special}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Permit Application Process
                </h2>
                <p className="text-gray-700 mb-8">
                  Follow this systematic approach to obtain all necessary
                  permits for your business operations in Brazil.
                </p>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-800">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Important Considerations
                </h2>
                <div className="space-y-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-3">
                        <Shield className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          Compliance is Mandatory
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Operating without proper permits can result in fines,
                        closure orders, and legal complications.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-3">
                        <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          Renewal Requirements
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Most permits require periodic renewal (annually or
                        bi-annually) to maintain validity.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-3">
                        <Building className="w-6 h-6 text-green-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">
                          Location Matters
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Permit requirements can vary significantly between
                        municipalities and states.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & Costs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Typical Timeline & Costs
              </h2>
              <p className="text-gray-600">
                Understanding the investment required for complete permit
                compliance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Basic Business
                  </h3>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    30-60 days
                  </div>
                  <div className="text-gray-600 mb-3">Processing time</div>
                  <div className="text-lg font-semibold text-orange-600">
                    R$ 1,000-3,000
                  </div>
                  <div className="text-sm text-gray-600">
                    Total permit costs
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Food/Health Business
                  </h3>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    60-90 days
                  </div>
                  <div className="text-gray-600 mb-3">Processing time</div>
                  <div className="text-lg font-semibold text-blue-600">
                    R$ 2,000-5,000
                  </div>
                  <div className="text-sm text-gray-600">
                    Total permit costs
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Industrial/Environmental
                  </h3>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    90-180 days
                  </div>
                  <div className="text-gray-600 mb-3">Processing time</div>
                  <div className="text-lg font-semibold text-red-600">
                    R$ 5,000-20,000+
                  </div>
                  <div className="text-sm text-gray-600">
                    Total permit costs
                  </div>
                </CardContent>
              </Card>
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
                      href="/services/formalize-company-brazil"
                      className="hover:text-orange-600"
                    >
                      Steps to Formalize a Company
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete company registration process before applying for
                    permits.
                  </p>
                  <Link href="/services/formalize-company-brazil">
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
                      href="/services/obtain-cnpj-brazil"
                      className="hover:text-orange-600"
                    >
                      How to obtain a CNPJ
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    CNPJ registration is required before applying for business
                    permits.
                  </p>
                  <Link href="/services/obtain-cnpj-brazil">
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
                      href="/services/cost-start-business-brazil"
                      className="hover:text-orange-600"
                    >
                      Cost to Start Business in Brazil
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete cost analysis including all permit and licensing
                    fees.
                  </p>
                  <Link href="/services/cost-start-business-brazil">
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
        <section className="py-16 bg-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Help with Business Permits?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Our experts will identify and obtain all permits required for your
              business type.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                Get Permit Assistance
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
