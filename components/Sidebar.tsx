import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from '@/components/ui/command';
  import {
    LayoutDashboard,
    Newspaper,
    Folders,
    CreditCard,
    Settings,
    User,
  } from 'lucide-react';
  import Link from 'next/link';
  
  const Sidebar = () => {
    return (
      <Command className='bg-secondary rounded-none'>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
          <Link href='/' passHref>
            <CommandItem>
              <LayoutDashboard className='mr-2 h-4 w-4' />
              <span>Dashboard</span>
            </CommandItem>
          </Link>
          <Link href='/posts' passHref>
            <CommandItem>
              <Newspaper className='mr-2 h-4 w-4' />
              <span>Posts</span>
            </CommandItem>
          </Link>
          <Link href='#' passHref>
            <CommandItem>
              <Folders className='mr-2 h-4 w-4' />
              <span>Categories</span>
            </CommandItem>
          </Link>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Settings'>
            <CommandItem>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className='mr-2 h-4 w-4' />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className='mr-2 h-4 w-4' />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );
  };
  
  export default Sidebar;