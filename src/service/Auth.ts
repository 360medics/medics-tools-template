class AuthService
{
    $apiKey: string = null
    
    private getQueryParam(name: string)
    {
        const url = window.location.href
        name = name.replace(/[\[\]]/g, '\\$&')

        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
        const results = regex.exec(url)

        if (!results) {
            return null
        } else if (!results[2]) {
            return ''
        } else {
            return decodeURIComponent(results[2].replace(/\+/g, ' '))
        }
    }
    
    getApiKey()
    {
        return this.$apiKey
    }

    getApiKeyFromUrl()
    {
        this.$apiKey = this.getQueryParam("api_key")
        console.log("Got API key from URL: " + this.$apiKey)
        return this.$apiKey
    }
}


export default new AuthService()