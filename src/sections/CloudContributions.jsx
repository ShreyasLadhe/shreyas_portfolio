import React from 'react';

const items = [
  {
    id: 'doc-1',
    title: 'Docker Theory Handbook',
    cover: '/covers/docker-theory-handbook-cover.png',
    file: '/docs/Docker_Handbook-Shreyas Ladhe.pdf'
  },
  {
    id: 'doc-2',
    title: 'Docker Intervew Handbook',
    cover: '/covers/cover-coming-soon.png',
    file: ''
  },
];

const CloudContributions = () => {
  return (
    <div className="c-space my-10">
      <h2 className="text-heading">Cloud community contributions</h2>
      <p className="text-neutral-400 mt-2 max-w-2xl">FREE Resources I have shared with the Cloud community.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
            <a href={item.file} download className="block">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-neutral-400">Click to download</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-neutral-300 opacity-80">
                  <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v9.19l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V4.5A.75.75 0 0112 3.75zm-7.5 13.5a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudContributions;


