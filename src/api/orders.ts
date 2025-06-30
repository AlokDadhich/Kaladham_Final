
import { sendOrderEmail } from '@/utils/emailService';

export const handleOrderSubmission = async (orderData: any) => {
  try {
    // Log the order for debugging
    console.log('Processing order:', orderData);
    
    // Send the email notification
    const emailSent = await sendOrderEmail(orderData);
    
    if (emailSent) {
      console.log('Order processed successfully and email sent');
      return { success: true, message: 'Order placed successfully!' };
    } else {
      console.log('Order processed but email failed');
      return { success: false, message: 'Order placed but email notification failed' };
    }
  } catch (error) {
    console.error('Error processing order:', error);
    return { success: false, message: 'Failed to process order' };
  }
};
