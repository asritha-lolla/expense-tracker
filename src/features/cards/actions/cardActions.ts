'use server';

import { supabase } from '../../../shared/config/db/supabaseClient';

export const addCardDB = async (formData: {
  cardName: string;
  cardNumber: string;
  creditLimit: string;
  outstandingBalance: string;
}) => {
  try {
    const { error } = await supabase.from('credit_cards').insert([
      {
        card_name: formData.cardName,
        card_number: formData.cardNumber,
        credit_limit: formData.creditLimit,
        outstanding_balance: formData.outstandingBalance,
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

export const getCardData = async () => {
  try {
    const { data } = await supabase.from('credit_cards').select();
    return data;
  } catch (error) {
    return error;
  }
};
