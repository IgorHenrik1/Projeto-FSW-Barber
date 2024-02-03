'use client';

import { MenuIcon } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import SideMenu from './side-menu';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Header = () => {
    const { data, status } = useSession();
    const handleLogoutClick = () => signOut();
    const handleLoginClick = () => signIn('google');
    return (
        <Card>
            <CardContent className="p-5 justify-between items-center flex flex-row">
                <Image
                    src="/Logo.png"
                    alt="FSW Barber"
                    height={22}
                    width={120}
                />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                        >
                            <MenuIcon size={16} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
    );
};

export default Header;
