/* main.js — language switch (EN/ES) + sticky stacking sections */
(function () {
    'use strict';

    /* ------------------------------------------------------------------
     * 1. TRANSLATIONS
     * English lives in index.html (default / no-JS). Spanish lives here.
     * Each key matches a data-i18n="key" attribute in the HTML.
     * ------------------------------------------------------------------ */
    var ES = {
        /* Navbar */
        nav_about: 'Sobre mí',
        nav_experience: 'Experiencia',
        nav_projects: 'Proyectos',
        nav_background: 'Formación y premios',
        nav_contact: 'Contacto',

        /* Hero */
        hero_badge: 'Magíster en Inteligencia Artificial · Universidad de los Andes',
        hero_title: 'Hola, soy <strong>Juan Felipe Rodriguez</strong>',
        hero_subtitle: 'Científico de Datos · Machine Learning e IA Generativa',
        hero_summary:
            'Científico de datos con <strong>Maestría en Inteligencia Artificial</strong> de la Universidad de los Andes y formación en Ingeniería de Petróleos. ' +
            'Combino analítica de negocio e IA para apoyar la toma de decisiones: traduzco preguntas de negocio en <strong>KPIs, modelos de datos y tableros de Power BI</strong>, ' +
            'y llevo soluciones de <strong>machine learning e IA generativa</strong> de la experimentación a producción: registro experimentos con MLflow, ' +
            'despliego y monitoreo modelos, y desarrollo aplicaciones basadas en LLMs y agentes de IA con LangChain.',
        stat1_value: '2+ años',
        stat1_label: 'como científico de datos en la industria',
        stat2_value: 'MSc IA',
        stat2_label: 'Universidad de los Andes, 2026',
        stat3_value: '3er puesto',
        stat3_label: 'Hackathon de Datos PNUD Colombia 2026',
        btn_cv: 'Descargar CV (EN)',

        /* Experience */
        exp_title: 'Experiencia',
        exp_role: 'Científico de Datos',
        exp_dates: 'May 2024 – Actualidad',
        exp_b1: '<strong>ML de punta a punta:</strong> construí soluciones de machine learning en Python, desde la preparación de datos y la ingeniería de variables hasta el despliegue, para las verticales de ingeniería de la empresa.',
        exp_b2: '<strong>MLOps con MLflow:</strong> implementé MLflow para registrar experimentos, parámetros y métricas, comparar ejecuciones y versionar modelos en el Model Registry, logrando resultados reproducibles y un camino más simple a producción.',
        exp_b3: '<strong>Despliegue y monitoreo:</strong> desplegué modelos para equipos internos y monitoreé su desempeño en el tiempo para detectar degradación y decidir cuándo reentrenar.',
        exp_b4: '<strong>LLMs y agentes de IA:</strong> desarrollé aplicaciones con LLMs y agentes en LangChain conectados a datos y herramientas internas para responder consultas técnicas y automatizar tareas repetitivas.',
        exp_b5: '<strong>Arquitectura de datos:</strong> diseñé esquemas de bases de datos SQL/NoSQL y los integré al ecosistema Microsoft.',
        exp_b6: '<strong>Inteligencia de negocios:</strong> creé suites de tableros en Power BI que dieron a los equipos acceso autónomo a los datos y apoyaron decisiones basadas en evidencia en toda la empresa.',

        /* Skills */
        skills_title: 'Stack tecnológico',
        sk_genai: 'IA Generativa',
        sk_agents: 'Agentes de IA (tool calling)',
        sk_mlops: 'MLOps y despliegue',
        sk_monitoring: 'Monitoreo de modelos',
        sk_data: 'Datos y nube',
        sk_medallion: 'Arquitectura medallón (ETL/ELT)',
        sk_bi: 'BI y web',
        sk_kpi: 'Diseño de KPIs',

        /* Projects */
        proj_title: 'Proyectos',
        proj_subtitle: 'Trabajos académicos y de competencia: la Maestría en Inteligencia Artificial de la Universidad de los Andes, la hackathon de datos del PNUD Colombia y el Bootcamp de Data Science de Henry.',
        btn_code: 'Código',
        btn_mockup: 'Maqueta en vivo',
        btn_map: 'Mapa interactivo',
        btn_linkedin: 'Publicación en LinkedIn',
        tag_quantile: 'Regresión cuantílica',
        tag_temporal_cv: 'Validación temporal',
        tag_geo: 'Datos geoespaciales',

        p8_origin: '3er puesto · Hackathon de Datos PNUD Colombia · 2026 · Individual',
        p8_title: 'Riesgo de desplazamiento por desastres en Colombia',
        p8_desc: 'Para cada uno de los 1.102 municipios de Colombia y cada mes, el modelo estima la probabilidad de un evento con afectación, cuántas personas podrían desplazarse y un rango de incertidumbre del 80 % (escenario bajo y alto) para planear albergues y ayuda. Desarrollado para la hackathon del PNUD Colombia, donde obtuvo el <strong>tercer lugar</strong>.',
        p8_stack: 'Historial municipal sin fuga de información (solo años anteriores, suavizado hacia el departamento y el país), cartografía pública (ubicación, población y 5 municipios vecinos) y lluvia satelital CHIRPS, la mayor mejora (+3,6 puntos en validación; un placebo no aportó nada). Cuatro modelos LightGBM elegidos entre 63 experimentos con una regla de decisión fijada de antemano; el AUC en la prueba en vivo subió de 0,759 a <strong>0,780</strong>.',
        origin_msc: 'Maestría IA · Uniandes',
        origin_henry_team: 'Henry Bootcamp · 2024 · Proyecto en equipo',
        tag_regression: 'Regresión',
        tag_recsys: 'Recomendador',

        p0_origin: 'Maestría IA · Uniandes · 2026 · Proyecto en equipo',
        p0_title: 'Predicción temprana de desnutrición crónica infantil',
        p0_desc: 'En alianza con la <strong>Fundación Canguro</strong>: predice si un bebé desarrollará desnutrición crónica en sus primeros 24 meses usando solo el perfil materno y los datos del nacimiento, para priorizar los recursos de seguimiento. Evaluado con validación cruzada estratificada repetida e intervalos de confianza; el modelo servido alcanza un <strong>ROC-AUC de 0,79</strong> a 12 meses.',
        p0_stack: 'Pipeline de datos con DVC, seguimiento de experimentos con MLflow en EC2, modelo empaquetado como wheel, API en FastAPI (7 endpoints, 55 pruebas) y tablero en Streamlit, desplegados con Docker Compose en AWS EC2.',

        p2_title: 'Detección de tumores cerebrales (visión por computador)',
        p2_desc: 'Red neuronal convolucional en PyTorch que clasifica imágenes de resonancia magnética cerebral para detectar tumores.',
        p3_title: 'Clasificación de textos científicos (NLP)',
        p3_desc: 'Red neuronal recurrente en PyTorch que categoriza artículos científicos a partir de sus resúmenes.',
        p4_title: 'Pronóstico de demanda de bicicletas',
        p4_desc: 'Modelo de demanda con regresión polinómica y Lasso, analizando el efecto de variables externas en los alquileres.',
        p5_title: 'Clasificación de potabilidad del agua',
        p5_desc: 'Clasificador multiclase que evalúa la calidad del agua con árboles de decisión y KNN.',
        p6_title: 'Recomendador de videojuegos (MLOps)',
        p6_desc: 'Extraje, procesé y cargué datos de la plataforma Steam, entrené un modelo de recomendación y lo desplegué como una API consumible.',
        p7_title: 'Recomendador de comida saludable en GCP',
        p7_desc: 'Pipeline de datos en la nube (Cloud Storage, Cloud Functions, BigQuery) con datos de Google Maps para entrenar un modelo de recomendación de opciones saludables y generar reportes.',

        /* Awards */
        awards_title: 'Hackathons y reconocimientos',
        aw1_title: '3er puesto – Hackathon de Datos del PNUD Colombia',
        aw1_desc: 'Construí un modelo predictivo del riesgo de desplazamiento interno causado por desastres, orientado a anticipar el impacto en las poblaciones más vulnerables. Competencia organizada por el PNUD Colombia para estudiantes y jóvenes profesionales en datos e IA.',
        aw1_link: 'Ver el proyecto',
        aw2_title: 'Participante – Hackathon de analítica de datos “Value Finder”, Credicorp Capital',
        aw2_desc: 'Reto de analítica financiera y riesgo de inversión: construí un pipeline de datos con arquitectura medallón (bronce, plata, oro), calculé KPIs financieros, desarrollé un modelo econométrico de pronóstico y entregué un tablero HTML con recomendaciones de inversión según el perfil de cada cliente.',

        /* Education */
        edu_title: 'Formación',
        edu1_title: 'Maestría en Inteligencia Artificial',
        edu1_date: 'Nov 2026',
        edu2_title: 'Bootcamp de Data Science',
        edu3_title: 'Ingeniería de Petróleos',
        lang_title: 'Idiomas',
        lang_desc: '<strong>Español:</strong> nativo · <strong>Inglés:</strong> avanzado',

        /* Contact */
        cta_title: 'Contacto',
        cta_desc: '¿Tienes un proyecto o una pregunta sobre datos, machine learning o IA generativa? Escríbeme.',
        cta_email: 'Enviar un correo'
    };

    var META = {
        en: {
            title: document.title,
            description: (document.querySelector('meta[name="description"]') || {}).content || ''
        },
        es: {
            title: 'Juan Felipe Rodriguez | Científico de Datos · ML e IA Generativa',
            description: 'Portafolio de Juan Felipe Rodriguez, Científico de Datos con Maestría en Inteligencia Artificial (Universidad de los Andes): machine learning, MLOps, LLMs, agentes de IA e inteligencia de negocios.'
        }
    };

    var EN = {}; // filled from the HTML on first switch

    function storageGet(key) {
        try { return window.localStorage.getItem(key); } catch (e) { return null; }
    }
    function storageSet(key, value) {
        try { window.localStorage.setItem(key, value); } catch (e) { /* ignore */ }
    }

    function applyLanguage(lang) {
        if (lang !== 'es') lang = 'en';

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (!(key in EN)) EN[key] = el.innerHTML;
            el.innerHTML = (lang === 'es' && ES[key] !== undefined) ? ES[key] : EN[key];
        });

        document.documentElement.lang = lang;
        document.title = META[lang].title;
        var desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute('content', META[lang].description);

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            var active = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });

        storageSet('lang', lang);
        updateStickyOffsets();
    }

    function initialLanguage() {
        var param = new URLSearchParams(window.location.search).get('lang');
        if (param === 'es' || param === 'en') return param;
        var saved = storageGet('lang');
        if (saved === 'es' || saved === 'en') return saved;
        var nav = (navigator.language || '').toLowerCase();
        return nav.indexOf('es') === 0 ? 'es' : 'en';
    }

    /* ------------------------------------------------------------------
     * 2. STICKY STACKING
     * Each section is position: sticky. A section taller than the viewport
     * gets a negative "top" so it only sticks once its bottom is reached,
     * which keeps all of its content visible before the next one covers it.
     * ------------------------------------------------------------------ */
    var sections = Array.prototype.slice.call(document.querySelectorAll('.full-page-section'));

    function updateStickyOffsets() {
        var vh = window.innerHeight;
        sections.forEach(function (s) {
            s.style.top = Math.min(0, vh - s.offsetHeight) + 'px';
        });
    }

    // Position of a section in normal flow (sticky elements report their stuck position).
    function flowTop(section) {
        var top = 0;
        for (var i = 0; i < sections.length && sections[i] !== section; i++) {
            top += sections[i].offsetHeight;
        }
        return top;
    }

    /* ------------------------------------------------------------------
     * 3. NAVIGATION (smooth scroll, active link, close mobile menu)
     * ------------------------------------------------------------------ */
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]'));
    var menu = document.getElementById('navbarNav');

    // Scroll position for a section, or for an element inside one (e.g. a project card).
    function targetTop(el) {
        if (sections.indexOf(el) !== -1) return flowTop(el);
        var section = el.closest('.full-page-section');
        if (!section) return null;
        var nav = document.querySelector('.navbar');
        var offset = el.getBoundingClientRect().top - section.getBoundingClientRect().top;
        return Math.max(0, flowTop(section) + offset - (nav ? nav.offsetHeight + 16 : 0));
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            var target = document.querySelector(link.getAttribute('href'));
            var top = target ? targetTop(target) : null;
            if (top === null) return;
            e.preventDefault();
            window.scrollTo({ top: top, behavior: 'smooth' });
            if (menu && menu.classList.contains('show') && window.bootstrap) {
                window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });

    function updateActiveLink() {
        var y = window.scrollY + window.innerHeight * 0.4;
        var current = sections[0];
        sections.forEach(function (s) { if (flowTop(s) <= y) current = s; });
        document.querySelectorAll('.navbar .nav-link').forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + current.id);
        });
    }

    /* ------------------------------------------------------------------
     * 4. INIT
     * ------------------------------------------------------------------ */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.addEventListener('click', function () { applyLanguage(btn.getAttribute('data-lang')); });
    });

    applyLanguage(initialLanguage());

    if ('ResizeObserver' in window) {
        var ro = new ResizeObserver(updateStickyOffsets);
        sections.forEach(function (s) { ro.observe(s); });
    }
    window.addEventListener('resize', updateStickyOffsets);
    window.addEventListener('load', updateStickyOffsets);
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();

    // Deep link (e.g. /#projects) once layout is ready
    if (window.location.hash) {
        var deep = null;
        try { deep = document.querySelector(window.location.hash); } catch (e) { /* invalid selector */ }
        if (deep && deep.closest('.full-page-section')) {
            // Sticky sections confuse the browser's native anchor jump and scroll restoration.
            if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
            // The browser keeps re-applying its own (wrong) fragment jump for a short while after
            // load, so apply ours a few times unless the visitor has started scrolling.
            var userMoved = false;
            ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (evt) {
                window.addEventListener(evt, function () { userMoved = true; }, { once: true, passive: true });
            });
            window.addEventListener('load', function () {
                [50, 300, 800].forEach(function (ms) {
                    setTimeout(function () {
                        // "instant": Bootstrap sets scroll-behavior: smooth on :root
                        if (!userMoved) window.scrollTo({ top: targetTop(deep), behavior: 'instant' });
                    }, ms);
                });
            });
        }
    }
})();
