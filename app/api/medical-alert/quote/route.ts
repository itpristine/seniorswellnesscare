import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { processFormIntegration } from '@/lib/integrations/formRouter';

const MedicalAlertQuoteSchema = z.object({
  firstName: z.string().min(1, 'First Name is required.'),
  lastName: z.string().min(1, 'Last Name is required.'),
  email: z.string().email('Valid email address is required.'),
  phone: z.string().min(7, 'Phone number is required.'),
  state: z.string().length(2, 'Valid 2-letter US State is required.'),
  dateOfBirth: z.string().min(1, 'Date of Birth is required.'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Express Written Consent is required.' }),
  }),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = MedicalAlertQuoteSchema.parse(body);

    const confirmationCode =
      'ALR-' + Math.random().toString(36).substring(2, 8).toUpperCase();

    // Trigger Email & Google Sheets sync for Medical Alert
    await processFormIntegration(req, {
      ...validated,
      formType: 'medical_alert',
      confirmationCode,
    });

    return NextResponse.json(
      {
        success: true,
        confirmationCode,
        message:
          'Thank you for requesting a Medical Alert quote. A senior safety specialist will reach out with customized options tailored to your needs.',
        lead: {
          name: `${validated.firstName} ${validated.lastName}`,
          email: validated.email,
          phone: validated.phone,
          state: validated.state,
          dateOfBirth: validated.dateOfBirth,
        },
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
