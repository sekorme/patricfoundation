'use server';

export async function verifyPayment({ reference }: { reference: string }) {
    try {
        const res = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        const result = await res.json();
        const data = result.data;

        if (result.status && data.status === 'success') {
            return {
                success: true,
                data,
            };
        } else {
            console.error("Paystack verification failed:", result.message);
            return { success: false };
        }
    } catch (error) {
        console.error("Error verifying Paystack payment:", error);
        return { success: false };
    }
}
