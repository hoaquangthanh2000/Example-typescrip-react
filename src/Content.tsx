
import React, {  useEffect, useState } from "react"
// {target:{files: object[]}}
interface FileType extends File {
   
        preview?: string 
    
}
function Content(){
    const [avatar,setAvatar] = useState<FileType>()

    const handlePreviewAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        if( e.target.files){
            const file:FileType = e.target.files[0]
            file.preview = URL.createObjectURL(file)
            setAvatar(file)
        }
    }

    return (
        <div>
           <input
                type="file"
                onChange={handlePreviewAvatar}
           />
           {avatar && (
                <img src={avatar.preview} width="80%"/>
           )}
        </div>
    )
}
export default Content