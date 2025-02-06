import { Button } from "../../../../components/ui/button"
import { Input } from "../../../../components/ui/input"
import { Label } from "../../../../components/ui/label"

export default function SettingsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <form className="space-y-4 max-w-md">
        <div>
          <Label htmlFor="site-name">Site Name</Label>
          <Input id="site-name" defaultValue="My Admin Dashboard" />
        </div>
        <div>
          <Label htmlFor="admin-email">Admin Email</Label>
          <Input id="admin-email" type="email" defaultValue="admin@example.com" />
        </div>
        <div>
          <Label htmlFor="timezone">Timezone</Label>
          <select id="timezone" className="w-full border rounded-md p-2" defaultValue="UTC">
            <option value="UTC">UTC</option>
            <option value="EST">EST</option>
            <option value="PST">PST</option>
          </select>
        </div>
        <div>
          <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="maintenance-mode" />
            <span>Enable maintenance mode</span>
          </div>
        </div>
        <Button type="submit">Save Settings</Button>
      </form>
    </div>
  )
}

