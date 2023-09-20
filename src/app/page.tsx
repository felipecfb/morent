import { Button } from './components/Button'

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-secondary-700">
      <div className="flex items-center gap-2">
        <Button variation="primary" title="Label" rightIcon />
        <Button variation="primary" title="Label" />
        <Button variation="primary" title="Label" disabled />
      </div>
      <div className="flex items-center gap-2">
        <Button variation="secondary" title="Label" rightIcon />
        <Button variation="secondary" title="Label" />
        <Button variation="secondary" title="Label" disabled />
      </div>
      <div className="flex items-center gap-2">
        <Button variation="minimal" title="Label" rightIcon />
        <Button variation="minimal" title="Label" />
        <Button variation="minimal" title="Label" disabled />
      </div>
    </div>
  )
}
