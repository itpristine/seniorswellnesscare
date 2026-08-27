import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { processFormIntegration } from '@/lib/integrations/formRouter';

const ContactFormSchema = z.object({
  name: z.string().min(1, 'Full name is required.'),
  phone: z.string().min(7, 'Valid phone number is required.'),
  email: z.string().email('Valid email address is required.'),
  topic: z.string().default('General Inquiry'),
  message: z.string().min(1, 'Message is required.'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = ContactFormSchema.parse(body);

    // Trigger Email integration (Contact form skips Google Sheets per requirement)
    await processFormIntegration(req, {
      ...validated,
      formType: 'contact',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you. Your message has been received and routed to our team.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: 'Validation failed. Please check the form fields.',
        errors: error.errors || error.message,
      },
      { status: 400 }
    );
  }
}
