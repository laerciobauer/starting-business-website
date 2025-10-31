
import Link from 'next/link'
import { Mail, Phone, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">Starting Business Brazil</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Expert business consulting services helping entrepreneurs successfully establish 
              and grow their companies in Brazil. Professional guidance for all aspects of 
              Brazilian business formation and legal compliance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <a href="mailto:laercio@brazil.tm" className="text-gray-300 hover:text-white transition-colors">
                  laercio@brazil.tm
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-green-400" />
                <a href="tel:+5511977799994" className="text-gray-300 hover:text-white transition-colors">
                  +55 11 97779 9994
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-3 text-green-400" />
                <a 
                  href="https://wa.me/5511977799994?text=Hello!%20I%27m%20interested%20in%20starting%20a%20business%20in%20Brazil" 
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/formalize-company-brazil" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Company Formalization
                </Link>
              </li>
              <li>
                <Link href="/services/obtain-cnpj-brazil" className="text-gray-300 hover:text-white transition-colors text-sm">
                  CNPJ Registration
                </Link>
              </li>
              <li>
                <Link href="/services/business-permit-brazil" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Business Permits
                </Link>
              </li>
              <li>
                <Link href="/services/cost-start-business-brazil" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Cost Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Starting a Business in Brazil. Expert business consulting services for Brazilian company formation.
          </p>
        </div>
      </div>
    </footer>
  )
}
