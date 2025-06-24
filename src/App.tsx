import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Download, Github, ExternalLink, Terminal, Code, Zap } from 'lucide-react';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { name: 'Rust', description: 'Fast, reliable prompt-to-response interaction', command: 'cargo run -- "Your prompt here"' },
    { name: 'R', description: 'Seamless API integration for data-driven workflows', command: 'Rscript r-cli/cli.R "Your prompt here"' },
    { name: 'Scala', description: 'Elegant, scalable command-line prompting', command: 'sbt run "Your prompt here"' },
    { name: 'Fortran', description: 'Robust API calls via curl system integration', command: './fortran-cli/together_cli "Your prompt here"' },
    { name: 'TypeScript', description: 'Modern JavaScript with type safety', command: 'npm run start "Your prompt here"' },
    { name: 'Go', description: 'Concurrent, efficient CLI processing', command: 'go run main.go "Your prompt here"' },
    { name: 'Java', description: 'Enterprise-grade API interaction', command: 'java -jar together-cli.jar "Your prompt here"' },
    { name: 'Ruby', description: 'Expressive, developer-friendly scripting', command: 'ruby cli.rb "Your prompt here"' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img 
                src="/Minimalist Typography Simple Modern Brand Logo.png" 
                alt="Brat Logo" 
                className="h-8 w-auto"
              />
            </div>
            {/* Language Selector */}
            <div className="flex items-center space-x-4">
              <button onClick={() => i18n.changeLanguage('en')} className={`text-xs px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>EN</button>
              <button onClick={() => i18n.changeLanguage('es')} className={`text-xs px-2 py-1 rounded ${i18n.language === 'es' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>ES</button>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <a href="#project" className="text-sm font-medium tracking-wide hover:text-gray-600 transition-colors">{t('nav.project')}</a>
              <a href="#languages" className="text-sm font-medium tracking-wide hover:text-gray-600 transition-colors">{t('nav.languages')}</a>
              <a href="#download" className="text-sm font-medium tracking-wide hover:text-gray-600 transition-colors">{t('nav.download')}</a>
              <a href="#about" className="text-sm font-medium tracking-wide hover:text-gray-600 transition-colors">{t('nav.about')}</a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-4">
              <a href="#project" className="block text-sm font-medium tracking-wide">{t('nav.project')}</a>
              <a href="#languages" className="block text-sm font-medium tracking-wide">{t('nav.languages')}</a>
              <a href="#download" className="block text-sm font-medium tracking-wide">{t('nav.download')}</a>
              <a href="#about" className="block text-sm font-medium tracking-wide">{t('nav.about')}</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none mb-8">
              {t('hero.title')}
              <br />
              <span className="font-normal">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/bniladridas/togethercli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center text-sm font-medium tracking-wide bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-all duration-300"
              >
                <Github size={16} className="mr-2" />
                {t('hero.github')}
                <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#download"
                className="group inline-flex items-center text-sm font-medium tracking-wide border border-gray-300 text-gray-900 px-8 py-4 hover:border-gray-400 transition-all duration-300"
              >
                <Download size={16} className="mr-2" />
                {t('hero.download')}
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Video Demo */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <video 
                className="w-full rounded-md"
                controls
                poster="/api/placeholder/800/450"
                autoPlay
                muted
                playsInline
              >
                <source src="https://github-production-user-asset-6210df.s3.amazonaws.com/125604915/451813608-4e449302-279d-452c-b616-3abfe09896a9.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250624%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250624T191319Z&X-Amz-Expires=300&X-Amz-Signature=9dba25afefe5bb07b140811f375d7d1c795b5ea928524db4675378d9a4100bfb&X-Amz-SignedHeaders=host" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="project" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-16">
            {t('features.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Terminal size={24} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-medium mb-4 tracking-wide">{t('features.terminal')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.terminalDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code size={24} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-medium mb-4 tracking-wide">{t('features.multi')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.multiDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={24} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-medium mb-4 tracking-wide">{t('features.ai')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.aiDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section id="languages" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-16">
            {t('languages.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="bg-white p-6 border border-gray-100 hover:border-gray-200 transition-colors">
                <h3 className="text-lg font-medium mb-3 tracking-wide">{lang.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{lang.description}</p>
                <code className="text-xs text-gray-500 bg-gray-50 p-2 rounded block overflow-x-auto">
                  {lang.command}
                </code>
              </div>
            ))}
            <div className="bg-white p-6 border border-dashed border-gray-200 flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-medium mb-3 tracking-wide">{t('languages.more')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{t('languages.moreDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Instructions */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-16">
            {t('setup.title')}
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-lg font-medium mb-4 tracking-wide">{t('setup.env')}</h3>
              <p className="text-gray-600 mb-4">{t('setup.envDesc')} <code className="bg-white px-2 py-1 rounded text-sm">.env</code></p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>TOGETHER_API_KEY=your_api_key_here</code>
              </pre>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-lg font-medium mb-4 tracking-wide">{t('setup.api')}</h3>
              <p className="text-gray-600">
                {t('setup.apiDesc')}
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-lg font-medium mb-4 tracking-wide">{t('setup.run')}</h3>
              <p className="text-gray-600">
                {t('setup.runDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
            {t('download.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            {t('download.desc')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a 
              href="https://github.com/bniladridas/togethercli/archive/refs/tags/v1.0.0.zip"
              className="group flex items-center justify-center text-sm font-medium tracking-wide bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-all duration-300"
            >
              <Download size={16} className="mr-2" />
              {t('download.zip')}
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://github.com/bniladridas/togethercli/archive/refs/tags/v1.0.0.tar.gz"
              className="group flex items-center justify-center text-sm font-medium tracking-wide border border-gray-300 text-gray-900 px-8 py-4 hover:border-gray-400 transition-all duration-300"
            >
              <Download size={16} className="mr-2" />
              {t('download.tar')}
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="mt-8">
            <a 
              href="https://github.com/bniladridas/togethercli/commits/v1.0.0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center"
            >
              {t('download.changelog')}
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {t('about.desc1')}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            {t('about.desc2')}
          </p>
          
          {/* Social Proof */}
          <div className="space-y-8 mt-12">
            <h3 className="text-lg font-medium tracking-wide">{t('about.featured')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">{t('about.chatgpt')}</p>
                <iframe 
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7336158045023944704?compact=1" 
                  height="300" 
                  width="100%" 
                  frameBorder="0" 
                  allowFullScreen 
                  title="ChatGPT LinkedIn Post"
                  className="rounded"
                ></iframe>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">{t('about.grok')}</p>
                <iframe 
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7335965922517499905?compact=1" 
                  height="300" 
                  width="100%" 
                  frameBorder="0" 
                  allowFullScreen 
                  title="Grok LinkedIn Post"
                  className="rounded"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/Minimalist Typography Simple Modern Brand Logo.png" 
              alt="Brat Logo" 
              className="h-6 w-auto"
            />
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/bniladridas/togethercli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://github.com/iambrat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
            >
              Organization
            </a>
            <div className="text-sm text-gray-500 tracking-wide">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;