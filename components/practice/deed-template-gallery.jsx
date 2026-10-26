'use client';

import { useRef, useState } from 'react';

const deedTemplates = [
  { title: 'Power of Attorney Deed', file: 'Authenticated_POA_deed_template_v1.pdf', icon: 'fa-file-signature' },
  { title: 'Settlement Deed', file: 'Settlement_deed_template_v1.pdf', icon: 'fa-handshake' },
  { title: 'Partnership Deed', file: 'Partnership_deed_template_v1.pdf', icon: 'fa-users' },
  { title: 'Lease Deed', file: 'Lease_deed_template_v1.pdf', icon: 'fa-key' },
  { title: 'Gift Deed', file: 'Gift_deed_template_v1.pdf', icon: 'fa-gift' },
  { title: 'Mortgage Deed', file: 'Mortgage_deed_template_v1.pdf', icon: 'fa-home' },
];

export default function DeedTemplateGallery() {
  const dialogRef = useRef(null);
  const [selected, setSelected] = useState(null);

  function openPreview(template) {
    setSelected(template);
    dialogRef.current?.showModal();
  }

  return (
    <>
      <div className="deed-template-grid">
        {deedTemplates.map((template) => (
          <article className="deed-template-card" key={template.file}>
            <i className={`fas ${template.icon} deed-template-card-icon`} aria-hidden="true" />
            <h3>{template.title}</h3>
            <p>View the sample before downloading.</p>
            <div className="deed-template-actions">
              <button type="button" className="deed-action deed-action-preview" onClick={() => openPreview(template)}><i className="fas fa-info-circle" aria-hidden="true" /> Preview PDF</button>
              <a href={`/deed/${template.file}`} download={template.file} className="deed-action deed-action-download">Download</a>
            </div>
          </article>
        ))}
      </div>
      <dialog className="deed-preview-dialog" ref={dialogRef} onClose={() => setSelected(null)} aria-label={selected ? `Preview ${selected.title}` : 'Deed preview'}>
        {selected && (
          <div className="deed-preview-content">
            <div className="deed-preview-header">
              <h2>{selected.title}</h2>
              <button type="button" className="deed-preview-close" onClick={() => dialogRef.current?.close()} aria-label="Close preview">×</button>
            </div>
            <iframe title={`${selected.title} PDF preview`} src={`/deed/${selected.file}#toolbar=1`} />
            <div className="deed-preview-footer">
              <a href={`/deed/${selected.file}`} target="_blank" rel="noopener noreferrer">Open in new tab</a>
              <a href={`/deed/${selected.file}`} download={selected.file} className="deed-action deed-action-modal-download"><i className="fas fa-download" aria-hidden="true" /> Download PDF</a>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
