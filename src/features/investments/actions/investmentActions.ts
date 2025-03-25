import { supabase } from '../../../shared/config/db/supabaseClient';

interface IInvestmentData {
  bankAccountID: string;
  investmentName: string;
  platform: string;
  investmentType: string;
  amount: number;
  date: string;
}

export const addInvestment = async (formData: IInvestmentData) => {
  try {
    const { error } = await supabase.from('investments').insert([
      {
        bank_account_id: formData.bankAccountID,
        investment_name: formData.investmentName,
        platform: formData.platform,
        investment_type: formData.investmentType,
        amount: formData.amount,
        date: formData.date,
      },
    ]);

    if (error) {
      throw error;
    }
    return { success: true };
  } catch (error) {
    return { error: error };
  }
};

export const getInvestment = async () => {
  try {
    const { data } = await supabase.from('investments').select();
    return data;
  } catch (error) {
    return error;
  }
};
