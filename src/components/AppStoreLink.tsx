import Link from 'next/link'
import clsx from 'clsx'

export function AppStoreLink({
  color = 'black',
}: {
  color?: 'black' | 'white'
}) {
  return (
    <Link
      href="#"
      aria-label="Coming Soon on the App Store"
      className={clsx(
        'inline-flex items-center gap-2.5 rounded-lg px-4 py-2.5 transition-colors',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50',
      )}
    >
      <svg viewBox="0 0 17 20" className="h-5 w-auto" fill="currentColor">
        <path d="M13.154 10.627a5.255 5.255 0 0 1 2.502-4.407 5.376 5.376 0 0 0-4.236-2.29c-1.782-.188-3.51 1.066-4.418 1.066-.925 0-2.323-1.048-3.828-1.017a5.64 5.64 0 0 0-4.748 2.897c-2.053 3.556-.521 8.783 1.444 11.66.984 1.408 2.133 2.98 3.64 2.924 1.473-.06 2.023-.939 3.8-.939 1.76 0 2.275.94 3.811.904 1.58-.026 2.575-1.414 3.525-2.834a11.63 11.63 0 0 0 1.613-3.283 5.078 5.078 0 0 1-3.1-4.67l-.005-.01ZM10.253 2.2A5.171 5.171 0 0 0 11.436.494 5.264 5.264 0 0 0 8.032 2.26a4.923 4.923 0 0 0-1.213 3.568 4.35 4.35 0 0 0 3.434-1.627Z" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] font-normal">Coming Soon</span>
        <span className="text-base font-semibold -mt-0.5">App Store</span>
      </span>
    </Link>
  )
}
