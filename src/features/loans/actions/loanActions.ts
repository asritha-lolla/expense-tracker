import { supabase } from '../../../shared/config/db/supabaseClient';

interface ILoandata {
  bankAccountID: string;
  loanAmount: string;
  interestRate: string;
  emiAmount: string;
  startDate: string;
  endDate: string;
}

export const addLoan = async (formData: ILoandata) => {
  try {
    const { error } = await supabase.from('loans').insert([
      {
        bank_account_id: formData.bankAccountID,
        loan_amount: formData.loanAmount,
        interest_rate: formData.interestRate,
        emi_amount: formData.emiAmount,
        start_date: formData.startDate,
        end_date: formData.endDate,
      },
    ]);
    if (error) {
      throw error;
    }
    return { success: true };
  } catch (error) {
    return error;
  }
};

export const getLoan = async () => {
  try {
    const { data } = await supabase.from('loans').select();
    return data;
  } catch (error) {
    return error;
  }
};
