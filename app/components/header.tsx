import { MenuSquare } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet"

export default function Header() {
    return (
        <header className="flex justify-between items-center p-2 w-full">
            <Sheet>
                <SheetTrigger>
                    <Button variant="ghost" size="icon"><MenuSquare className="h-4 w-4" /></Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            <h1 className="text-2xl font-bold">Luki Zainur</h1>
            <ModeToggle />
        </header>
    )
}