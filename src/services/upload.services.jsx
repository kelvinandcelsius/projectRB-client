import axios from 'axios'

class UploadServices {

    constructor() {

        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/upload`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    uploadImage(imageForm) {
        return this.api.post('/image', imageForm)
    }

    async uploadPolicy(file) {
        try {
            const response = await this.api.post('/policy', { fileName: file.name })
            const presignedUrl = response.data.presignedUrl

            await axios.put(presignedUrl, file, {
                headers: {
                    'Content-Type': file.type
                }
            })
            return response
        } catch (error) {
            console.error('Error uploading file:', error)
            throw error
        }
    }
}

const uploadServices = new UploadServices()

export default uploadServices
