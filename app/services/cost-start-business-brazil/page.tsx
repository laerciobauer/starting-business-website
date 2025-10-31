
import { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DollarSign, Calculator, TrendingUp, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cost to Start Business in Brazil - Complete Financial Planning Guide',
  description: 'Detailed cost analysis for starting a business in Brazil. Complete breakdown of registration fees, CNPJ costs, permits, accounting, and ongoing expenses for Brazilian companies.',
  keywords: 'cost start business Brazil, business formation costs Brazil, CNPJ registration fee, company setup costs Brazil, Brazilian business expenses',
  openGraph: {
    title: 'Cost to Start Business in Brazil - Complete Financial Planning Guide',
    description: 'Detailed cost analysis and financial planning guide for starting a business in Brazil with complete expense breakdown.',
    url: 'https://startingabusinessinbrazil.com/services/cost-start-business-brazil',
  }
}

export default function CostStartBusinessPage() {
  const businessTypeCosts = [
    {
      type: 'MEI (Microempreendedor Individual)',
      setup: {
        registration: 'FREE',
        cnpj: 'FREE',
        permits: 'R$ 0-300',
        total: 'R$ 0-300'
      },
      monthly: {
        taxes: 'R$ 71.60-76.60',
        accounting: 'Optional (R$ 50-150)',
        total: 'R$ 71.60-226.60'
      },
      annual: 'R$ 859-2,719',
      description: 'Individual entrepreneurs with revenue up to R$ 81,000/year'
    },
    {
      type: 'ME (Microempresa)',
      setup: {
        registration: 'R$ 200-500',
        cnpj: 'FREE',
        permits: 'R$ 500-1,500',
        total: 'R$ 700-2,000'
      },
      monthly: {
        taxes: 'R$ 150-800',
        accounting: 'R$ 100-500',
        total: 'R$ 250-1,300'
      },
      annual: 'R$ 3,700-17,600',
      description: 'Small businesses with revenue up to R$ 360,000/year'
    },
    {
      type: 'LTDA (Sociedade Limitada)',
      setup: {
        registration: 'R$ 800-1,500',
        cnpj: 'FREE',
        permits: 'R$ 1,000-3,000',
        total: 'R$ 1,800-4,500'
      },
      monthly: {
        taxes: 'R$ 300-2,000+',
        accounting: 'R$ 200-800',
        total: 'R$ 500-2,800+'
      },
      annual: 'R$ 7,800-38,100+',
      description: 'Limited liability companies with multiple partners'
    },
    {
      type: 'SA (Sociedade Anônima)',
      setup: {
        registration: 'R$ 2,000-5,000',
        cnpj: 'FREE',
        permits: 'R$ 2,000-5,000+',
        total: 'R$ 4,000-10,000+'
      },
      monthly: {
        taxes: 'R$ 1,000-5,000+',
        accounting: 'R$ 500-2,000+',
        total: 'R$ 1,500-7,000+'
      },
      annual: 'R$ 22,000-94,000+',
      description: 'Corporations suitable for large businesses and investments'
    }
  ]

  const detailedBreakdown = {
    setup: [
      { item: 'Name reservation', cost: 'R$ 50-100', description: 'Reserve company name at Commercial Registry' },
      { item: 'Articles of incorporation', cost: 'R$ 300-800', description: 'Legal document preparation and notarization' },
      { item: 'Commercial registry filing', cost: 'R$ 200-500', description: 'Junta Comercial registration fees' },
      { item: 'CNPJ registration', cost: 'FREE', description: 'Federal Revenue Service tax ID registration' },
      { item: 'State registration (ICMS)', cost: 'R$ 50-200', description: 'State tax authority registration' },
      { item: 'Municipal registration (ISS)', cost: 'R$ 50-300', description: 'Municipal tax and permit registration' },
      { item: 'Basic permits (Alvará)', cost: 'R$ 200-800', description: 'Municipal operating permit' },
      { item: 'Professional assistance', cost: 'R$ 800-3,000', description: 'Lawyer and accountant fees for setup' }
    ],
    ongoing: [
      { item: 'Monthly accounting', cost: 'R$ 100-800', description: 'Professional bookkeeping and tax compliance' },
      { item: 'Federal taxes (varies by regime)', cost: 'R$ 0-2,000+', description: 'Income tax, PIS, COFINS, CSLL' },
      { item: 'State taxes (ICMS)', cost: 'R$ 0-1,000+', description: 'Goods and services circulation tax' },
      { item: 'Municipal taxes (ISS)', cost: 'R$ 0-500+', description: 'Services tax (varies by municipality)' },
      { item: 'Annual declarations', cost: 'R$ 200-1,000', description: 'Annual tax and regulatory filings' },
      { item: 'Permit renewals', cost: 'R$ 100-500', description: 'Annual permit and license renewals' },
      { item: 'Legal compliance', cost: 'R$ 200-1,000', description: 'Ongoing legal and regulatory compliance' }
    ]
  }

  const costFactors = [
    {
      factor: 'Business Type & Size',
      impact: 'High',
      description: 'MEI has minimal costs, while larger companies require more investment and ongoing expenses.'
    },
    {
      factor: 'Industry Sector',
      impact: 'Medium',
      description: 'Healthcare, food, and manufacturing require additional permits and compliance costs.'
    },
    {
      factor: 'Location (State/City)',
      impact: 'Medium',
      description: 'Tax rates and permit costs vary significantly between municipalities and states.'
    },
    {
      factor: 'Tax Regime Selection',
      impact: 'High',
      description: 'Simples Nacional offers lower rates for eligible businesses compared to other regimes.'
    },
    {
      factor: 'Professional Services',
      impact: 'Medium',
      description: 'Lawyer and accountant fees vary by region and complexity of business structure.'
    },
    {
      factor: 'Number of Partners',
      impact: 'Low',
      description: 'Multiple partners may increase documentation and legal costs slightly.'
    }
  ]

  const savingTips = [
    'Choose MEI if eligible to minimize setup and ongoing costs',
    'Select Simples Nacional tax regime for simplified taxation',
    'Use government online portals to reduce service fees',
    'Compare professional service providers for competitive rates',
    'Consider shared office spaces to reduce initial location costs',
    'Start with basic permits and add specialized ones as needed',
    'Plan for annual expenses to avoid cash flow surprises',
    'Maintain proper records to avoid penalties and additional costs'
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cost to Start Business in Brazil
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Detailed cost analysis and financial planning guide for starting your business in Brazil, 
                  including all registration fees, permits, ongoing expenses, and tax obligations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      Get Cost Consultation
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
                    src="https://smartasset.com/wp-content/uploads/sites/2/2025/03/iStock-2157915299-3.jpg"
                    alt="Financial planning and cost analysis for starting a business in Brazil"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison by Business Type */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost Comparison by Business Type</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Compare setup costs, monthly expenses, and annual investment required for different business structures in Brazil.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {businessTypeCosts.map((business, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{business.type}</h3>
                      <p className="text-gray-700 text-sm mb-6">{business.description}</p>

                      <div className="space-y-6">
                        {/* Setup Costs */}
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Initial Setup Costs</h4>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Registration:</span>
                              <span className="font-medium">{business.setup.registration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">CNPJ:</span>
                              <span className="font-medium">{business.setup.cnpj}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Permits:</span>
                              <span className="font-medium">{business.setup.permits}</span>
                            </div>
                            <div className="flex justify-between border-t pt-1">
                              <span className="font-medium text-gray-900">Total Setup:</span>
                              <span className="font-bold text-red-600">{business.setup.total}</span>
                            </div>
                          </div>
                        </div>

                        {/* Monthly Costs */}
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Monthly Expenses</h4>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Taxes:</span>
                              <span className="font-medium">{business.monthly.taxes}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Accounting:</span>
                              <span className="font-medium">{business.monthly.accounting}</span>
                            </div>
                            <div className="flex justify-between border-t pt-1">
                              <span className="font-medium text-gray-900">Monthly Total:</span>
                              <span className="font-bold text-blue-600">{business.monthly.total}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">First Year Total:</span>
                        <span className="text-xl font-bold text-green-600">{business.annual}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Cost Breakdown */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Cost Breakdown</h2>
              <p className="text-gray-600">Understanding all components of business formation and ongoing expenses</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Setup Costs */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Calculator className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-900">Initial Setup Costs</h3>
                  </div>
                  <div className="space-y-4">
                    {detailedBreakdown.setup.map((item, index) => (
                      <div key={index} className="flex justify-between items-start border-b pb-3">
                        <div className="flex-grow">
                          <div className="font-medium text-gray-900">{item.item}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
                        <div className="font-semibold text-red-600 ml-4">{item.cost}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Ongoing Costs */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-900">Ongoing Monthly Expenses</h3>
                  </div>
                  <div className="space-y-4">
                    {detailedBreakdown.ongoing.map((item, index) => (
                      <div key={index} className="flex justify-between items-start border-b pb-3">
                        <div className="flex-grow">
                          <div className="font-medium text-gray-900">{item.item}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
                        <div className="font-semibold text-blue-600 ml-4">{item.cost}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cost Factors */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Factors Affecting Business Costs</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Various factors influence the total cost of starting and maintaining a business in Brazil.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {costFactors.map((factor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{factor.factor}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        factor.impact === 'High' ? 'bg-red-100 text-red-800' :
                        factor.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {factor.impact} Impact
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{factor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cost-Saving Tips */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost-Saving Tips</h2>
                <p className="text-gray-700 mb-8">
                  Smart strategies to minimize your business formation and operational costs while maintaining full legal compliance.
                </p>
                <div className="space-y-3">
                  {savingTips.map((tip, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-800">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment Summary</h2>
                <div className="space-y-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Minimum Investment (MEI)</h3>
                        <div className="text-3xl font-bold text-green-600 mb-2">R$ 300-1,000</div>
                        <div className="text-sm text-gray-600">First year total cost</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Average Investment (LTDA)</h3>
                        <div className="text-3xl font-bold text-blue-600 mb-2">R$ 10,000-25,000</div>
                        <div className="text-sm text-gray-600">First year total cost</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <Calculator className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Assistance</h3>
                        <div className="text-3xl font-bold text-purple-600 mb-2">R$ 1,500-5,000</div>
                        <div className="text-sm text-gray-600">Complete setup service</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Services</h2>
              <p className="text-gray-600">Explore our business formation services</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link href="/services/formalize-company-brazil" className="hover:text-red-600">
                      Steps to Formalize a Company
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete step-by-step company formation process and requirements.
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
                    <Link href="/services/obtain-cnpj-brazil" className="hover:text-red-600">
                      How to obtain a CNPJ
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    FREE CNPJ registration process and tax regime selection guidance.
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
                    <Link href="/services/business-permit-brazil" className="hover:text-red-600">
                      How to Get a Business Permit
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete guide to all permits and licenses with cost breakdown.
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
        <section className="py-16 bg-red-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Help with Business Cost Planning?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Get personalized cost analysis and financial planning for your specific business needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Get Cost Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
