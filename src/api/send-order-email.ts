
import { Resend } from 'resend';

const resend = new Resend('re_MQ96yduV_ByXpKpj6ZZ9Dix7gmQJrJWSi');

export async function POST(request: Request) {
  try {
    const orderData = await request.json();
    
    const { customer, items, total, orderDate, paymentMethod } = orderData;

    // Create order items HTML
    const itemsHTML = items.map((item: any) => `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${item.name}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">₹${item.price}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">₹${item.price * item.quantity}</td>
      </tr>
    `).join('');

    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C27933; text-align: center;">New Order Received - Kaladham</h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3 style="color: #7D3F0F; margin-top: 0;">Customer Information</h3>
          <p><strong>Name:</strong> ${customer.name}</p>
          <p><strong>Email:</strong> ${customer.email}</p>
          <p><strong>Phone:</strong> ${customer.phone}</p>
          <p><strong>Address:</strong> ${customer.address}</p>
          <p><strong>City:</strong> ${customer.city}</p>
          <p><strong>Pincode:</strong> ${customer.pincode}</p>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #7D3F0F;">Order Details</h3>
          <p><strong>Order Date:</strong> ${new Date(orderDate).toLocaleDateString()}</p>
          <p><strong>Payment Method:</strong> ${paymentMethod}</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <thead>
              <tr style="background-color: #C27933; color: white;">
                <th style="padding: 12px 8px; text-align: left;">Product</th>
                <th style="padding: 12px 8px; text-align: center;">Qty</th>
                <th style="padding: 12px 8px; text-align: right;">Price</th>
                <th style="padding: 12px 8px; text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHTML}
            </tbody>
            <tfoot>
              <tr style="background-color: #f5f5f5; font-weight: bold;">
                <td colspan="3" style="padding: 12px 8px; text-align: right;">Total Amount:</td>
                <td style="padding: 12px 8px; text-align: right; color: #C27933;">₹${total}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div style="background-color: #7D3F0F; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;">
          <p style="margin: 0;">Thank you for supporting our village artisans!</p>
          <p style="margin: 5px 0 0 0; font-size: 14px;">Kaladham - Crafting Tradition, Sustaining Nature</p>
        </div>
      </div>
    `;

    // Send email to store owner
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'alokdadhich479@gmail.com',
      subject: `New Order Received - ₹${total} (${customer.name})`,
      html: emailHTML
    });

    // Send confirmation email to customer
    const customerEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C27933; text-align: center;">Order Confirmation - Kaladham</h2>
        
        <p>Dear ${customer.name},</p>
        <p>Thank you for your order! We have received your order and will contact you shortly to confirm the delivery details.</p>
        
        <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3 style="color: #7D3F0F; margin-top: 0;">Order Summary</h3>
          <p><strong>Order Date:</strong> ${new Date(orderDate).toLocaleDateString()}</p>
          <p><strong>Payment Method:</strong> Cash on Delivery</p>
          <p><strong>Total Amount:</strong> ₹${total}</p>
        </div>

        <div style="background-color: #7D3F0F; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;">
          <p style="margin: 0;">Thank you for supporting our village artisans!</p>
          <p style="margin: 5px 0 0 0; font-size: 14px;">Kaladham - Crafting Tradition, Sustaining Nature</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: customer.email,
      subject: 'Order Confirmation - Kaladham',
      html: customerEmailHTML
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
