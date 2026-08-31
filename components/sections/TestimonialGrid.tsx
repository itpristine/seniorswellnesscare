import React from 'react';
import { Star, Quote, UserCheck, Stethoscope } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export function TestimonialGrid() {
  const testimonials = [
    {
      id: 1,
      quote:
        'As a 71-year-old taking five different daily prescriptions, I was always experiencing dizzy spells and nausea. The PGx test showed my body couldn’t properly metabolize my blood pressure medication. My doctor switched my prescription, and within a week I felt like myself again. And Medicare covered everything 100%!',
      author: 'Harold M., 71',
      role: 'Medicare Beneficiary • Ohio',
      panelUsed: 'Pharmacogenomics (PGx)',
      stars: 5,
      type: 'patient',
    },
    {
      id: 2,
      quote:
        'My mother has a history of breast cancer on her maternal side, and we were worried about my sister and me. Seniors Wellness Care made the swab kit process completely stress-free. The swab arrived in two days, took 5 minutes at our kitchen table, and the physician walk-through of the results was clear and reassuring.',
      author: 'Sarah Jenkins, 44',
      role: 'Family Caregiver • Florida',
      panelUsed: 'Hereditary Cancer (CGx)',
      stars: 5,
      type: 'caregiver',
    },
    {
      id: 3,
      quote:
        'In my geriatric practice, polypharmacy is our biggest clinical hurdle. Having access to physician-ordered PGx and hereditary screening through Seniors Wellness Care without billing headaches allows my team to practice true precision medicine for our senior patients.',
      author: 'Dr. Robert Vance, MD',
      role: 'Board-Certified Family Medicine • Texas',
      panelUsed: 'Clinical Provider Network',
      stars: 5,
      type: 'physician',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#EAE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="teal" size="md">
            Patient &amp; Provider Experiences
          </Badge>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#0D1B2A] tracking-tight">
            Trusted by 10,000+ Seniors, Families &amp; Physicians
          </h2>
          <p className="font-sans-body text-sm sm:text-base text-slate-600">
            Real stories from individuals and healthcare providers who discovered life-changing health clarity through physician-ordered preventive genomics.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <Card
              key={t.id}
              className="p-7 sm:p-8 rounded-3xl bg-[#FDFCF7] border border-slate-200/90 shadow-clinical flex flex-col justify-between relative group hover:shadow-xl hover:bg-white transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                  <span className="text-xs font-semibold text-slate-500 ml-2">5.0 Verified</span>
                </div>

                {/* Quote text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              {/* Author & Panel Badge */}
              <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-serif-heading font-bold text-sm text-[#0D1B2A]">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-slate-500">{t.role}</p>
                </div>

                <Badge variant="teal" size="sm">
                  {t.panelUsed}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
