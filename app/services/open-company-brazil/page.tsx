
import { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Building2, Users, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to open a Company in Brazil - Complete Business Opening Guide',
  description: 'Complete guide on how to open a company in Brazil. Expert guidance on business structures, legal requirements, registration procedures, and compliance for starting your Brazilian company.',
  keywords: 'how to open company Brazil, open business Brazil, start company Brazil, business registration Brazil, company formation Brazil',
  openGraph: {
    title: 'How to open a Company in Brazil - Complete Business Opening Guide',
    description: 'Complete guide on how to open a company in Brazil. Expert guidance on business structures and legal requirements.',
    url: 'https://startingabusinessinbrazil.com/services/open-company-brazil',
  }
}

export default function OpenCompanyPage() {
  const businessTypes = [
    {
      name: 'MEI (Microempreendedor Individual)',
      description: 'For individual entrepreneurs with revenue up to R$ 81,000/year',
      features: ['Free registration', 'Simplified taxation', 'One employee allowed', 'Monthly tax: R$ 71-76'],
      ideal: 'Freelancers, consultants, small service providers'
    },
    {
      name: 'ME (Microempresa)',
      description: 'Small businesses with revenue up to R$ 360,000/year',
      features: ['Low registration costs', 'Simplified taxation option', 'Multiple employees', 'Accounting required'],
      ideal: 'Small retail, services, manufacturing'
    },
    {
      name: 'LTDA (Sociedade Limitada)',
      description: 'Limited liability company with 2+ partners',
      features: ['Limited liability protection', 'Flexible management', 'Capital requirements', 'Full accounting'],
      ideal: 'Medium businesses, partnerships, investment projects'
    },
    {
      name: 'SA (Sociedade Anônima)',
      description: 'Corporation suitable for large businesses',
      features: ['Public or private options', 'Share-based ownership', 'Board of directors', 'Complex governance'],
      ideal: 'Large enterprises, public companies, investors'
    }
  ]

  const openingSteps = [
    'Define your business structure and partners',
    'Choose and reserve your company name',
    'Prepare articles of incorporation',
    'Register with Commercial Registry (Junta Comercial)',
    'Obtain CNPJ (Brazilian tax ID)',
    'Register with state and municipal tax authorities',
    'Obtain business licenses and permits',
    'Open business bank account',
    'Set up accounting and bookkeeping',
    'Begin operations and tax compliance'
  ]

  const requirements = [
    'Valid CPF and RG for all partners',
    'Proof of residence for all partners',
    'Defined business activities (CNAE codes)',
    'Business address (physical location)',
    'Articles of incorporation document',
    'Capital contribution definition',
    'Tax regime selection',
    'Industry-specific permits (if applicable)'
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  How to open a Company in Brazil
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Comprehensive guidance on opening a company in Brazil, including business structure selection, 
                  legal requirements, and complete registration procedures for successful business establishment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      Get Expert Guidance
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/services/cost-start-business-brazil">
                    <Button size="lg" variant="outline">
                      Check Costs
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://www.shutterstock.com/image-photo/portrait-happy-woman-fashion-designer-260nw-2377579919.jpg"
                    alt="Complete guide on how to open and start a business in Brazil"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Structure Types */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Business Structure</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Select the most appropriate business structure based on your business size, revenue projections, 
                number of partners, and liability preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {businessTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.name}</h3>
                      <p className="text-gray-700 mb-4">{type.description}</p>
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {type.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-gray-900">Ideal for:</p>
                        <p className="text-sm text-gray-700">{type.ideal}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Opening Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Opening Process</h2>
                <p className="text-gray-700 mb-8">
                  Follow these essential steps to properly open your company in Brazil and ensure 
                  full legal compliance from the start.
                </p>
                <div className="space-y-3">
                  {openingSteps.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-800">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                <p className="text-gray-700 mb-8">
                  Ensure you have all necessary documentation prepared before starting the registration process.
                </p>
                <div className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-800">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline and Costs */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Timeline & Investment Overview</h2>
              <p className="text-gray-600">Understanding the time and financial investment required</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">MEI Registration</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-2">24 hours</div>
                  <div className="text-gray-600 mb-3">Processing time</div>
                  <div className="text-lg font-semibold text-green-600">FREE</div>
                  <div className="text-sm text-gray-600">Registration cost</div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Small Company (ME)</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-2">15-30 days</div>
                  <div className="text-gray-600 mb-3">Processing time</div>
                  <div className="text-lg font-semibold text-green-600">R$ 500-1,500</div>
                  <div className="text-sm text-gray-600">Initial investment</div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Limited Company (LTDA)</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-2">30-45 days</div>
                  <div className="text-gray-600 mb-3">Processing time</div>
                  <div className="text-lg font-semibold text-green-600">R$ 1,500-5,000</div>
                  <div className="text-sm text-gray-600">Initial investment</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Services</h2>
              <p className="text-gray-600">Complete your business setup with our additional services</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link href="/services/formalize-company-brazil" className="hover:text-green-600">
                      Steps to Formalize a Company
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Detailed step-by-step process for complete company formalization.
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
                    <Link href="/services/obtain-cnpj-brazil" className="hover:text-green-600">
                      How to obtain a CNPJ
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Expert assistance with Brazilian tax ID registration process.
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
                    <Link href="/services/business-permit-brazil" className="hover:text-green-600">
                      Business Permits & Licenses
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Navigate the complex permit and licensing requirements.
                  </p>
                  <Link href="/services/business-permit-brazil">
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
        <section className="py-16 bg-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Open Your Company in Brazil?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Our experts will guide you through the entire company opening process.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Get Expert Assistance
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
