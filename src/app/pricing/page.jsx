'use client'
import { Layout } from '@/components/Layout'
import React, { useState } from 'react'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
// import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
// import { CheckIcon, MinusIcon } from '@her'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$399', annually: '$4200' },
    description: 'The essentials to provide your best work for clients.',
    features: [
      '20 users',
      '10 automations',
      '7 modules',
      '1 million invocations',
      '5 reports',
      '14 day restore log',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '24/7-hour support',
      '1 Dashboard',
      '10 GB storage',
      '3 Data Capture Forms',
      '5 Custom Docs',
    ],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$799', annually: '$8800' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '150 users',
      '10 automations',
      '7 modules',
      '1 million invocations',
      '5 reports',
      '14 day restore log',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '24/7-hour support',
      '1 Dashboard',
      '10 GB storage',
      '3 Data Capture Forms',
      '5 Custom Docs',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: 'Custom', annually: 'Custom' },
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
    mostPopular: false,
  },
]

const projects = [
  {
    name: 'Integrated Modules',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
  },
  {
    name: 'CMMS',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'ERPs',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'Projects',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
  },
  {
    name: 'HR & Payroll',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Operations',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Inventory',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Custom',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

const metadata = {
  title: 'Pricing',
  description: 'Things I’ve made trying to put my dent in the universe.',
}
const page = () => {
  //   const [frequency, setFrequency] = useState(frequencies[0])
  return (
    <div className="grid  sm:grid-cols-1 lg:grid-cols-2">
      <div></div>
      <span className="col-span-1 ">
        {' '}
        <Layout>
          <>
            <div className="bg-white dark:bg-gray-950">
              <div className="mx-auto max-w-7xl px-6 lg:px-2">
                <div className="mx-auto max-w-4xl text-center">
                  {/* <h2 className="text-base font-semibold leading-7 text-blue-600">
                    Pricing
                  </h2> */}
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Pricing that Grows with Your Business
                  </p>
                </div>
                <p className="text-md mx-auto mt-3 max-w-2xl text-center leading-8 text-gray-600">
                  Navigate confidently through our pricing tiers, knowing that
                  each plan is meticulously designed to maximize your ROI.
                  {/* Discover the plan that aligns with your goals and sets your
                  business on the path to excellence. */}
                </p>
                <div className="mb-6 mt-4 flex justify-center">
                  {/* <RadioGroup
                    value={frequency}
                    onChange={setFrequency}
                    className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
                  >
                    <RadioGroup.Label className="sr-only">
                      Payment frequency
                    </RadioGroup.Label>
                    {frequencies.map((option) => (
                      <RadioGroup.Option
                        key={option.value}
                        value={option}
                        className={({ checked }) =>
                          classNames(
                            checked
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-500',
                            'cursor-pointer rounded-full px-2.5 py-1',
                          )
                        }
                      >
                        <span>{option.label}</span>
                      </RadioGroup.Option>
                    ))}
                  </RadioGroup> */}
                </div>
                <div className="isolate mx-auto mt-2 grid max-w-md grid-cols-1 gap-4 pr-3 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  {tiers.map((tier) => (
                    <div
                      key={tier.id}
                      className={classNames(
                        tier.mostPopular
                          ? 'ring-2 ring-blue-600'
                          : 'ring-1 ring-gray-200',
                        'rounded-3xl p-3 xl:p-6',
                      )}
                    >
                      <div className="flex items-center justify-between gap-x-4">
                        <h3
                          id={tier.id}
                          className={classNames(
                            tier.mostPopular
                              ? 'text-blue-600'
                              : 'text-gray-900',
                            'text-lg font-semibold leading-8',
                          )}
                        >
                          {tier.name}
                        </h3>
                        {tier.mostPopular ? (
                          <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                            Most popular
                          </p>
                        ) : null}
                      </div>
                      <p className="mt-4 text-xs leading-6 text-gray-600">
                        {tier.description}
                      </p>
                      <p className="mt-4 flex items-baseline gap-x-1">
                        <span className="text-2xl font-bold tracking-tight text-gray-900">
                          {tier.price[frequency.value]}
                        </span>
                        <span className="text-sm font-semibold leading-6 text-gray-600">
                          {frequency.priceSuffix}
                        </span>
                      </p>
                      <a
                        href={tier.href}
                        aria-describedby={tier.id}
                        className={classNames(
                          tier.mostPopular
                            ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500'
                            : 'text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300',
                          'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
                        )}
                      >
                        Buy plan
                      </a>
                      <ul
                        role="list"
                        className="mt-4 space-y-1 text-xs leading-6 text-gray-600 xl:mt-4"
                      >
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              className="h-6 w-5 flex-none text-blue-600"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        </Layout>
      </span>
    </div>
  )
}
export default page
