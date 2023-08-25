'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { IconLink } from './IconLink'

function ThemeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z"
      />
    </svg>
  )
}

export function ThemeToggle() {
  let [mounted, setMounted] = useState(false)
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  function BookIcon(props) {
    return (
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        // fill="currentColor"
        {...props}
      >
        <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
      </svg>
    )
  }

  return (
    <div className="flex gap-x-4">
      {' '}
      <button
        type="button"
        className="group absolute right-4 top-4 z-50 -m-2.5 p-2.5"
        onClick={() => setTheme(otherTheme)}
      >
        <span className="sr-only">Switch to {otherTheme} theme</span>

        <ThemeIcon className="h-6 w-6 fill-white opacity-50 transition-opacity group-hover:opacity-100 lg:fill-gray-900 lg:dark:fill-white" />
      </button>
      {/* <a
        href="#"
        className="group absolute right-4 top-4 z-50 -m-2.5 -mx-3 block rounded-lg p-2.5 px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        Log in
      </a> */}
      {/* <button
        type="button"
        className="group absolute right-4 top-4 z-50 -m-2.5 inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 p-2.5 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Login d
      </button> */}
      <span href="/" icon={BookIcon} className="my-2 flex-none text-gray-700">
        Login
      </span>
      {/* <button
        type="button"
        className="group absolute right-4 top-4 z-50 -m-2.5 p-2.5"
        onClick={() => setTheme(otherTheme)}
      >
        <span className="sr-only">Switch to {otherTheme} theme</span>
        <ThemeIcon className="h-6 w-6 fill-white opacity-50 transition-opacity group-hover:opacity-100 lg:fill-gray-900 lg:dark:fill-white" />
      </button> */}
    </div>
  )
}
