"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft, CreditCard, Banknote, QrCode } from "lucide-react";
import { useState } from "react";

export default function CheckoutPage() {
    const { items, totalPrice } = useCart();
    const [paymentMethod, setPaymentMethod] = useState("qris");

    if (items.length === 0) {
        return (
            <div className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight mb-4">Your cart is empty</h1>
                <p className="text-muted-foreground mb-8">Add some delicious dairy products to your cart first.</p>
                <Link href="/products">
                    <Button>Browse Products</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen pb-24">
            <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <Link href="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                </Link>

                <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
                    {/* Left Column: Form */}
                    <div className="lg:col-span-7">
                        <form>
                            <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                                <div className="px-4 py-6 sm:p-8">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Shipping Information</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                First name
                                            </label>
                                            <div className="mt-2">
                                                <Input type="text" name="first-name" id="first-name" autoComplete="given-name" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Last name
                                            </label>
                                            <div className="mt-2">
                                                <Input type="text" name="last-name" id="last-name" autoComplete="family-name" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <Input type="email" name="email" id="email" autoComplete="email" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                                Phone Number (WhatsApp)
                                            </label>
                                            <div className="mt-2">
                                                <Input type="tel" name="phone" id="phone" autoComplete="tel" placeholder="+62..." />
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                                Street address
                                            </label>
                                            <div className="mt-2">
                                                <Input type="text" name="street-address" id="street-address" autoComplete="street-address" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2 sm:col-start-1">
                                            <label htmlFor="province" className="block text-sm font-medium leading-6 text-gray-900">
                                                Province
                                            </label>
                                            <div className="mt-2">
                                                <Input type="text" name="province" id="province" autoComplete="address-level1" placeholder="Jawa Barat" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                                City / Regency
                                            </label>
                                            <div className="mt-2">
                                                <Input type="text" name="city" id="city" autoComplete="address-level2" placeholder="Bandung" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">
                                                District (Kecamatan)
                                            </label>
                                            <div className="mt-2">
                                                <Input type="text" name="district" id="district" placeholder="Coblong" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                                ZIP / Postal code
                                            </label>
                                            <div className="mt-2">
                                                <Input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Method */}
                                <div className="border-t border-gray-900/10 px-4 py-6 sm:p-8">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Payment Method</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Select how you'd like to pay.</p>

                                    <div className="mt-6 space-y-4">
                                        <div className={`relative flex items-center gap-x-3 rounded-lg border p-4 cursor-pointer hover:bg-gray-50 ${paymentMethod === 'qris' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-gray-300'}`} onClick={() => setPaymentMethod('qris')}>
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="qris"
                                                    name="payment-method"
                                                    type="radio"
                                                    checked={paymentMethod === 'qris'}
                                                    onChange={() => setPaymentMethod('qris')}
                                                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                                />
                                            </div>
                                            <div className="text-sm leading-6 flex-1">
                                                <label htmlFor="qris" className="font-medium text-gray-900 flex items-center gap-2 cursor-pointer">
                                                    <QrCode className="h-4 w-4" /> QRIS (GoPay, OVO, Dana, ShopeePay)
                                                </label>
                                                <p className="text-gray-500">Scan the QR code to pay instantly.</p>
                                            </div>
                                        </div>

                                        <div className={`relative flex items-center gap-x-3 rounded-lg border p-4 cursor-pointer hover:bg-gray-50 ${paymentMethod === 'bank' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-gray-300'}`} onClick={() => setPaymentMethod('bank')}>
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="bank"
                                                    name="payment-method"
                                                    type="radio"
                                                    checked={paymentMethod === 'bank'}
                                                    onChange={() => setPaymentMethod('bank')}
                                                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                                />
                                            </div>
                                            <div className="text-sm leading-6 flex-1">
                                                <label htmlFor="bank" className="font-medium text-gray-900 flex items-center gap-2 cursor-pointer">
                                                    <CreditCard className="h-4 w-4" /> Bank Transfer (BCA, Mandiri, BNI)
                                                </label>
                                                <p className="text-gray-500">Manual transfer verification.</p>
                                            </div>
                                        </div>

                                        <div className={`relative flex items-center gap-x-3 rounded-lg border p-4 cursor-pointer hover:bg-gray-50 ${paymentMethod === 'cod' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-gray-300'}`} onClick={() => setPaymentMethod('cod')}>
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="cod"
                                                    name="payment-method"
                                                    type="radio"
                                                    checked={paymentMethod === 'cod'}
                                                    onChange={() => setPaymentMethod('cod')}
                                                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                                />
                                            </div>
                                            <div className="text-sm leading-6 flex-1">
                                                <label htmlFor="cod" className="font-medium text-gray-900 flex items-center gap-2 cursor-pointer">
                                                    <Banknote className="h-4 w-4" /> Cash on Delivery (COD)
                                                </label>
                                                <p className="text-gray-500">Pay when the package arrives.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                                        Place Order
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="mt-10 lg:mt-0 lg:col-span-5">
                        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
                            <div className="px-4 py-6 sm:p-8">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Order Summary</h2>
                                <div className="mt-6 flow-root">
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        {items.map((item) => (
                                            <li key={item.id} className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>{item.name}</h3>
                                                            <p className="ml-4">Rp. {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <p className="text-gray-500">Qty {item.quantity}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-10 border-t border-gray-200 pt-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                                        <p>Subtotal</p>
                                        <p>Rp. {totalPrice.toLocaleString('id-ID')}</p>
                                    </div>
                                    <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                                        <p>Shipping</p>
                                        <p>Rp. 15.000</p>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold text-gray-900 border-t border-gray-200 pt-4">
                                        <p>Total</p>
                                        <p>Rp. {(totalPrice + 15000).toLocaleString('id-ID')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
