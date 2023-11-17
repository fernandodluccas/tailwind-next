import { Input } from '@/app/components/Input'
import { SettingsTabs } from './components/SettingsTabs'
import { Mail } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
        >
          <div className="grid gap-3 grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <Input.Root>
                <Input.Control defaultValue={'Fernando'} id="firstName" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue={"D'luccas"} id="lastName" />
              </Input.Root>
            </div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="w-5 h-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                defaultValue={'fernandodluccas@gmail.com'}
                id="email"
                type="email"
              />
            </Input.Root>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
            </label>
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This image will be shown to other users in your profile.
            </span>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control defaultValue={'Software Engineer'} id="role" />
            </Input.Root>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Country
            </label>
            <Input.Root>
              <Input.Control defaultValue={'Software Engineer'} id="country" />
            </Input.Root>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Input.Root>
              <Input.Control defaultValue={'Software Engineer'} id="country" />
            </Input.Root>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
            </label>
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a few sentences about yourself.
            </span>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Portifolio projects
            </label>
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Share your work with the community.
            </span>
          </div>
          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
