import React from 'react'
import { useNavigate } from 'react-router-dom';

function CompanySignup() {
const navigate=useNavigate();
    const validateForm = (e) => {
        e.preventDefault();
            navigate('/signin');
    };

  return (
<>
<div class="flex items-center justify-center bg-gray-100 min-h-screen">
  <form class="w-100 rounded overflow-hidden shadow-lg bg-white p-6 flex flex-col space-y-4" onSubmit={validateForm}>
    <div class="space-y-3">
      <div class="border-b border-gray-900/10 pb-2">
        <h2 class="font-semibold leading-7 text-gray-900 text-center text-2xl">Personal Information</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600 text-center">Use a permanent address where you can receive mail.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 
                placeholder-transparent focus:ring-2 focus:ring-indigo-600 transition duration-200 ease-in-out 
                focus:ring-inset focus:outline-none focus:shadow-outline" 
                placeholder="First name" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 
                placeholder-transparent focus:ring-2 focus:ring-indigo-600 transition duration-200 ease-in-out 
                focus:ring-inset focus:outline-none focus:shadow-outline" 
                placeholder="Last name" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 
                placeholder-transparent focus:ring-2 focus:ring-indigo-600 transition duration-200 ease-in-out 
                focus:ring-inset focus:outline-none focus:shadow-outline" 
                placeholder="Email address" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="contact" class="block text-sm font-medium leading-6 text-gray-900">Contact Number</label>
            <div class="mt-2">
              <input id="contact" name="contact" type="text" autocomplete="tel" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 
                placeholder-transparent focus:ring-2 focus:ring-indigo-600 transition duration-200 ease-in-out 
                focus:ring-inset focus:outline-none focus:shadow-outline" 
                placeholder="Contact Number" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="shopact" class="block text-sm font-medium leading-6 text-gray-900">ShopAct Number</label>
            <div class="mt-2">
              <input id="shopact" name="shopact" type="text" autocomplete="off" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 
                placeholder-transparent focus:ring-2 focus:ring-indigo-600 transition duration-200 ease-in-out 
                focus:ring-inset focus:outline-none focus:shadow-outline" 
                placeholder="ShopAct Number" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="din" class="block text-sm font-medium leading-6 text-gray-900">DIN</label>
            <div class="mt-2">
              <input id="din" name="din" type="text" autocomplete="off" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 
                placeholder-transparent focus:ring-2 focus:ring-indigo-600 transition duration-200 ease-in-out 
                focus:ring-inset focus:outline-none focus:shadow-outline" 
                placeholder="DIN" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="company-website" class="block text-sm font-medium leading-6 text-gray-900">Company Website</label>
            <div class="mt-2">
              <input id="company-website" name="company-website" type="url" autocomplete="off" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 
                placeholder-transparent focus:ring-2 focus:ring-indigo-600 transition duration-200 ease-in-out 
                focus:ring-inset focus:outline-none focus:shadow-outline" 
                placeholder="Company Website" />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
            <div class="mt-2">
              <select id="country" name="country" autocomplete="country-name" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 
                focus:ring-2 focus:ring-indigo-600 transition duration-200 ease-in-out focus:ring-inset focus:outline-none">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div class="col-span-full">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
            <div class="mt-2">
              <input type="text" name="street-address" id="street-address" autocomplete="street-address" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 
                placeholder-transparent focus:ring-2 focus:ring-indigo-600 transition duration-200 ease-in-out 
                focus:ring-inset focus:outline-none focus:shadow-outline" 
                placeholder="Street address" />
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
            <div class="mt-2">
              <input type="text" name="city" id="city" autocomplete="address-level2" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 
                placeholder-transparent focus:ring-2 focus:ring-indigo-600 transition duration-200 ease-in-out 
                focus:ring-inset focus:outline-none focus:shadow-outline" 
                placeholder="City" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
            <div class="mt-2">
              <input type="text" name="region" id="region" autocomplete="address-level1" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 
                placeholder-transparent focus:ring-2 focus:ring-indigo-600 transition duration-200 ease-in-out 
                focus:ring-inset focus:outline-none focus:shadow-outline" 
                placeholder="State / Province" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
            <div class="mt-2">
              <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" 
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 
                placeholder-transparent focus:ring-2 focus:ring-indigo-600 transition duration-200 ease-in-out 
                focus:ring-inset focus:outline-none focus:shadow-outline" 
                placeholder="ZIP / Postal code" />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex justify-evenly">
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900 transition transform hover:scale-105">Cancel</button>
        <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm 
          hover:bg-indigo-500 transition transform hover:scale-105 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Save
        </button>
      </div>
    </div>
  </form>
</div>



</>
  )
}

export default CompanySignup