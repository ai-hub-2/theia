import Link from 'next/link'
import { ArrowRightIcon, CodeBracketIcon, CpuChipIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <CodeBracketIcon className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Theia IDE</h1>
            </div>
            <Link
              href="/browser-only/"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
            >
              Launch IDE
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Theia IDE الحقيقي
            <span className="block text-indigo-600">محرر الأكواد المتقدم</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            محرر أكواد حقيقي ومتقدم يعمل بالكامل في المتصفح. لا حاجة لتثبيت أي برامج - فقط افتح وابدأ البرمجة الحقيقية!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/browser-only/"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              <CodeBracketIcon className="mr-2 h-6 w-6" />
              ابدأ البرمجة الحقيقية
            </Link>
            <Link
              href="#features"
              className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              اكتشف المميزات
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            مميزات Theia IDE الحقيقي
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CodeBracketIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">محرر أكواد حقيقي ومتقدم</h3>
              <p className="text-gray-600">
                محرر أكواد حقيقي وقوي مع تمييز الصيغة الحقيقي، الإكمال التلقائي الذكي، وإعادة تنسيق الكود المتقدم
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <GlobeAltIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">يعمل حقيقياً في المتصفح</h3>
              <p className="text-gray-600">
                لا حاجة لتثبيت أي برامج. يعمل حقيقياً على أي جهاز مع متصفح حديث
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CpuChipIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ذكاء اصطناعي حقيقي</h3>
              <p className="text-gray-600">
                ميزات ذكية حقيقية للمساعدة في البرمجة والإكمال التلقائي الذكي للكود
              </p>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div className="mt-24 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            ابدأ فوراً
          </h2>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              اضغط على الزر أدناه لفتح Theia IDE الحقيقي والبدء في البرمجة الحقيقية
            </p>
            <Link
              href="/browser-only/"
              className="inline-flex items-center bg-indigo-600 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              <CodeBracketIcon className="mr-3 h-6 w-6" />
              فتح Theia IDE الحقيقي
              <ArrowRightIcon className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <CodeBracketIcon className="h-8 w-8 text-indigo-400" />
            <h3 className="ml-2 text-2xl font-bold">Theia IDE</h3>
          </div>
          <p className="text-gray-400">
            محرر أكواد حقيقي ومتقدم يعمل في المتصفح - مبني بـ Next.js و Theia الحقيقي
          </p>
        </div>
      </footer>
    </div>
  )
}