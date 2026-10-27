'use client';

import { useState } from 'react';

export default function BlogShare({ title, url, compact = false }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt('Copy this article link:', url);
    }
  };

  return (
    <div className={`blog-share${compact ? ' blog-share-compact' : ''}`} aria-label={`Share ${title}`}>
      <span className="blog-share-label"><i className="fas fa-share-alt" aria-hidden="true" /> Share</span>
      <a href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label={`Share ${title} on WhatsApp`} title="Share on WhatsApp"><i className="fab fa-whatsapp" aria-hidden="true" /></a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label={`Share ${title} on LinkedIn`} title="Share on LinkedIn"><i className="fab fa-linkedin-in" aria-hidden="true" /></a>
      <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer" aria-label={`Share ${title} on X`} title="Share on X"><i className="fab fa-twitter" aria-hidden="true" /></a>
      <button type="button" onClick={copyLink} aria-label={copied ? 'Link copied' : `Copy link to ${title}`} title={copied ? 'Copied!' : 'Copy link'}><i className={`fas ${copied ? 'fa-check' : 'fa-link'}`} aria-hidden="true" /></button>
      <span className="blog-copy-status" role="status">{copied ? 'Link copied' : ''}</span>
    </div>
  );
}
