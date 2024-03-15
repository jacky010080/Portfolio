import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials 
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4" 
            iconsStyles="text-[20px] text-primary dark:text-white/70 hover:text-white dark:hover:text-primary transition-all" 
          />
          <div className="text-muted-foreground">Copyright &copy; Yen-Jung, Chen. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}