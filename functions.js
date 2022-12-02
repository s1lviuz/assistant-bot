const axios = require('axios');

const verificaMensagem = (mensagem) => {
    const regex =  new RegExp(/noticia/i)
    if (regex.test(mensagem)) {
        return true
    } else {
        return false
    }
}

const buscaNoticiasGlobo = async () => {
    return axios({
        method: 'get',
        url: 'https://www.globo.com/'
    })
        .then(response => response.data)
        .then(text => text.match(/<(\h2 class="post__title"+)[\s\S]*?>([\s\S]*?)<\/\h2>/g))
        .then(elements => elements.map(element => {
            return element.replace(/<h2 class="post__title">/, '').replace(/<\/h2>/, ' \n\n ').replace(/&[\s\S]*;/, '')
        }))
}

module.exports = { verificaMensagem, buscaNoticiasGlobo }