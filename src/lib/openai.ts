import {Configuration, OpenAIApi} from 'openai-edge'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY!
})

const openai = new OpenAIApi(config)

export async function generateImagePrompt(name: string){
    try {
        
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages:[
                {
                    role: 'system',
                    content: 'You are an creative and helpfull AI assistance which helps in creating interesting Thumbnail descriptions for my notes. Your output will be fetched into the DALLE API to generate a thumbnail. The description should be minimal and crisp.'
                },
                {
                    role: 'user',
                    content: `Please generate a thumbnail description for my notebook title ${name}`
                } 
            ]
        })

        const data = await response.json();
        const imageDescription = data.choices[0].message.content

        return imageDescription as string

    } catch (error) {
        
        console.log(error);
        
        throw error;

    }
}

export async function generateImage(image_description: string){
    try {
        const response = await openai.createImage({
            prompt: image_description,
            n: 1,
            size: '256x256'
        })

        const data = await response.json()
        const image_url = data.data[0].url

        return image_url as string;

    } catch (error) {
        console.error(error)
    }
}