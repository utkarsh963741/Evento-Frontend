import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function ImageUpload({ url, sizeh, sizew, onUpload }) {
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (url) downloadImage(url)
  }, [url])

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage.from('images').download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data)
      console.log(url)
      setAvatarUrl(url)
    } catch (error) {
      console.log('Error downloading image: ', error.message)
    }
  }


  async function uploadAvatar(event) {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      let { data, error } = await supabase.storage
        .from('images')
        .upload(filePath, file)

      if (error) {
        console.log(error)
      }

      onUpload(filePath)
    } catch (error) {
      alert(error.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      {avatarUrl ? (
          <img src={avatarUrl} alt="dummy" height={sizeh} width={sizew} style={{border:"2px solid #ccc",borderRadius:"5px"}}/>
      ) : (
        <div style={{ width: sizew }}>
        <label className="button primary block" htmlFor="single">
            <div style={{height:sizeh,width:sizew,border:"2px solid #ccc",borderRadius:"5px",display:"flex",alignItems:"center",justifyContent:"center", color:"#ccc"}}>
                {uploading ? 'Uploading ...' : <i className="fa fa-camera fa-2x"></i>}
            </div>
        </label>
        <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
      )}

    </div>
  )
}