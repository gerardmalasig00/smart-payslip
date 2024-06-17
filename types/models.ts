export interface IPayslip {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: any[];
  $updatedAt: string;
  account_number: string | null;
  bank_name: string | null;
  earnings: any[];
  employee_name: string;
  mode_payment: string;
  payment_period: string;
  payslip_code: string;
  payslip_date: string;
  title: string;
  work_days: number;
}
