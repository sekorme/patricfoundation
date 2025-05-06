"use client";

import React, { useState } from "react";

import { verifyPayment } from "@/lib/actions/verifyPayment";
import { sendDonationReceiptEmail } from "@/providers/sendDonationReceiptEmail";
import { addToast } from "@heroui/toast";
import { CircleCheck } from "lucide-react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import {HeartFilledIcon} from "@/components/icons";

export default function PaymentModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        amount: "",
    });

    const [loading, setLoading] = useState(false);

    const handlePay = async() => {
        const PaystackPop = (await import("@paystack/inline-js")).default;
        const paystack = new PaystackPop();
        setLoading(true);

        paystack.newTransaction({
            key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
            email: form.email,
            amount: Number(form.amount) * 100,
            currency: "GHS",
            metadata: {
                custom_fields: [
                    { display_name: "Name", variable_name: "name", value: form.name },
                    { display_name: "Phone", variable_name: "phone", value: form.phone },
                ],
            },
                // @ts-ignore
            callback: async (response: any) => {
                const verified = await verifyPayment({
                    reference: response.reference

,
                });

                if (verified.success) {
                    await sendDonationReceiptEmail({
                        name: form.name,
                        email: form.email,
                        amount: form.amount,
                        reference: response.reference,
                    });

                    addToast({
                        title: "Thank you for your donation!",
                        icon: <CircleCheck />,
                        color: "success",
                        description: "A receipt has been sent to your email.",
                    });

                    setForm({ name: "", email: "", phone: "", amount: "" });
                } else {
                    alert("Payment verification failed.");
                }

                setLoading(false);
            },
            onClose: () => {
                addToast({
                    title: "Payment Cancelled",
                    icon: <CircleCheck />,
                    color: "warning",
                    description: "You closed the payment window.",
                });
                setLoading(false);
            },
        });
    };

    return (
        <>
            <Button onPress={onOpen}
                    className={"rounded-full"}
                    startContent={<HeartFilledIcon className="text-danger" />}
            >Donate Now</Button>
            <Modal
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior={"inside"}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1"><h3
                                className="text-xl text-center font-semibold text-indigo-700 dark:text-indigo-400">Make a
                                Donation</h3></ModalHeader>
                            <ModalBody>
                                <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 shadow-md space-y-4">

                                    <input
                                        className="w-full px-4 py-2 rounded border"
                                        placeholder="Full Name"
                                        value={form.name}
                                        onChange={(e) => setForm({...form, name: e.target.value})}
                                    />
                                    <input
                                        className="w-full px-4 py-2 rounded border"
                                        placeholder="Email"
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({...form, email: e.target.value})}
                                    />
                                    <input
                                        className="w-full px-4 py-2 rounded border"
                                        placeholder="Phone Number"
                                        value={form.phone}
                                        onChange={(e) => setForm({...form, phone: e.target.value})}
                                    />
                                    <input
                                        className="w-full px-4 py-2 rounded border"
                                        placeholder="Amount (GHS)"
                                        type="number"
                                        value={form.amount}
                                        onChange={(e) => setForm({...form, amount: e.target.value})}
                                    />
                                    <Button
                                        className="w-full bg-black text-white dark:text-black dark:bg-white"
                                        onClick={handlePay}
                                        disabled={loading}
                                    >
                                        {loading ? "Processing..." : "Donate Now"}
                                    </Button>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
