"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="w-9 h-9">
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href="#about" className="block hover:text-primary transition-colors" onClick={closeMenu}>
              About
            </Link>
            <Link href="#skills" className="block hover:text-primary transition-colors" onClick={closeMenu}>
              Skills
            </Link>
            <Link href="#projects" className="block hover:text-primary transition-colors" onClick={closeMenu}>
              Projects
            </Link>
            <Link href="#contact" className="block hover:text-primary transition-colors" onClick={closeMenu}>
              Contact
            </Link>
            <div className="pt-2 border-t">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
