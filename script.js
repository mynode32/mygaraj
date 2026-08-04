/* ==========================================================================
   MYGARAGE BURSA - "İSTANBUL BEYEFENDİSİ" V9 (UZAY MEKİĞİ - İNTERAKTİF JS MÜHENDİSLİĞİ)
   Skill: gentleman-automotive-gallery (Teklif Robotu, SSS Akordiyon & Mobil Çekmece)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. MOBİL ÇEKMECE MENÜ (MOBILE DRAWER OVERLAY) --- */
    const menuOpenBtn = document.getElementById('menuOpenBtn');
    const menuCloseBtn = document.getElementById('menuCloseBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerLinks = document.querySelectorAll('.drawer-nav-link');

    const openMenu = () => {
        if (mobileDrawer) {
            mobileDrawer.classList.add('active');
            document.body.classList.add('no-scroll');
        }
    };

    const closeMenu = () => {
        if (mobileDrawer) {
            mobileDrawer.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    };

    if (menuOpenBtn) menuOpenBtn.addEventListener('click', openMenu);
    if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    if (mobileDrawer) {
        mobileDrawer.addEventListener('click', (e) => {
            if (e.target === mobileDrawer) {
                closeMenu();
            }
        });
    }

    /* --- 2. NAVBAR AKILLI KAYDIRMA (SMOOTH SCROLL HEADER) --- */
    const navbar = document.getElementById('mainNavbar');
    const handleScroll = () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    /* --- 3. AKILLI TEKLİF VE DANIŞMA ROBOTU (SIMÜLATÖR) --- */
    const generateQuoteBtn = document.getElementById('generateQuoteBtn');
    if (generateQuoteBtn) {
        generateQuoteBtn.addEventListener('click', () => {
            const carBrand = document.getElementById('carBrand')?.value || 'Aracım';
            const carYear = document.getElementById('carYear')?.value || 'Belirtilmedi';
            const serviceType = document.getElementById('serviceType')?.value || 'Genel Servis Danışma';

            const message = `Merhaba Yaşar Usta, web sitenizdeki Akıllı Teklif Robotu üzerinden ulaşıyorum.\n\n` +
                            `🚗 *Araç Markası:* ${carBrand}\n` +
                            `📅 *Model Yılı:* ${carYear}\n` +
                            `🔧 *İşlem & İhtiyacım:* ${serviceType}\n\n` +
                            `Bu işlem hakkında nezaketle fiyat teklifi ve müsaitlik durumu hakkında bilgi rica ederim.`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/905324531082?text=${encodedMessage}`;
            
            // Yeni sekmede WhatsApp aç
            window.open(whatsappUrl, '_blank');
        });
    }

    /* --- 4. SSS AKORDİYON (TICKLA-AÇ PANO MÜHENDİSLİĞİ) --- */
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            
            // Diğer açık akordiyonları kapat (Opsiyonel ama şık duruş için)
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== currentItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });

            // Seçilen akordiyonu aç / kapat
            currentItem.classList.toggle('active');
        });
    });

    /* --- 5. İPEK GİBİ SCROLL REVEAL (INTERSECTION OBSERVER ANİMASYONU) --- */
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -70px 0px',
            threshold: 0.12
        };

        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    observer.unobserve(entry.target);
                }
            });
        };

        const intersectionObserver = new IntersectionObserver(revealCallback, observerOptions);
        revealElements.forEach(el => intersectionObserver.observe(el));
    } else {
        // Fallback
        revealElements.forEach(el => el.classList.add('reveal-active'));
    }
});
