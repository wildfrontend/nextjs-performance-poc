import Link from 'next/link';

import { sections } from '@/constants/page-sections';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {sections.map((section, idx) => (
        <div key={idx}>
          <h2>{section.title}</h2>
          {section.subTitle && <h3>{section.subTitle}</h3>}
          <div style={{ display: 'flex', gap: '16px' }}>
            {section.links.map((link) => (
              <Link href={link.href} key={link.href} prefetch={false}>
                {link.label}
              </Link>
            ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
