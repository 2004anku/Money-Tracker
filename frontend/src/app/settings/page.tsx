"use client";

import Link from "next/link";
import {
  UserRound,
  Palette,
  ChevronRight,
  Settings2,
  Sun,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import Sidebar from "@/components/Sidebar/Sidebar";
import ThemeToggle from "@/components/Theme/ThemeToggle";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <Sidebar />

      <main className="min-w-0 lg:ml-64">
        {/* Page Header */}
        <header className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                <Settings2 size={24} />
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                  Personal Finance
                </p>
                <h1 className="text-2xl font-bold tracking-tight text-text-primary">
                  Settings
                </h1>
                <p className="mt-1 text-sm text-text-secondary">
                  Manage your account and customize your experience.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Settings Content */}
        <div className="mx-auto max-w-6xl space-y-8 px-5 py-8 sm:px-6 lg:px-8">
          {/* Account Section */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                <UserRound size={18} />
              </div>

              <div>
                <h2 className="text-base font-semibold text-text-primary">
                  Account
                </h2>
                <p className="text-sm text-text-secondary">
                  Manage your personal information and account details.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
              <Link
                href="/profile"
                className="group flex items-center gap-4 p-5 transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500 sm:p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                  <UserRound size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-text-primary">
                    Profile Information
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    View and update your name, email and personal details.
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-text-secondary transition-all group-hover:border-emerald-300 group-hover:bg-emerald-50 group-hover:text-emerald-600 dark:group-hover:border-emerald-800 dark:group-hover:bg-emerald-950/50 dark:group-hover:text-emerald-400">
                  <ChevronRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </div>
              </Link>
            </div>
          </section>

          {/* Preferences Section */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400">
                <SlidersHorizontal size={18} />
              </div>

              <div>
                <h2 className="text-base font-semibold text-text-primary">
                  Preferences
                </h2>
                <p className="text-sm text-text-secondary">
                  Personalize how Money Tracker looks and feels.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
              {/* Appearance */}
              <div className="flex items-center gap-4 p-5 sm:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400">
                  <Palette size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-text-primary">
                    Appearance
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    Switch between light and dark mode.
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </section>

          {/* Security Section - Future Enhancement */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                <ShieldCheck size={18} />
              </div>

              <div>
                <h2 className="text-base font-semibold text-text-primary">
                  Security
                </h2>
                <p className="text-sm text-text-secondary">
                  Keep your account and personal information secure.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-border bg-surface/50 p-5 sm:p-6">
              <p className="text-sm font-medium text-text-primary">
                More security options coming soon
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Additional account security controls will be available here.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-border pt-5">
            <p className="text-center text-xs text-text-secondary">
              Money Tracker · Personal Finance Management
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
