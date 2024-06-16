const data = [
    {
        year: 2012,
        title: 'This is title 2012',
        paragraph1: 'Lorem ipsum dolor sit amet.',
        paragraph2: 'Est enim enim ab culpa soluta nam delectus inventore aut reiciendis natus. Ad error dolor et magnam amet et dolorem eaque.'
    },
    {
        year: 2013,
        title: 'A CONSTRUÇÃO DE UMA BASE: AMIZADE',
        paragraph1: 'Foi na sua cidade natal, Póvoa de Varzim, que o Artur e Edgar descobriram o gosto em comum pelo desporto, viagens e empreendedorismo.',
        paragraph2: 'Estava encontrada a base que os liga até aos dias de hoje.'
    },
    {
        year: 2014,
        title: 'This is title 2014',
        paragraph1: 'Ut quae nihil et numquam facilis qui quia nulla et laboriosam porro et dignissimos quis.',
        paragraph2: 'Non perferendis possimus ut pariatur ipsam et molestiae atque.'
    },
    {
        year: 2015,
        title: 'This is title 2015',
        paragraph1: 'Qui error molestias ex quia error in commodi quasi ab debitis.',
        paragraph2: 'Veniam vel numquam tenetur est voluptatem necessitatibus et quas consequatur.'
    },
    {
        year: 2016,
        title: 'This is title 2016',
        paragraph1: 'Quo enim consequatur eum cumque harum id impedit distinctio eum dignissimos impedit.',
        paragraph2: 'At voluptatem consequatur qui consequatur tempore et voluptas nihil ea quam labore ea iusto laborum non dolore explicabo aut incidunt doloremque.'
    },
    {
        year: 2017,
        title: 'This is title 2017',
        paragraph1: 'In labore amet aut neque nihil a galisum voluptas.',
        paragraph2: 'At doloribus quos qui ullam enim.'
    },
    {
        year: 2018,
        title: 'This is title 2018',
        paragraph1: 'Nam autem exercitationem a corrupti minima ea sunt nemo ad veniam incidunt qui earum galisum.',
        paragraph2: 'Qui quaerat voluptates ut nulla odio sed minus quia eum voluptatum excepturi id fugiat voluptate quo quae delectus qui delectus consequatur.'
    },
    {
        year: 2019,
        title: 'This is title 2019',
        paragraph1: 'Et laudantium sint est repudiandae voluptas in quidem expedita et atque dolorum rem nisi sint aut autem tempore.',
        paragraph2: 'Sed labore labore sit optio voluptas ut illum ducimus eos laborum natus quo aspernatur quod!'
    },
    {
        year: 2020,
        title: 'This is title 2020',
        paragraph1: 'Et quae voluptates qui harum harum ex nihil nesciunt et dolorem assumenda.',
        paragraph2: 'Eum blanditiis odio 33 veritatis eaque aut atque illo in Quis sint et officia enim et omnis voluptates aut reiciendis unde.'
    },
    {
        year: 2021,
        title: 'This is title 2021',
        paragraph1: 'Quo dolor deserunt aut Quis quidem est magnam voluptatum aut dolorem alias qui galisum galisum At libero eius sed quisquam debitis.',
        paragraph2: 'Ad commodi maiores ut placeat magnam At voluptates sapiente et harum recusandae.'
    },
    {
        year: 2022,
        title: 'This is title 2022',
        paragraph1: 'At fugiat voluptas aut vero nisi non accusamus aliquid hic impedit illo est velit dolor.',
        paragraph2: 'Cum temporibus magni aut quos nulla eos illo nemo ut odit molestiae.'
    },
    {
        year: 2023,
        title: 'This is title 2023',
        paragraph1: 'Non galisum dolorem est quia voluptas ab voluptatem laboriosam ea autem placeat ut enim necessitatibus.',
        paragraph2: 'Et sunt ipsam est eius voluptatem qui unde saepe est eius pariatur.'
    },
    {
        year: 2024,
        title: 'This is title 2024',
        paragraph1: 'Est dolores temporibus ut dolores libero eum obcaecati Quis. Ut soluta dolores aut nostrum veritatis hic saepe similique ut odit dolorem ut dolor optio.',
        paragraph2: 'Sed velit quia et voluptatum molestiae quo dolores expedita qui molestiae beatae est perferendis labore sed corrupti accusantium ea vitae nihil.'
    }
];



let UP = 2012;
let MIDDLE = 2013;
let DOWN = 2014;

document.getElementById('year2013').textContent = '2013';

document.getElementById('upArrow').addEventListener('click', function() {
    UP--;
    MIDDLE--;
    DOWN--;

    const currentElement = getElementByYear(data, MIDDLE);

    document.getElementById('year2012').textContent = UP;
    document.getElementById('year2013').textContent = MIDDLE;
    document.getElementById('year2014').textContent = DOWN;

    document.getElementById('title').textContent = currentElement.title;
    document.getElementById('paragraph1').textContent = currentElement.paragraph1;
    document.getElementById('paragraph2').textContent = currentElement.paragraph2;
});

document.getElementById('downArrow').addEventListener('click', function() {
    UP++;
    MIDDLE++;
    DOWN++;

    const currentElement = getElementByYear(data, MIDDLE);

    document.getElementById('year2012').textContent = UP;
    document.getElementById('year2013').textContent = MIDDLE;
    document.getElementById('year2014').textContent = DOWN;

    document.getElementById('title').textContent = currentElement.title;
    document.getElementById('paragraph1').textContent = currentElement.paragraph1;
    document.getElementById('paragraph2').textContent = currentElement.paragraph2;
});


const getElementByYear = (array, year) => {

    console.log("array", array);
    console.log("year", year);

    console.log(array.find(element => element.year === year));
    return array.find(element => element.year === year);
};