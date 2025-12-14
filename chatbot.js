import ollama from 'ollama'
export async function getBotReply(message) {

    const response = await ollama.chat({
        model: 'gpt-oss:120b-cloud',
        messages: [{ role: 'user', content: message }],
    })
    return response.message.content;
}
