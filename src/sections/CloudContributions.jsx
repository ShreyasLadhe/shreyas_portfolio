import React, { useState } from 'react';

const items = [
  {
    id: 'doc-1',
    title: 'Docker Theory Handbook',
    cover: '/covers/docker-theory-handbook-cover.png',
    file: '/docs/Docker_Handbook-Shreyas Ladhe.pdf'
  },
  // {
  //   id: 'doc-2',
  //   title: 'Docker Intervew Handbook',
  //   cover: '/covers/docker-interview-cover.png',
  //   file: '/docs/Docker_Interview_Handbook-ShreyasLadhe.pdf'
  // },
  {
    id: 'doc-3',
    title: 'Your Go-To Guides',
    cover: '/covers/cover-coming-soon.png',
    file: ''
  },
];

const getIndexForItem = (item) => {
  switch (item.id) {
    case 'doc-1':
      return [
        { title: 'Install and Configure Docker on Your Local Machine' },
        { title: 'Pull and Run Containerized Applications using Docker CLI' },
        { title: 'Create and Manage Docker Volumes, Networks and Port Bindings' },
        { title: 'Secure Containers and Manage Secets' },
        { title: 'Write DockerFiles to build custom container images' },
        { title: 'Using Docker Compose to build and run multi-container applications' },
        { title: 'Publishing and Pulling Images using Docker Registery' },
        { title: 'Orchestrating containers using Docker Swarm and Kubernetes' },
      ];
    // case 'doc-2':
    //   return [
    //     { title: 'INTERVIEW QUESTIONS: Install and Configure Docker on Your Local Machine' },
    //     { title: 'INTERVIEW QUESTIONS: Pull and Run Containerized Applications using Docker CLI' },
    //     { title: 'INTERVIEW QUESTIONS: Create and Manage Docker Volumes, Networks and Port Bindings' },
    //     { title: 'INTERVIEW QUESTIONS: Secure Containers and Manage Secets' },
    //     { title: 'INTERVIEW QUESTIONS: Write DockerFiles to build custom container images' },
    //     { title: 'INTERVIEW QUESTIONS: Using Docker Compose to build and run multi-container applications' },
    //     { title: 'INTERVIEW QUESTIONS: Publishing and Pulling Images using Docker Registery' },
    //     { title: 'INTERVIEW QUESTIONS: Orchestrating containers using Docker Swarm and Kubernetes' },
    //   ];
    default:
      return [
        { title: 'Follow my Linkedin for more updates...' },
      ];
  }
};

const CloudContributions = () => {
  const [isIndexOpen, setIsIndexOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openIndex = (item) => {
    setSelectedItem(item);
    setIsIndexOpen(true);
  };

  const closeIndex = () => {
    setIsIndexOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="c-space my-10">
      <h2 className="text-heading">Cloud community contributions</h2>
      <p className="text-neutral-400 mt-2 max-w-2xl">FREE Resources I have shared with the Cloud community.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={item.cover}
                alt={item.title}
                className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-xs text-neutral-400">Download the resource or view the index</p>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href={item.file || '#'}
                  download={Boolean(item.file)}
                  className={`flex-1 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${item.file ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-700 text-neutral-300 cursor-not-allowed'}`}
                  aria-disabled={!item.file}
                >
                  Download
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v9.19l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V4.5A.75.75 0 0112 3.75zm-7.5 13.5a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                  </svg>
                </a>

                <button
                  type="button"
                  onClick={() => openIndex(item)}
                  className="flex-1 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-transparent border border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  View Index
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isIndexOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeIndex} />
          <div className="relative z-10 w-full max-w-xl rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md shadow-2xl">
            <div className="p-6 border-b border-white/10 flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M6.75 3A2.75 2.75 0 004 5.75v12.5A2.75 2.75 0 006.75 21h10.5A2.75 2.75 0 0020 18.25V8.872a2.75 2.75 0 00-.806-1.944l-3.122-3.122A2.75 2.75 0 0014.128 3H6.75z" />
                    <path d="M13.5 3.75V7a2 2 0 002 2h3.25" className="opacity-80" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{selectedItem?.title} - Index</h3>
                  <p className="text-xs text-neutral-300 mt-1">These are all the handcrafted contents in the book.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeIndex}
                className="ml-4 rounded-full p-1.5 text-neutral-300 hover:text-white hover:bg-white/10"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 111.06 1.06L13.06 10.586l4.714 4.715a.75.75 0 11-1.06 1.06L12 11.646l-4.715 4.715a.75.75 0 11-1.06-1.061l4.714-4.715-4.714-4.714a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="px-6 py-4 max-h-[70vh] overflow-auto">
              <ol className="space-y-3">
                {getIndexForItem(selectedItem || { id: 'unknown' }).map((entry, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-lg bg-black/60 hover:bg-black/50 transition-colors p-3">
                    <span className="mt-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded-md bg-black/80 text-xs text-white/80 font-medium">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-neutral-100 leading-relaxed">
                      {typeof entry === 'string' ? entry : entry.title}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="px-6 pb-6 pt-2 flex justify-end">
              <button
                type="button"
                onClick={closeIndex}
                className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-white text-black hover:bg-neutral-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CloudContributions;


