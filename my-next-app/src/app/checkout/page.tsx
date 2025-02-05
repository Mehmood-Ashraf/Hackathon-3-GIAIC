"use client";
import Header from "@/components/layout/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import IFoods from "@/types/foods";
import { client } from "../../sanity/lib/client"


export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<IFoods[]>([]);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    zip: "",
    address: "",
  });
  
  const router = useRouter();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);
  }, []);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tax = (totalAmount * 0.07).toFixed(2);

  const fetchDocumentIdBySlug = async (slug: string | undefined) => {
    try {

      if(!slug){
        console.log(`sllug is missing`)
        return null
      }
      const query = `*[_type == "food" && slug.current == $slug][0]._id`;
      const params = { slug };
      
      console.log(query)
      console.log(params)

      const result =  await client.fetch(query, params);
      console.log(result)
      return result

    } catch (error) {
      console.error("Error fetching document ID:", error);
      return null;
    }
  };


  const handleProceedToPayment = async () => {
    if (!shippingAddress.firstName || !shippingAddress.address) {
      alert("Please enter a shipping address.");
      return;
    }
    
    try {
      const cartItemsWithRef = await Promise.all(
       cartItems.map(async (item, index) => {

        const slug = item.slug || item.id

      console.log(item);
      console.log(item.id )
      console.log(item.slug)

      const documentId =  await fetchDocumentIdBySlug(slug);
      return {
        _key: item.slug || `item.${index}`,
        _type: 'reference',
        _ref: documentId,// Yaha item._id ko reference dena hoga
      }
    }),
  )

      const order = {
        _type: "order",  // Sanity document type
        firstName: shippingAddress.firstName,
        lastName: shippingAddress.lastName,
        email: shippingAddress.email,
        phone: shippingAddress.phone,
        country: shippingAddress.country,
        city: shippingAddress.city,
        zipCode: shippingAddress.zip,
        address: shippingAddress.address,  
        cartItems: cartItemsWithRef,
        status: "pending" // Default order status
      };
      
      // Document ko create karna
      await client.create(order);
      alert("Order saved successfully.");
    } catch (error) {
      console.error("Error saving order:", error);
      alert("There was an error saving your order.");
    }
    
    alert("Proceeding to payment...");
  };


  const handleNavigation = () => {
    // const router = useRouter();
    router.push("/Cart")
  };

  const orderComplete = () => {
    localStorage.removeItem("cart")
    setCartItems([]);

    alert('Order Placed Successfully')
    console.log(shippingAddress);

    router.push('/')
  }

  return (
    <>
      
      <Header name={"Checkout Page"} linkName={"Checkout"}/>

      <div className="container max-w-[1320px] mx-auto my-20 md:my-[120px] px-3">
        <div className="grid gap-8 lg:grid-cols-2">
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                {/* Form Inputs for Shipping Address */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={shippingAddress.firstName}
                    onChange={(e) => {
                      setShippingAddress({
                        ...shippingAddress,
                        firstName: e.target.value
                      })
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={shippingAddress.lastName}
                    onChange={(e) => {
                      setShippingAddress({
                        ...shippingAddress,
                        lastName: e.target.value
                      })
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>


                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={shippingAddress.email}
                    onChange={(e) => {
                      setShippingAddress({
                        ...shippingAddress,
                        email: e.target.value
                      })
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={shippingAddress.phone}
                    onChange={(e) => {
                      setShippingAddress({
                        ...shippingAddress,
                        phone: e.target.value
                      })
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                {/* <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={shippingAddress.company}
                    onChange={(e) => {
                      setShippingAddress({
                        ...shippingAddress,
                        company: e.target.value
                      })
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div> */}
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    value={shippingAddress.country} 
                    onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Choose country</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="saudiaArabia">Saudia Arabia</option>
                    <option value="usa">USA</option>
                    <option value="paletine">Palestine</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={shippingAddress.city}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Zip code
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    value={shippingAddress.zip}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, zip: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address1"
                    value={shippingAddress.address}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                {/* <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address 2
                  </label>
                  <input
                    type="text"
                    id="address2"
                    value={shippingAddress.address2}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, address2: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div> */}

              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sameAsShipping"
                  className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <label htmlFor="sameAsShipping" className="text-sm text-gray-700">
                  Same as shipping address
                </label>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between gap-4 pt-4">
              <button
                onClick={handleNavigation}
                className="py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-full md:w-72 h-12 px-3"
              >
                Back to cart
              </button>
              <button
                onClick={handleProceedToPayment}
                className="px-6 py-2 bg-primary text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-full md:w-72 h-12"
              >
                Proceed to shipping
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="p-6 rounded-lg border-2 border-gray-300 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            {/* Order Items */}
            <div className="space-y-4">
              {cartItems.map((product) => (
                <div key={product.id} className="flex items-center space-x-4">
                  <div className="relative h-16 w-16">
                    {product.image || product.imageUrl && (
                    <Image
                      src={product.image || product.imageUrl}
                      alt={product.name}
                      fill
                      className="rounded-md object-cover"
                    />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-500">
                      {product.quantity} x ${product.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      Total: ${(product.quantity * product.price).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Details */}
            <div className="mt-6 space-y-2 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${tax}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${(totalAmount + parseFloat(tax)).toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={orderComplete}
              className="w-full mt-10 px-6 py-2 bg-primary text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 h-12"
            >
              Place an order
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
}
