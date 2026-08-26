import { NextRequest, NextResponse } from 'next/server';
import { SpecimenOrderRecord } from '@/types/tracking';

export async function GET(
  req: NextRequest,
  { params }: { params: { trackingId: string } }
) {
  const { trackingId } = params;

  // Mock lookup for demonstration
  const mockOrder: SpecimenOrderRecord = {
    orderId: trackingId.toUpperCase(),
    trackingNumber: '9400111899562548271032',
    carrier: 'USPS Priority',
    carrierTrackingUrl: 'https://tools.usps.com/go/TrackConfirmAction?tLabels=9400111899562548271032',
    patientName: 'Harold M.',
    kitProgramName: 'Hereditary Cancer (CGx) & Pharmacogenomics (PGx)',
    orderDate: 'Aug 24, 2026',
    estimatedDelivery: 'Aug 28, 2026',
    currentStepIndex: 3,
    steps: [
      {
        stepIndex: 1,
        title: 'Order Reviewed & Physician Approved',
        description: 'Board-certified medical physician evaluated intake and authorized test requisition.',
        completed: true,
        active: false,
        timestamp: 'Aug 24, 2026 • 10:14 AM',
      },
      {
        stepIndex: 2,
        title: 'At-Home Swab Kit Dispatched',
        description: 'Sterile buccal collection kit packaged and dispatched via USPS Priority Mail.',
        completed: true,
        active: false,
        timestamp: 'Aug 25, 2026 • 02:30 PM',
      },
      {
        stepIndex: 3,
        title: 'Sample In-Transit to CLIA Laboratory',
        description: 'Specimen envelope is in transit to our federally certified genomics testing facility.',
        completed: false,
        active: true,
        timestamp: 'Expected Delivery: Aug 28, 2026',
      },
      {
        stepIndex: 4,
        title: 'High-Throughput Genomic Sequencing',
        description: 'Laboratory performs Next-Generation Sequencing (NGS) and bioinformatic analysis.',
        completed: false,
        active: false,
      },
      {
        stepIndex: 5,
        title: 'Results Completed & Physician Review',
        description: 'Final clinical report generated; physician schedules follow-up consultation.',
        completed: false,
        active: false,
      },
    ],
  };

  return NextResponse.json(mockOrder, { status: 200 });
}
