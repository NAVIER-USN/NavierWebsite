import React from 'react';
import { Sponsor, SponsorProps } from '@/types/contentful';
import Link from 'next/link';

const FrontpageSponsorLayout = ({ sponsors }: SponsorProps) => {
  const sortedSponsors = [...sponsors].sort(
    (a, b) => b.fields.importance - a.fields.importance
  );
  
  const featuredSponsor = sortedSponsors[0];
  const remainingSponsors = sortedSponsors.slice(1);

  return (
    <div className="flex flex-col space-y-8 md:space-y-12 lg:space-y-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href={featuredSponsor.fields.url}
            className="block group relative overflow-hidden rounded-lg md:rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white dark:bg-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="aspect-video md:aspect-[3/1] relative p-4 md:p-6 lg:p-8">
              <img
                src={`https:${featuredSponsor.fields.logoDarkmode.fields.file.url}`}
                alt={featuredSponsor.fields.logoDarkmode.fields.title}
                className="dark:block hidden w-full h-full object-contain"
              />
              <img
                src={`https:${featuredSponsor.fields.logoLightmode.fields.file.url}`}
                alt={featuredSponsor.fields.logoLightmode.fields.title}
                className="block dark:hidden w-full h-full object-contain"
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {remainingSponsors.map((sponsor: Sponsor, index: number) => (
              <Link
                key={`sponsor-${index}`}
                href={sponsor.fields.url}
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="aspect-square p-3 md:p-4">
                    <img
                      src={`https:${sponsor.fields.logoDarkmode.fields.file.url}`}
                      alt={sponsor.fields.logoDarkmode.fields.title}
                      className="dark:block hidden w-full h-full object-contain"
                    />
                    <img
                      src={`https:${sponsor.fields.logoLightmode.fields.file.url}`}
                      alt={sponsor.fields.logoLightmode.fields.title}
                      className="block dark:hidden w-full h-full object-contain"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontpageSponsorLayout;