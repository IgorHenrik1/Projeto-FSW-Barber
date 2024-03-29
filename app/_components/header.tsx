'use client';

import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SideMenu from './side-menu';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Header = () => {
    return (
        <header>
            <Card>
                <CardContent className="p-5 justify-between items-center flex flex-row">
                    <Link href="/">
                        <Image
                            src="/Logo.png"
                            alt="FSW Barber"
                            height={18}
                            width={120}
                        />
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <MenuIcon size={16} />
                            </Button>
                        </SheetTrigger>

                        <SheetContent className="p-0">
                            <SideMenu />
                        </SheetContent>
                    </Sheet>
                </CardContent>
            </Card>
        </header>
    );
};

export default Header;
