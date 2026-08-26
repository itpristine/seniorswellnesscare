export interface OrderTrackingStep {
  stepIndex: number;
  title: string;
  description: string;
  completed: boolean;
  active: boolean;
  timestamp?: string;
}

export interface SpecimenOrderRecord {
  orderId: string;
  trackingNumber: string;
  carrier: 'USPS Priority' | 'FedEx Clinical' | 'UPS Express';
  carrierTrackingUrl: string;
  patientName: string;
  kitProgramName: string;
  orderDate: string;
  estimatedDelivery: string;
  currentStepIndex: number;
  steps: OrderTrackingStep[];
}
