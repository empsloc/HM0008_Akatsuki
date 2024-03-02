import {
    LogOut,
    Mail,
    MessageSquare,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users
} from "lucide-react"
  
  import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut, useSession } from "next-auth/react"
  
  export function AccountButton() {
    const {data,status} = useSession()
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Account</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut></DropdownMenuShortcut>
            </DropdownMenuItem>
           
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut></DropdownMenuShortcut>
            </DropdownMenuItem>
           
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users className="mr-2 h-4 w-4" />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
           
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
         
          <DropdownMenuSeparator />
            {status==="authenticated"&&<button className="w-full" onClick={()=>signOut()}>
            <DropdownMenuItem >
                <LogOut className="mr-2 h-4 w-4" />
                <span >Log out</span>
                <DropdownMenuShortcut></DropdownMenuShortcut>
            </DropdownMenuItem>
            </button>}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  