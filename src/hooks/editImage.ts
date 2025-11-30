import { useState } from "react"
import {Asset, ImageLibraryOptions, ImagePickerResponse, launchImageLibrary} from "react-native-image-picker"

export const useEdit = () => {
    const [photo, setPhoto] = useState<Asset | null>(null);

    const selectImage = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            quality: 1
        }

        launchImageLibrary(options, (response: ImagePickerResponse) => {
            if(response.didCancel){
                console.log("User cancelled image picker");
                return;
            }else if(response.errorCode){
                console.log("Image picker error: ", response.errorMessage)
                return;
            }else if(response.assets && response.assets.length > 0){
                setPhoto(response.assets[0])
            }
        })
    }
    return {
        photo, selectImage
    }
}