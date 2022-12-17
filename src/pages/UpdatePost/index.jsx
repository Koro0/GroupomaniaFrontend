import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { PostsServices } from '../../components/PostsServices'

export default function UplaodPost() {
    const [previewData, setPreviewData] = useState('')
    useEffect(() => {
        PostsServices.getOnePost().then((data) => setPreviewData(data))
    }, [])
    return (
        <div>
            <h1>uplaodPost</h1>
            {previewData &&
                <form onSubmit="">

                    <div id='formTitle'>
                        <label>Title :</label>
                        <input placeholder={previewData.title} />
                    </div>
                    <div id='formDescription'>
                        <label>Description :</label>
                        <input placeholder="Your content " />
                    </div>
                    <div>
                        <input type="file" accept='image/png, image/jpeg, image/jpg' />
                    </div>
                    <button type='submit' >Poster</button>
                </form>
            }
        </div>

    )
}
