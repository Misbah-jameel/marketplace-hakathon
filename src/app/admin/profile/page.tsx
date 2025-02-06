import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar"
import { Button } from "../../../../components/ui/button"
import { Badge } from "../../../../components/ui/badge"
import { Calendar, Mail, Phone, MapPin, Briefcase, GraduationCap, Globe } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Profile</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/2.jpg" alt="Misbah Jameel" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-semibold">Misbah Jameel</h3>
                <p className="text-sm text-gray-500">Senior Admin</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <p className="text-sm">misbahjameel892@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-500" />
                <p className="text-sm">+1 (333) 123-4567</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <p className="text-sm">Pakistan ,Karachi</p>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <p className="text-sm">Joined April 2023</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Professional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Briefcase className="h-4 w-4 text-gray-500" />
                <p className="text-sm">Student of GIAIC </p>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-4 w-4 text-gray-500" />
                <p className="text-sm">Intermediate of Digree College</p>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-gray-500" />
                <p className="text-sm">Urdu Arabic English</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Html Css</Badge>
                <Badge>Typescript</Badge>
                <Badge>NextJs , ReactJs</Badge>
                <Badge>UI UX Design</Badge>
                <Badge>NodeJs</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Network</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-semibold">1,234</p>
                <p className="text-sm text-gray-500">Followers</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">500+</p>
                <p className="text-sm text-gray-500">Connections</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">500+</p>
                <p className="text-sm text-gray-500">Requests</p>
              </div>
            </div>
            <Button className="w-full bg-green-600">View Network</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Badge variant="outline">Product Update</Badge>
                <span className="text-sm">Updated product roadmap for Q3</span>
              </li>
              <li className="flex items-center space-x-3">
                <Badge variant="outline">Team Meeting</Badge>
                <span className="text-sm">Conducted weekly team sync</span>
              </li>
              <li className="flex items-center space-x-3">
                <Badge variant="outline">Report</Badge>
                <span className="text-sm">Submitted monthly analytics report</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

