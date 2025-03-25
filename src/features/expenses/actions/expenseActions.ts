'use server';

import { supabase } from '../../../shared/config/db/supabaseClient';

interface IExpenseData{
  expenseName: string;
  category: string;
  amount: number;
  place: string;
  paymentType: string;
  bankAccountID: number;
  creditCardtID: number;
}

export const addExpenseDB = async (formData:IExpenseData) => {
  try {
    const { error } = await supabase.from('expenses').insert([
      {
        expense_name: formData.expenseName,
        category: formData.category,
        amount: formData.amount,
        place: formData.place,
        payment_type: formData.paymentType,
        bank_account_id: formData.bankAccountID,
        credit_card_id: formData.creditCardtID,
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

export const getExpenseData = async () => {
  try {
    const { data } = await supabase.from('expenses').select();
    return data
  } catch (error) {
    return error;
  }
};
