import React from 'react';

const BLOG_SECTIONS = [
  {
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:example1'
  },
  {
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:example2'
  },
  {
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:example3'
  },
  {
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:example4'
  },
  {
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:example5'
  },
  {
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:example6'
  }
];

// ✅ Endret her – definert typen for embedUrl
const PostCard = ({ embedUrl }: { embedUrl: string }) => (
  <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
    <div className="p-6">
      <iframe
        src={embedUrl}
        className="w-full h-[28rem] border-none rounded-lg"
      />
    </div>
  </div>
);

const ModelPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="relative overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover opacity-20"
            src="https://videos.ctfassets.net/7x0gozge9rg6/5No3Nc8RNiyMGHvGOGBSUB/7772271b3b9d9ac29d5f263afe3d70a4/3391236-hd_1920_1080_30fps.mp4"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4">
          <h1 className="text-5xl font-bold mb-6">
            Get an insight into NavierUSN
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Riding the wave of autonomous innovation.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_SECTIONS.map((section, index) => (
            <PostCard
              key={index}
              embedUrl={section.embedUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ModelPage;
