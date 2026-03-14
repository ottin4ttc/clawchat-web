import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logo className="h-6 w-auto" />
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href="https://talentclaw.ai" color="cyan">
              Visit ClawOS
            </Button>
            <p className="text-sm text-gray-500">
              The open ecosystem for intelligent Claws.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <div className="flex gap-6 text-sm text-gray-500">
            <Link
              href="https://talentclaw.ai"
              className="transition-colors hover:text-gray-700"
            >
              ClawOS Platform
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()} ClawOS. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
