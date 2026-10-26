import SiteFooter from './site-footer';
import SiteHeader from './site-header';
import ScrollReveal from './scroll-reveal';
import FloatingAvatar from './floating-avatar';

export default function SiteShell({ children }) {
  return (
    <>
      <SiteHeader />
      <ScrollReveal>{children}</ScrollReveal>
      <SiteFooter />
      <FloatingAvatar />
    </>
  );
}
