import http from 'http'; // Importando módulo nativo http
import fs from 'fs/promises'; // permite ao servidor acesso ao sistema de arquivos (módulo nativo)

// constante que monitora requisiçoes e recebe dois parâmetros req (requisição) e res (resposta)

const monitoraRequisicao = (req, res) => { // arrow function
    // configurando o cabeçalho da resposta para trabalhar com arquivos html e charcet-utf8
    res.writeHead(200, {"Content-Type" : "text/html;charset=utf8"});

    switch (req.url) {
        case '/':
            // exibir index.html
            // res.end('Servidor Node rodando no navegador.');

            // fs faz o carregamento e leitura do arquivo
            fs.readFile('paginas/index.html')

            // depois de pronto
            .then(conteudo => res.end(conteudo));
            break;

        case '/sobre':
            // exibir sobre.html

            fs.readFile('paginas/sobre.html').then(conteudo => res.end(conteudo));
            break;
    
        default:
            // exibir 404.html
            res.writeHead(404);
            fs.readFile('paginas/404.html').then(conteudo => res.end(conteudo));
            break;
    }
};

// Criando o servidor http e indicando a função de requisições
const servidor = http.createServer(monitoraRequisicao);

// iniciando a escuta do servidor local na porta 8080
// servidor.listen(8080); // só esse trecho seria suficiente, mas é importante rodar a mensagem para ter certeza que tudo deu certo


servidor.listen(8080, () => {
    console.log("Servidor node rodando normalmente");
});