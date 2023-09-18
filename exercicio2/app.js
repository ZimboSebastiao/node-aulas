import express from "express";

const  app = express();

// configurando suporte a EJS

app.set('view engine', 'ejs');

// ROTAS

// raiz da aplicação
app.get('/', (req, res) => {
    res.render('paginas/index');
});

// 404
app.get('/404', (req, res) => {
    res.render('paginas/404');
});

// Rota genérica para capturar todas as outras solicitações GET não tratadas
// app.get('*', (req, res) => {
//     res.redirect('/404');
// });

app.use((req, res) => {
    res.render('paginas/404');
});

// Inicializar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando normalmente');
})