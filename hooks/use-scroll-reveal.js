'use client';

import { useEffect } from 'react';

export function useScrollReveal(routeKey) {
  useEffect(() => {
    document.documentElement.classList.add('has-scroll-reveal');
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-aos]').forEach((target) => target.classList.add('is-visible'));
      return () => document.documentElement.classList.remove('has-scroll-reveal');
    }

    const observed = new Set();
    const automaticRevealSelector = [
      'main > section',
      'main > article',
      'main .card-hover',
      'main .service-box',
      'main .skill-card',
      'main .contact-card-modern',
      'main .contact-main-card',
      'main .link-resource-card',
      'main .gallery-item',
      'main .associate-card',
      'main .credential-card',
      'main .timeline-item',
      'main .step-box',
      'main .practice-card',
      'main .row > [class*="col-"]',
    ].join(',');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    const observeTargets = (root) => {
      if (root.matches?.('[data-aos]')) observed.add(root);
      root.querySelectorAll?.('[data-aos]').forEach((target) => observed.add(target));
      const automaticTargets = [];
      if (root.matches?.(automaticRevealSelector)) automaticTargets.push(root);
      root.querySelectorAll?.(automaticRevealSelector).forEach((target) => automaticTargets.push(target));
      automaticTargets.forEach((target) => {
        if (!target.hasAttribute('data-aos')) target.setAttribute('data-aos', 'fade-up');
        observed.add(target);
      });
      observed.forEach((target) => {
        if (target.dataset.revealObserved) return;
        target.dataset.revealObserved = 'true';
        const delay = Number(target.dataset.aosDelay || 0);
        if (delay > 0) target.style.transitionDelay = `${delay}ms`;
        observer.observe(target);
      });
    };
    observeTargets(document);
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) observeTargets(node);
      }));
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
      observed.forEach((target) => {
        delete target.dataset.revealObserved;
        target.style.transitionDelay = '';
      });
      document.documentElement.classList.remove('has-scroll-reveal');
    };
  }, [routeKey]);
}
