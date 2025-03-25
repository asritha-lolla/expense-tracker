'use server';

import { supabase } from '../../../shared/config/db/supabaseClient';

interface IAccountData {
  bankName: string;
  ifscCode: string;
  accountNumber: string;
  balance: number;
}

export const addBankAccount = async (formData: IAccountData) => {
  try {
    const { error } = await supabase.from('bank_accounts').insert([
      {
        bank_name: formData.bankName,
        ifsc_code: formData.ifscCode,
        account_number: formData.accountNumber,
        balance: formData.balance,
        // user_id: 1,
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

export const getBankAccounts = async () => {
  try {
    const { data } = await supabase.from('bank_accounts').select();
    return data;
  } catch (error) {
    return error;
  }
};
