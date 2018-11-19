const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');


const board = [
    {
        id: 1,
        title: 'First announcement',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
        + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        + ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure '
        + 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
        + 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt '
        + 'mollit anim id est laborum.',
        createdAt: (new Date()).toLocaleString(),
    },
    {
        id: 2,
        title: 'Second announcement',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
        + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        + ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure '
        + 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
        + 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt '
        + 'mollit anim id est laborum.',
        createdAt: (new Date()).toLocaleString(),
    },
    {
        id: 3,
        title: 'Third announcement',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
        + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        + ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure '
        + 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
        + 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt '
        + 'mollit anim id est laborum.',
        createdAt: (new Date()).toLocaleString(),
    },
    {
        id: 4,
        title: 'Forth announcement',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
        + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        + ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure '
        + 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
        + 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt '
        + 'mollit anim id est laborum.',
        createdAt: (new Date()).toLocaleString(),
    },
];


app.use(cors());
app.use(bodyParser({
    extendTypes: {
        json: ['application/x-javascript'], // will parse application/x-javascript type body as a JSON string
    },
}));

function sendBoard(ctx) {
    ctx.body = board;
}

function createItem(ctx) {
    const { body } = ctx.request;
    if (!body.title || !body.text) {
        ctx.response.status = 400;
        ctx.body = { message: 'Bad Request' };
    }

    const announcement = {
        ...body,
        id: board.length + 1,
        createdAt: (new Date()).toLocaleString(),
    };
    board.push(announcement);
    ctx.body = announcement;
}

function deleteItem(ctx) {
    const index = board.findIndex(announcement => announcement.id === +ctx.params.id);

    if (index === -1) {
        ctx.status = 204;
        ctx.body = { message: 'Not found' };
    } else {
        board.splice(index, 1);
        ctx.status = 202;
        ctx.body = { message: 'Removed' };
    }
}

function updateItem(ctx) {
    const index = board.findIndex(announcement => announcement.id === +ctx.params.id);
    const { body } = ctx.request;

    if (!body.title || !body.text || index === -1) {
        ctx.response.status = 400;
        ctx.body = { message: 'Bad Request' };
    }

    board[index] = {
        ...board[index],
        title: body.title,
        text: body.text,
    };
    ctx.status = 200;
    ctx.body = board[index];
}


router.get('/announcements', sendBoard);

router.post('/announcements', createItem);

router.del('/announcements/:id', deleteItem);

router.put('/announcements/:id', updateItem);

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3003);
