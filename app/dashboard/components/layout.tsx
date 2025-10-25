'use client'
import { useAppStore } from "@/lib/store/useAppStore"
import { Button } from "@/components/ui/button"
export const themeToggle=()=>{
const {theme,setTheme}=useAppStore();
return (
<Button
variant='outline'
onClick={()=>setTheme(theme==='light'?'dark':'light')}
>
{theme==='light'?'dark':'light'}
</Button>
)
}