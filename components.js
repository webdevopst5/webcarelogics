class SiteHeader extends HTMLElement {
    connectedCallback() {
        const path = window.location.pathname;
        let page = path.split('/').pop();
        if (!page) page = 'index.html'; // default for root
        
        // Define active vs inactive classes
        const getNavClass = (targetPage, isButton = false) => {
            if (isButton) {
                return page === targetPage 
                    ? "text-sm font-bold px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-500 text-dark-900 transition-all duration-300 shadow-brand-500/50"
                    : "text-sm font-bold px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-500 hover:from-brand-400 hover:to-brand-400 text-dark-900 transition-all duration-300 shadow-brand-500/30 hover:shadow-brand-500/60 hover:-translate-y-0.5";
            }
            return page === targetPage 
                ? "relative group text-sm font-medium text-brand-400 transition-colors after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-brand-400 after:rounded-full"
                : "relative group text-sm font-medium text-slate-300 hover:text-white transition-colors after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-0.5 after:bg-brand-400 after:transition-all after:duration-300 group-hover:after:w-full after:rounded-full";
        };

        const getMobileNavClass = (targetPage, isButton = false) => {
            if (isButton) {
                return "text-center font-medium px-5 py-3 rounded-xl bg-brand-500 text-dark-900 mt-2";
            }
            return page === targetPage
                ? "text-brand-400 font-medium p-2 rounded-lg hover:bg-white/5"
                : "text-slate-300 font-medium hover:text-white p-2 rounded-lg hover:bg-white/5";
        };

        this.innerHTML = `
        <header x-data="{ mobileMenuOpen: false, scrolled: false }" 
                @scroll.window="scrolled = (window.pageYOffset > 20)"
                :class="{'bg-dark-900/80 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] py-3': scrolled, 'py-6 bg-transparent': !scrolled}"
                class="fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/20">
            <div class="container-1400 flex items-center justify-between">
                <!-- Logo -->
                <a href="index.html" class="flex items-center group">
                    <img src="img/logo.png" alt="Webcarelogics" class="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105">
                </a>

                <!-- Desktop Nav -->
                <nav class="hidden md:flex items-center gap-6 md:gap-8">
                    <a href="index.html" class="${getNavClass('index.html')}">Home</a>
                    <a href="about.html" class="${getNavClass('about.html')}">About</a>
                    <a href="services.html" class="${getNavClass('services.html')}">Services</a>
                    <a href="portfolio.html" class="${getNavClass('portfolio.html')}">Portfolio</a>
                    <a href="contact_us.html" class="${getNavClass('contact_us.html', true)}">Contact Us</a>
                </nav>

                <!-- Mobile Menu Button -->
                <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-white p-2 focus:outline-none">
                    <i class="fa-solid fa-bars text-2xl" x-show="!mobileMenuOpen"></i>
                    <i class="fa-solid fa-xmark text-2xl" x-show="mobileMenuOpen" x-cloak></i>
                </button>
            </div>

            <!-- Mobile Nav -->
            <div x-show="mobileMenuOpen" 
                 x-transition:enter="transition ease-out duration-200"
                 x-transition:enter-start="opacity-0 -translate-y-4"
                 x-transition:enter-end="opacity-100 translate-y-0"
                 x-transition:leave="transition ease-in duration-150"
                 x-transition:leave-start="opacity-100 translate-y-0"
                 x-transition:leave-end="opacity-0 -translate-y-4"
                 class="absolute top-full left-0 w-full bg-dark-900/95 backdrop-blur-xl border-t border-white/5 shadow-2xl md:hidden"
                 x-cloak>
                <div class="container-1400 py-4 flex flex-col gap-4">
                    <a href="index.html" class="${getMobileNavClass('index.html')}">Home</a>
                    <a href="about.html" class="${getMobileNavClass('about.html')}">About</a>
                    <a href="services.html" class="${getMobileNavClass('services.html')}">Services</a>
                    <a href="portfolio.html" class="${getMobileNavClass('portfolio.html')}">Portfolio</a>
                    <a href="contact_us.html" class="${getMobileNavClass('contact_us.html', true)}">Contact Us</a>
                </div>
            </div>
        </header>
        `;
    }
}
customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="contact" class="bg-dark-900 border-t border-white/10 pt-12 md:pt-20 pb-10 relative overflow-hidden mt-auto">
            <!-- Footer Blobs -->
            <div class="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div class="container-1400 relative z-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 md:gap-12 mb-10 md:mb-16">
                    <!-- Brand Info -->
                    <div class="space-y-6">
                        <a href="index.html" class="flex items-center group mb-2">
                            <img src="img/logo.png" alt="Webcarelogics" class="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105">
                        </a>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Webcare Logics is a premium software development company in Jhunjhunu, Rajasthan. We specialize in custom ERP software, dynamic web design, and SEO.
                        </p>
                        <div class="flex items-center gap-4">
                            <a href="https://www.facebook.com/people/Webdevops-Pvt-Ltd/61571742363819/" target="_blank" class="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-brand-500 hover:text-dark-900 transition-colors duration-300">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/webdevops-pvt-ltd/" target="_blank" class="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-brand-500 hover:text-dark-900 transition-colors duration-300">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.instagram.com/webdevops_pvt_ltd?igsh=MW5ud2o5Z3I5cGZydw==" target="_blank" class="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-brand-500 hover:text-dark-900 transition-colors duration-300">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul class="space-y-3">
                            <li><a href="index.html" class="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-xs"></i> Home</a></li>
                            <li><a href="about.html" class="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-xs"></i> About Us</a></li>
                            <li><a href="services.html" class="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-xs"></i> Services</a></li>
                            <li><a href="portfolio.html" class="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-xs"></i> Portfolio</a></li>
                            <li><a href="contact_us.html" class="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-xs"></i> Contact Us</a></li>
                        </ul>
                    </div>

                    <!-- Services -->
                    <div>
                        <h4 class="text-white font-bold text-lg mb-6">Our Services</h4>
                        <ul class="space-y-3">
                            <li><a href="#" class="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-xs"></i> Software Development</a></li>
                            <li><a href="#" class="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-xs"></i> Web Design</a></li>
                            <li><a href="#" class="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-xs"></i> ERP Solutions</a></li>
                            <li><a href="#" class="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-xs"></i> Ecommerce Development</a></li>
                            <li><a href="#" class="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2"><i class="fa-solid fa-chevron-right text-xs"></i> SEO Services</a></li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div>
                        <h4 class="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul class="space-y-4">
                            <li class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-400 shrink-0 mt-0.5">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <span class="text-slate-400 text-sm leading-relaxed">Jhunjhunu, Rajasthan, India</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-400 shrink-0 mt-0.5">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <a href="mailto:webdevpspvtltd@gmail.com" class="text-slate-400 hover:text-brand-400 text-sm transition-colors">webdevpspvtltd@gmail.com</a>
                            </li>
                            <li class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-400 shrink-0 mt-0.5">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <a href="tel:+919784018712" class="text-slate-400 hover:text-brand-400 text-sm transition-colors">+91 9784018712</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p class="text-slate-500 text-sm">
                        &copy; 2026 Webcare Logics. All rights reserved.
                    </p>
                    <div class="flex gap-6">
                        <a href="#" class="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
                        <a href="#" class="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
                    </div>
                </div>
                <div class="mt-4 text-center">
                    <p class="text-slate-500 text-xs">Do you want a vehicle on rent or rent out any vehicle? Please <a href="https://findonrent.com/" target="_blank" class="text-brand-400 hover:text-white transition-colors"><strong>click here</strong></a>.</p>
                </div>
            </div>
        </footer>
        `;
    }
}
customElements.define('site-footer', SiteFooter);
