import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import GoogleSVG from "@/assets/illustrations/google.svg";

export function RegisterForm() {
  return (
    <>
      <Card className="w-5/6">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Change your password here. After saving, you'll be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-5 space-y-2">
          <FormFields />
          <Separator orientation="vertical" className="h-80" />
          <div className="flex flex-col items-center w-2/6 justify-center">
            <span className="text-md font-medium mb-2">Continue with</span>
            <Button variant={"outline"} className="rounded-xl">
              <img src={GoogleSVG} alt="" className="w-5 h-5 me-2" /> Google
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Register now</Button>
        </CardFooter>
      </Card>
    </>
  );
}
function FormFields() {
  return (
    <div className="flex flex-col w-5/6">
      <div className="space-y-1">
        <Label htmlFor="current">Full name</Label>
        <Input id="current" type="text" />
        {/* <FormDescription>This is your public display name.</FormDescription> */}
      </div>
      <div className="space-y-1">
        <Label htmlFor="current">Email ID</Label>
        <Input id="current" type="email" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="new">Password</Label>
        <Input id="new" type="password" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="new">Mobile number</Label>
        <Input id="new" type="tel" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="new">Create a persona for (optional)</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="system">All</SelectItem>
            <SelectItem value="light">School</SelectItem>
            <SelectItem value="dark">Tutor</SelectItem>
            <SelectItem value="system">Listing</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="items-center flex space-y-2">
        <Checkbox id="terms1" />
        <div className="ms-2 grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
